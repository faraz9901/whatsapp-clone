import Chat from "./Chat";
import Inbox from "./Inbox";

export default function ChatView() {
    return (
        <section className=" rounded-lg flex flex-grow gap-5 w-full h-full">
            <Inbox />
            <Chat />
        </section >
    )
}