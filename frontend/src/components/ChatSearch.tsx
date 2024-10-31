
export default function ChatSearch() {
    return (
        <section className="background-color rounded-lg px-10   h-full  flex justify-between items-center text-white" >
            <div className="text-xl">
                Chats
            </div>

            <div className="flex">
                <input
                    type="search"
                    placeholder="Search chats..."
                    className={` rounded-lg  shadow-sm  focus:outline-none text-black    py-1 px-3 focus:scale-105  placeholder:text-inherit `}
                />


            </div>
        </section >
    )
}