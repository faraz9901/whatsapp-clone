export default function ChatSearch() {
    return (
        <section className="background-color  border-solid rounded-lg  w-full h-[10vh] px-10  flex justify-between items-center text-white" >
            <div className="text-xl">
                Chats
            </div>

            <div>
                <input
                    type="search"
                    placeholder="Search"
                    className="rounded-lg  shadow-sm  focus:outline-none focus:scale-105  p-1 text-black"
                />
            </div>
        </section >
    )
}