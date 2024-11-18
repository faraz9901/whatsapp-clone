import { create } from "zustand"

export type User = {
    email: string
    name: string
    _id: string
}

type useChatType = {
    isAddFriendModalOpen: boolean
    setAddFriendModal: (value: boolean) => void
    selectedFriend: User | null
    setSelectedFriend: (value: User) => void
}

export const useChatStore = create<useChatType>((set) => {

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