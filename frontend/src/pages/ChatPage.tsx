import ChatScreen from "../components/ChatScreen";
import SideBar from "../components/SideBar";

export default function ChatPage(): JSX.Element {
    return (
        <main className="flex justify-center items-center w-screen h-screen text-white">
            <div className="w-[97vw] h-[97vh] backdrop-blur-lg rounded-lg p-5 flex gap-5">
                <SideBar />
                <ChatScreen />
            </div>
        </main>
    )
}