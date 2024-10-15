import { MailCheck } from "lucide-react";
import { useState } from "react";
import OTPInputBox from "./OtpInputBox";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { errorToast, request } from "../utils/functions";

interface OtpInputProps {
    setShow: (value: boolean) => void
}

export default function OTP({ setShow }: OtpInputProps) {
    const [otp, setOtp] = useState(Array(6).fill(''))
    const [focus, setFocus] = useState(0)
    const [searchParams] = useSearchParams()
    const email = searchParams.get("email")
    const navigate = useNavigate()
    const [formSubmitting, setFormSubmitting] = useState<boolean>(false)

    const validateOtp = async () => {
        const myotp = otp.join("")

        if (myotp.length > 6) {
            toast.error("Please type the OTP")
            return
        }

        if (isNaN(Number(myotp))) {
            toast.error("Invalid OTP")
            return
        }
        try {
            setFormSubmitting(true)
            await request.post("/users/validate-otp", { email, otp: +myotp })
            toast.success("User Logged In")
            navigate("/chat", { replace: true })
        } catch (error) {
            errorToast(error)
        } finally {
            setFormSubmitting(false)
        }
    }

    return (
        <>

            <div className="flex flex-col items-center">
                <MailCheck size={70} />

                <span>Please check your email </span>
                <span>We've sent a code to contact@gmail.com</span>
            </div>

            <div className="flex flex-col">

                <div className="flex gap-3">
                    {otp.map((_, i) => (
                        <OTPInputBox key={i} index={i} setOtp={setOtp} otp={otp} value={otp[i]} setFocus={setFocus} focus={focus} disabled={formSubmitting} />
                    ))}

                </div>
                <span className="text-center mt-2">Didn't get the code? <span className="underline text-gray-400 cursor-pointer">Click to resend</span></span>
            </div>

            <div className="flex gap-10">
                <button
                    type="button"
                    className="p-3 rounded-2xl hover:scale-105 border w-20 border-gray-300"
                    onClick={() => {
                        setShow(false)
                        setOtp(Array(6).fill(''))
                        setFocus(0)
                    }}
                >
                    Cancel
                </button>
                <button type="button" onClick={validateOtp} className="p-3 rounded-2xl hover:scale-105 bg-red-500 w-20" >Verify</button>
            </div>
        </>

    )
}



