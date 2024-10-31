import { Info, LogOut, MessageSquareText, Send, Settings } from "lucide-react";
import { useAuth } from "../store/useAuth";

export default function SideBar() {
    const logout = useAuth((state) => state.logOut)

    return (
        <section className="background-color w-1/6 rounded-lg  py-5 flex flex-col justify-between px-3 h-full font-semibold">
            <div className="inline-flex items-center gap-2 mb-10">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRAQviB6jlW100-UHBRiISgG2cUTPt0iEmg&s" className="rounded-full  w-[60px] h-[60px] border-2 border-white " />
                <span>Hi, Welcome User</span>
            </div>

            <div className="flex-grow flex flex-col gap-8 ">
                <div className="inline-flex gap-2 hover:cursor-pointer">
                    <MessageSquareText />Chat
                </div>
                <div className="inline-flex gap-2 hover:cursor-pointer">
                    <Settings /> Setting
                </div>
                <div className="inline-flex gap-2 hover:cursor-pointer">
                    <Send /> Invite a friend
                </div>
                <div className="inline-flex gap-2 hover:cursor-pointer">
                    <Info /> About
                </div>

            </div>

            <div onClick={logout} className="inline-flex gap-2 hover:cursor-pointer  hover:scale-105 p-2 rounded-md active:scale-95">
                <LogOut />  Logout
            </div>
        </section>
    )
}