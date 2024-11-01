import { create } from "zustand"

type useChatType = {
    isAddFriendModalOpen: boolean
    setAddFriendModal: (value: boolean) => void
}

export const useChatStore = create<useChatType>((set) => {

    return (
        {
            isAddFriendModalOpen: false,
            setAddFriendModal: (value) => {
                set({ isAddFriendModalOpen: value })
            }

        }
    )
})