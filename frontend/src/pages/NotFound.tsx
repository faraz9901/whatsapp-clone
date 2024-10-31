import { Ban } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {

    useEffect(() => {
        document.title = "Not Found"
    }, [])

    return (
        <div className="flex flex-col gap-3  h-screen w-screen justify-center items-center text-white">
            <div className="flex items-center gap-3">
                <Ban size={30} color="red" />
                The Page your looking for is not found
            </div>

            <Link className="border-2 border-white rounded-lg p-3 active:scale-90" to={"/"}>Go Back</Link>
        </div>
    )
}