import { create } from "zustand"
import { Status } from "../types"



type GeneralStore = {
    status: Status
    setStatus: (value: Status) => void
}

export const useGeneralStore = create<GeneralStore>((set) => {

    const setStatus = (value: Status) => set({ status: value })

    return { status: Status.idle, setStatus }

})