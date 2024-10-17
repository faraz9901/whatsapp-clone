interface FriendProps {
    imgUrl: string
    name: string
    message: string
}


export default function Friend({ details }: { details: FriendProps }) {
    return (
        <div className="inline-flex items-center hover:scale-105 border-b-2 border-purple-300 px-2 py-2 hover:bg-purple-400 w-full rounded-md gap-3">
            <img src={details.imgUrl} alt="profile picture" className="rounded-full w-[50px] h-[50px]" />

            <div className="w-full px-2 flex flex-col gap-1">
                <p className="font-bold">
                    {details.name}
                </p>
                <p className="text-xs text-slate-100">
                    {details.message}
                </p>
            </div>
        </div >
    )
}