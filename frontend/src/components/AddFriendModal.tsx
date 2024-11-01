import { useRef, useEffect } from "react"
import { useChatStore } from "../store/useChatStore"

export default function AddFriendModal() {

    const isOpen = useChatStore((state) => state.isAddFriendModalOpen)
    const setModal = useChatStore((state) => state.setAddFriendModal)

    const modalRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !modalRef.current?.contains(event.target as Element)) {
                setModal(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    if (!isOpen) {
        return null
    }

    return (

        <div className="fixed h-screen w-screen   backdrop-blur-sm left-0 top-0 z-10" >

            <div ref={modalRef} className="fixed top-1/4 left-1/3 w-1/3 rounded-lg z-20  min-h-16 bg-gray-200 p-2 ">

                <input type="text" placeholder="Search your friend by email or name" className="w-full rounded-lg h-10 px-2 focus:outline-none focus:border-slate-400 focus:border-[1px] text-black" />

                <div className="bg-gray-400 h-[1px] my-2" />

            </div>
        </div>

    )
}