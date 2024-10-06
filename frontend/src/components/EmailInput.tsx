import { CircleUserRound } from "lucide-react"
import { useState } from "react"

interface EmailInputProps {
    setShow: (value: boolean) => void
}

export default function EmailInput({ setShow }: EmailInputProps) {
    const [isChecked, setIsChecked] = useState(false)

    const sendEmail = () => {
        setShow(true)
    }

    return (
        <>
            <div className='flex relative'>
                <span className='absolute left-0 top-4 px-2'><CircleUserRound color='#dcd3e3' /></span>
                <input type='email' placeholder="Email Address" className=' bg-gray-100 ps-12  selection:bg-gray-400 w-96 opacity-50  focus:outline-none text-black  px-3 py-4 rounded-2xl ' />
            </div>

            <div className='flex flex-col items-center'>
                <button disabled={!isChecked} onClick={sendEmail} className='bg-red-500 p-4 w-96 rounded-2xl hover:scale-105 disabled:opacity-50 disabled:scale-100' type='button'>Log In </button >

                <div className='flex items-center mt-4 gap-2 w-96'>
                    <input type='checkbox' className='rounded-full' checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
                    <span className='text-gray-300 text-sm'> By logging in, you agree to our Terms of Service and Privacy Policy</span>
                </div>
            </div>
        </>
    )
}