import Chat from "./Chat";
import Inbox from "./Inbox";

export default function ChatView() {
    return (
        <section className=" rounded-lg flex gap-5 w-full h-full">
            < Inbox />
            <Chat />
        </section >
    )
}