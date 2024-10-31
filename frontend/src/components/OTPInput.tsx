import { MailCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmailAddress } from "../utils/functions";
import { useAuth } from "../store/useAuth";

interface OtpInputProps {
    setShow: (value: boolean) => void
}

export default function OTP({ setShow }: OtpInputProps) {
    const [otp, setOtp] = useState("")
    const [searchParams] = useSearchParams()
    const email: string | null = searchParams.get("email")
    const navigate = useNavigate()
    const [formSubmitting, setFormSubmitting] = useState<boolean>(false)
    const requestForOtp = useAuth((state) => state.requestForOtp)
    const validateOtp = useAuth((state) => state.validateOtp)

    const sendEmail = async () => {
        const isEmailValid = validateEmailAddress(email || "")
        if (email && isEmailValid) {
            setFormSubmitting(true)
            const isSuccess = await requestForOtp(email)

            if (isSuccess) {
                toast.success('An OTP is send to your email', {
                    autoClose: 2000
                })
            }

            setFormSubmitting(false)

        } else {
            setShow(false)
            toast.error('Please type your email address again!')
        }
    }

    const checkOtp = async () => {

        if (!email) {
            setShow(false)
            toast.error('Please type your email address again!')
            return
        }

        if (otp.length !== 6) {
            toast.error("Invalid OTP")
            return
        }

        if (isNaN(Number(otp))) {
            toast.error("OTP should be a number")
            return
        }

        setFormSubmitting(true)

        const isSuccess = await validateOtp(email, otp)


        if (isSuccess) {
            toast.success("User Logged In", {
                autoClose: 1000
            })
            navigate("/chat")
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
                            if (e.key === 'Enter') checkOtp()
                        }}
                        onChange={(e) => setOtp(e.target.value)}
                        disabled={formSubmitting}
                    />

                </div>
                <span className="text-center mt-2">Didn't get the code? <span onClick={sendEmail} className="underline text-gray-400 cursor-pointer active:text-gray-800">Click to resend</span></span>
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
                <button type="button" onClick={checkOtp} disabled={otp.length !== 6} className="p-3 rounded-2xl hover:scale-105 bg-red-500 w-20 disabled:opacity-50" >Verify</button>
            </div>

        </>

    )
}



