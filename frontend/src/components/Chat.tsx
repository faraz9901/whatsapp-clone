import { Paperclip, SendHorizontal } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { FormEvent, useEffect, useState } from "react";
import { useGeneralStore } from "../store/useGeneralStore";
import { Status } from "../types";
import { useAuth } from "../store/useAuth";
import { errorToast, request, tryCatch } from "../utils/functions";
import { toast } from "react-toastify";

export default function Chat() {
    const selectedFriend = useChatStore((state) => state.selectedFriend)
    const user = useAuth((state) => state.user)
    const status = useGeneralStore((state) => state.status)
    const setStatus = useGeneralStore((state) => state.setStatus)
    const [message, setMessage] = useState("")


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        const formData = {
            from: user?._id,
            to: selectedFriend?._id,
            content: message,
            content_type: "text"
        }

        setStatus(Status.submitting)

        const { data, error } = await tryCatch(() => request.post("/chat", formData))

        if (error) {
            errorToast(error)
        }

        if (data) {
            toast.success("Message sent")
        }

        setStatus(Status.idle)
    }

    return (
        <section className=" bg-gray-500 bg-opacity-50 rounded-lg h-full flex flex-col gap-2 w-2/3 p-5">
            {selectedFriend &&
                <>
                    <div className="flex gap-3 items-center">
                        <img
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRax8pVox5neKv5zPLnRd9b9UWEhBYzaDR9-w&s"}
                            alt="profile picture"
                            className="rounded-full w-[50px] h-[50px]"
                        />
                        <div className="font-semibold text-xl">
                            {selectedFriend?.name}
                        </div>
                    </div>

                    <div className="background-color flex flex-col w-full flex-grow rounded-lg p-3">

                        <div className="flex-grow">

                        </div>



                        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                            <textarea
                                className="rounded-lg px-3 py-1 h-10 flex-grow focus:outline-none  text-black"
                                placeholder="Type your message here..."
                                value={message}
                                disabled={status === "submitting"}
                                onChange={(e) => setMessage(e.target.value)}
                            >
                            </textarea>

                            <input disabled={status === "submitting"} type="file" id="attach-files" hidden />

                            <label
                                htmlFor="attach-files"
                                className="cursor-pointer  active:scale-90"
                            >
                                <Paperclip color="white" />
                            </label>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="active:scale-90"
                            >
                                <SendHorizontal color="white" />
                            </button>
                        </form>

                    </div>
                </>
            }
        </section >
    )
}