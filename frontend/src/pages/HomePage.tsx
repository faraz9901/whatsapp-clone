export default function HomePage() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-t from-purple-400 to-purple-800 ">

            <div className="w-[60vh] h-[60vh] ">

                <img src="/login-image.jpg" className="  rounded-lg w-[60vh] h-[45vh]" />
                <div className="w-full">

                    <input type="text" className="p-5 w-full rounded-lg " placeholder="Email Address" />

                </div>
            </div>

        </div>
    )
}