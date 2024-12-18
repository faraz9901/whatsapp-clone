import { useEffect } from "react";
import ChatScreen from "../components/ChatScreen";
import SideBar from "../components/SideBar";
import AddFriendModal from "../components/AddFriendModal";

export default function ChatPage(): JSX.Element {

    useEffect(() => {
        document.title = "F-Chat"
    }, [])

    return (
        <main className="flex justify-center items-center w-screen h-screen text-slate-200">
            <div className="w-[97vw] h-[97vh] backdrop-blur-lg rounded-lg p-5 flex gap-5">
                <SideBar />
                <ChatScreen />
            </div>
            <AddFriendModal />
        </main>
    )
}