import { MailCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { errorToast, request, tryCatch } from "../utils/functions";

interface OtpInputProps {
    setShow: (value: boolean) => void
}

export default function OTP({ setShow }: OtpInputProps) {
    const [otp, setOtp] = useState("")
    const [searchParams] = useSearchParams()
    const email = searchParams.get("email")
    const navigate = useNavigate()
    const [formSubmitting, setFormSubmitting] = useState<boolean>(false)

    const validateOtp = async () => {

        if (otp.length !== 6) {
            toast.error("Invalid OTP")
            return
        }

        if (isNaN(Number(otp))) {
            toast.error("OTP should be a number")
            return
        }

        setFormSubmitting(true)

        const { data, error } = await tryCatch(() => request.post("/users/validate-otp", { email, otp: +otp }))

        if (error) {
            errorToast(error)
        }

        if (data) {
            toast.success("User Logged In")
            navigate("/chat", { replace: true })
        }

        setFormSubmitting(false)

    }

    return (
        <>
            <div className="flex flex-col items-center">
                <MailCheck size={70} />

                <span>Please check your email </span>
                <span>We've sent a code to contact@gmail.com</span>
            </div>

            <div className="flex flex-col">

                <div className="justify-center">

                    <input
                        placeholder=" Eg: 123456"
                        type="text"
                        className="p-2  focus:scale-105 focus:outline-none text-gray-700 rounded-lg  w-64"
                        value={otp}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') validateOtp()
                        }}
                        onChange={(e) => setOtp(e.target.value)}
                        disabled={formSubmitting}
                    />

                </div>
                <span className="text-center mt-2">Didn't get the code? <span className="underline text-gray-400 cursor-pointer">Click to resend</span></span>
            </div >

            <div className="flex gap-10">
                <button
                    type="button"
                    className="p-3 rounded-2xl hover:scale-105 border w-20 border-gray-300"
                    onClick={() => {
                        setShow(false)
                        setOtp("")
                    }}
                >
                    Cancel
                </button>
                <button type="button" onClick={validateOtp} className="p-3 rounded-2xl hover:scale-105 bg-red-500 w-20" >Verify</button>
            </div>

        </>

    )
}



