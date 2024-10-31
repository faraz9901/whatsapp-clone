import { create } from "zustand"
import { errorToast, request, tryCatch } from "../utils/functions"
import { toast } from "react-toastify"

type useAuthType = {
    user: any
    validateOtp: (email: string, otp: string) => Promise<boolean>
    requestForOtp: (email: string) => Promise<boolean>
    logOut: () => Promise<void>
    fetchUser: () => Promise<void>
}

export const useAuth = create<useAuthType>((set) => {

    return (
        {
            user: null,

            requestForOtp: async (email) => {
                const { error } = await tryCatch(() => request.post("/users/login", { email }))

                if (error) {
                    errorToast(error)
                    return false
                } else {
                    return true
                }
            },

            validateOtp: async (email, otp) => {
                const { data, error } = await tryCatch(() => request.post("/users/validate-otp", { email, otp }))
                if (error) {
                    errorToast(error)
                    return false
                }
                if (data) {
                    set({ user: data.content })
                    return true
                }
                return false
            },

            logOut: async () => {
                await tryCatch(() => request.put("/users/logout"))

                set({ user: null })

                toast('User logged out', { autoClose: 1000 })
            },

            fetchUser: async () => {
                const { data, error } = await tryCatch(() => request.get("/users/user"))

                if (error) {
                    set({ user: null })
                }

                if (data) {
                    set({ user: data.content })
                }
            }
        }
    )
})