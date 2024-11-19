import { create } from "zustand"
import { User } from "../types"

type useChat = {
    isAddFriendModalOpen: boolean
    setAddFriendModal: (value: boolean) => void
    selectedFriend: User | null
    setSelectedFriend: (value: User) => void
}

export const useChatStore = create<useChat>((set) => {

    const setAddFriendModal = (value: boolean) => {
        set({ isAddFriendModalOpen: value })
    }

    const setSelectedFriend = (value: User) => {
        set({ selectedFriend: value })
    }

    return (
        {
            isAddFriendModalOpen: false,
            setAddFriendModal,
            selectedFriend: null,
            setSelectedFriend
        }
    )
})