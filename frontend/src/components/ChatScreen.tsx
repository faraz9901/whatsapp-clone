import ChatSearch from "./ChatSearch";
import ChatView from "./ChatView";

export default function ChatScreen() {
    return (
        <section className="flex-grow  rounded-lg flex flex-col gap-5">
            <ChatSearch />
            <ChatView />
        </section >
    )
}