export default function ChatSearch() {
    return (
        <section className="border-2 border-purple-500 border-solid rounded-lg  w-full h-[10vh] px-10  flex justify-between items-center text-white" >
            <div className="text-xl">
                Chats
            </div>

            <div>
                <input
                    type="search"
                    placeholder="Search"
                    className="rounded-lg focus:outline-none focus:scale-105 backdrop-blur-lg p-2 text-white bg-transparent  placeholder:text-white"
                />
            </div>
        </section >
    )
}