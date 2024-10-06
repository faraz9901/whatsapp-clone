import { useEffect, useRef } from "react"

interface OTPInputProps {
    index: number
    setOtp: (value: any[]) => void
    otp: any[]
    value: string | number
    focus: number
    setFocus: (value: number) => void
}

export default function OTPInputBox({ index, setOtp, otp, value, setFocus, focus }: OTPInputProps) {

    const otpRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (focus === index) {
            otpRef.current?.focus()
        }
    }, [focus])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const value: any = (e.target.value);

        if (value && isNaN(Number(value))) {
            return
        }

        const currentState = [...otp]

        currentState[index] = value

        setOtp(currentState)

        setFocus(focus + 1)
    }

    return (
        <input
            required
            ref={otpRef}
            type="text"
            autoComplete="one-time-code"
            inputMode="numeric"
            maxLength={1}
            value={value}
            onChange={handleChange}
            className="w-12 rounded-lg h-12 focus:outline-none focus:scale-105 text-black text-2xl text-center"
        />
    )
}