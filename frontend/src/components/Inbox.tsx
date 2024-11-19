import { useChatStore } from "../store/useChatStore"
import Friend from "./Friend"

const chats = [{
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s",
    name: "Fabio",
    message: "Hi There!"
},
{
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s",
    name: "Fabio",
    message: "Hi There!"
},
{
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s",
    name: "Fabio",
    message: "Hi There!"
},
{
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s",
    name: "Fabio",
    message: "Hi There!"
},
{
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s",
    name: "Fabio",
    message: "Hi There!"
},
{
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s",
    name: "Fabio",
    message: "Hi There!"
},
{
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s",
    name: "Fabio",
    message: "Hi There!"
},
]

export default function Inbox() {

    const setOpen = useChatStore(state => state.setAddFriendModal)

    return (
        <section className="background-color w-1/3 p-3 rounded-lg h-[75vh] overflow-auto">
            <div className="flex justify-between">
                <h3 className="font-semibold">
                    Inbox
                </h3>

                <button
                    type="button"
                    className="bg-pink-700 duration-300 focus:outline-none rounded-lg px-2 py-1 text-white active:scale-95"
                    onClick={() => setOpen(true)}
                >
                    Send Message
                </button>
            </div>

            <div className="py-4 ">
                {chats?.map((chat, i) => (
                    <Friend key={i} details={chat} />
                ))}
            </div>
        </section>
    )
}