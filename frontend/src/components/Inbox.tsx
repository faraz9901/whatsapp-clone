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
    return (
        <section className="background-color w-1/3 p-3 rounded-lg h-[80vh] overflow-auto">
            <div className="text-semibold">Inbox</div>

            <div className="py-4 ">
                {chats?.map((chat) => (
                    <Friend details={chat} />
                ))}
            </div>
        </section>
    )
}