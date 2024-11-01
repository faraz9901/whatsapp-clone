import { Info, LogOut, MessageSquareText, Send, Settings, User } from "lucide-react";
import { useAuth } from "../store/useAuth";

export default function SideBar() {
    const logout = useAuth((state) => state.logOut)
    const user = useAuth((state) => state.user)

    return (
        <section className="background-color w-1/6 rounded-lg  py-5 flex flex-col justify-between px-3 h-full font-semibold">
            <div className="inline-flex items-center gap-2 mb-10">
                {user.profile_photo ?
                    <img src={user.profile_photo} className="rounded-full  w-[60px] h-[60px] border-2 border-white " />
                    :
                    <User className="rounded-full text-center bg-white  w-[50px] h-[50px] border-2 border-white " />
                }
                <span>Hi, {user.name}</span>
            </div>

            <div className="flex-grow flex flex-col gap-8 ">
                <div className="inline-flex gap-2 hover:cursor-pointer hover:scale-105  active:scale-95">
                    <MessageSquareText />Chat
                </div>
                <div className="inline-flex gap-2 hover:cursor-pointer hover:scale-105  active:scale-95">
                    <Settings /> Setting
                </div>
                <div className="inline-flex gap-2 hover:cursor-pointer hover:scale-105  active:scale-95">
                    <Send /> Invite a friend
                </div>
                <div className="inline-flex gap-2 hover:cursor-pointer  hover:scale-105  active:scale-95">
                    <Info /> About
                </div>

            </div>

            <div onClick={logout} className="inline-flex gap-2 hover:cursor-pointer  hover:scale-105  active:scale-95">
                <LogOut />  Logout
            </div>
        </section>
    )
}