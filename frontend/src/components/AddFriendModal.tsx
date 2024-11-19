import { useRef, useEffect, useState, ChangeEvent } from "react"
import { useChatStore, User as UserType } from "../store/useChatStore"
import { request, tryCatch } from "../utils/functions"
import { User } from "lucide-react"

export default function AddFriendModal() {

    const isOpen = useChatStore((state) => state.isAddFriendModalOpen)
    const setModal = useChatStore((state) => state.setAddFriendModal)
    const setSelectedFriend = useChatStore((state) => state.setSelectedFriend)
    const [focus, setFocus] = useState<number>(-1)
    const [friendName, setFriendName] = useState<string>("")

    const [FriendsList, setFriendList] = useState<UserType[]>([])

    const modalRef = useRef<HTMLDivElement | null>(null)

    const resetStates = () => {
        setFocus(-1)
        setFriendList([])
        setFriendName("")
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !modalRef.current?.contains(event.target as Element)) {
                setModal(false)
            }
        }

        setFriendList([])

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            resetStates()
        }
    }, [isOpen])


    const fetchSuggestions = async (value: string) => {
        const { data } = await tryCatch(() => request.get(`/users?search_query=${value}`))
        if (data && data.success) {
            setFriendList(data.content)
        }
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFriendName(e.target.value)
        fetchSuggestions(e.target.value)
    }

    const handleFocus = (type: "Increment" | "Decrement") => {
        switch (type) {
            case "Increment":
                setFocus(prev => prev + 1)
                break;
            case "Decrement":
                setFocus(prev => prev - 1)
                break
        }
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        const currentFocus = focus;
        switch (event.key) {
            case "ArrowDown":
                (currentFocus < FriendsList.length - 1) ? handleFocus("Increment") : null
                break;
            case "ArrowUp":
                (currentFocus > -1) ? handleFocus("Decrement") : null
                break;
            case "Enter":
                if (currentFocus > -1 && currentFocus < FriendsList.length) {
                    onSuggestionClick(currentFocus)
                }
                break;
            default:
                return
        }
    }

    const onSuggestionClick = (focus: number) => {
        setSelectedFriend(FriendsList[focus])
        setModal(false)
    }

    if (!isOpen) {
        return null
    }

    return (

        <div className="fixed h-screen w-screen backdrop-blur-sm left-0 top-0 z-10 " >

            <div ref={modalRef} className="fixed top-1/4 left-1/3 w-1/3 rounded-lg z-20  min-h-16 bg-gray-200 p-2 ">

                <input
                    type="text"
                    placeholder="Search your friend by email or name"
                    className="w-full rounded-lg h-10 px-2 focus:outline-none focus:border-slate-400 focus:border-[1px] text-black"
                    onKeyDown={handleKeyDown}
                    value={friendName}
                    onChange={handleOnChange}
                />

                <div className="bg-gray-400  h-[1px] my-2" />
                {FriendsList && FriendsList.map((friend: any, i) => (
                    <div key={i} onClick={() => onSuggestionClick(i)} onMouseOver={() => setFocus(i)} className={`cursor-pointer flex gap-3 items-center font-semibold  px-2 py-3 border border-gray-400 rounded-lg ${i == focus ? "bg-gray-500 text-white" : "text-black"}`}>
                        {friend.profile_photo ?
                            <img src={friend.profile_photo} className="rounded-full  w-[60px] h-[60px] border-2 border-white " alt="profile photo" />
                            :
                            <User className="rounded-full text-center bg-white  w-[50px] h-[50px] border-2 border-white text-gray-600 " />
                        }
                        {friend.name}
                    </div>
                ))}

            </div>
        </div>

    )
}