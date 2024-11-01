import { Paperclip, SendHorizontal } from "lucide-react";

export default function Chat() {
    return (
        <section className=" bg-purple-400 bg-opacity-50 rounded-lg h-full flex flex-col gap-2 w-2/3 p-5">
            <div className="flex gap-3">
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s"}
                    alt="profile picture"
                    className="rounded-full w-[50px] h-[50px]"
                />
                <div>
                    Fabio Gramer
                </div>
            </div>

            <div className="background-color flex flex-col w-full flex-grow rounded-lg p-3">

                <div className="flex-grow">

                </div>



                <div className="flex gap-2 items-center">
                    <textarea className="rounded-lg px-3 py-1 h-10 flex-grow focus:outline-none  text-black" placeholder="Type your message here..." ></textarea>

                    <input type="file" id="attach-files" hidden />
                    <label htmlFor="attach-files" className="cursor-pointer  active:scale-90"><Paperclip color="white" /></label>

                    <span className="cursor-pointer  active:scale-90">
                        <SendHorizontal color="purple" />
                    </span>
                </div>

            </div>
        </section>
    )
}