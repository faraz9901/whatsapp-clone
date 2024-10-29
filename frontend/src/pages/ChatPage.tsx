import { useEffect } from "react";
import ChatScreen from "../components/ChatScreen";
import SideBar from "../components/SideBar";
import { errorToast, request, tryCatch } from "../utils/functions";
import { useNavigate } from "react-router-dom";

export default function ChatPage(): JSX.Element {
    const navigate = useNavigate()

    useEffect(() => {

        const fetchChat = async () => {
            const { error } = await tryCatch(() => request.get('/chat'))
            if (error) {
                errorToast(error)
                navigate("/", { replace: true })
            }
        }

        fetchChat()

    }, [])



    return (
        <main className="flex justify-center items-center w-screen h-screen text-slate-200">
            <div className="w-[97vw] h-[97vh] backdrop-blur-lg rounded-lg p-5 flex gap-5">
                <SideBar />
                <ChatScreen />
            </div>
        </main>
    )
}