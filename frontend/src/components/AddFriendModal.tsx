import { useRef, useEffect, useState } from "react"
import { useChatStore } from "../store/useChatStore"

export default function AddFriendModal() {

    const isOpen = useChatStore((state) => state.isAddFriendModalOpen)
    const setModal = useChatStore((state) => state.setAddFriendModal)
    const [focus, setFocus] = useState<number>(-1)
    const [friendName, setFriendName] = useState<string>("")

    const [FriendsList, setFriendList] = useState<Array<string>>([])

    const modalRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !modalRef.current?.contains(event.target as Element)) {
                setModal(false)
            }
        }

        setFriendList(["Md Faraz", "Md farhaan"])

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    const handleFocus = (type: "Increment" | "Decrement" | "Reset") => {
        switch (type) {
            case "Increment":
                setFocus(prev => prev + 1)
                break;
            case "Decrement":
                setFocus(prev => prev - 1)
                break;
            case "Reset":
                setFocus(-1)
                break;
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
                    handleFocus("Reset")
                    setFriendName(FriendsList[currentFocus])
                    setFriendList([])
                }
                break;
            default:
                return
        }
    }
    if (!isOpen) {
        return null
    }

    return (

        <div className="fixed h-screen w-screen   backdrop-blur-sm left-0 top-0 z-10" >

            <div ref={modalRef} className="fixed top-1/4 left-1/3 w-1/3 rounded-lg z-20  min-h-16 bg-gray-200 p-2 ">

                <input
                    type="text"
                    placeholder="Search your friend by email or name"
                    className="w-full rounded-lg h-10 px-2 focus:outline-none focus:border-slate-400 focus:border-[1px] text-black"
                    onKeyDown={handleKeyDown}
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)}
                />

                <div className="bg-gray-400 h-[1px] my-2" />

                {FriendsList && FriendsList.map((friend: string, i: number) => (
                    <div key={i} onClick={() => { }} className={`cursor-pointer  px-2 py-3 border border-gray-400 rounded-lg ${i == focus ? "bg-purple-500 text-white" : "text-black"}`}>{friend} {i}</div>
                ))}

            </div>
        </div>

    )
}