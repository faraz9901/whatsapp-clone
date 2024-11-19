import { create } from "zustand"
import { errorToast, request, tryCatch } from "../utils/functions"
import { toast } from "react-toastify"
import { User } from "../types"

type Auth = {
    user: User | null
    validateOtp: (email: string, otp: string) => Promise<boolean>
    requestForOtp: (email: string) => Promise<boolean>
    logOut: () => Promise<void>
    fetchUser: () => Promise<void>
}

export const useAuth = create<Auth>((set) => {

    const requestForOtp = async (email: string) => {
        const { error } = await tryCatch(() => request.post("/users/login", { email }))

        if (error) {
            errorToast(error)
            return false
        } else {
            return true
        }
    }

    const validateOtp = async (email: string, otp: string) => {
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
    }


    const logOut = async () => {
        await tryCatch(() => request.put("/users/logout"))

        set({ user: null })

        toast('User logged out', { autoClose: 1000 })
    }

    const fetchUser = async () => {
        const { data, error } = await tryCatch(() => request.get("/users/user"))

        if (error) {
            set({ user: null })
        }

        if (data) {
            set({ user: data.content })
        }
    }

    return { user: null, requestForOtp, validateOtp, logOut, fetchUser }
})