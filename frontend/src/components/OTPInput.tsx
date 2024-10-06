import { MailCheck } from "lucide-react";
import { useState } from "react";
import OTPInputBox from "./OtpInputBox";

interface OtpInputProps {
    setShow: (value: boolean) => void
}

export default function OTP({ setShow }: OtpInputProps) {
    const [otp, setOtp] = useState(Array(6).fill(''))
    const [focus, setFocus] = useState(0)
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
                        <OTPInputBox key={i} index={i} setOtp={setOtp} otp={otp} value={otp[i]} setFocus={setFocus} focus={focus} />
                    ))}

                </div>
                <span className="text-center mt-2">Didn't get the code? <span className="underline text-gray-400 cursor-pointer">Click to resend</span></span>
            </div>

            <div className="flex gap-10">
                <button
                    type="button"
                    className="p-3 rounded-2xl hover:scale-105 border w-20 border-gray-300"
                    onClick={() => setShow(false)}
                >
                    Cancel
                </button>
                <button type="button" className="p-3 rounded-2xl hover:scale-105 bg-red-500 w-20" >Verify</button>
            </div>
        </>

    )
}



