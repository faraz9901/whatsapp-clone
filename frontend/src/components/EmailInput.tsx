import { SyntheticEvent, useState } from "react"
import { CircleUserRound } from "lucide-react"
import { validateEmailAddress } from "../utils/functions"
import { ClipLoader } from "react-spinners"
import { toast } from "react-toastify"

interface EmailInputProps {
    setShow: (value: boolean) => void
}

export default function EmailInput({ setShow }: EmailInputProps) {
    const [isChecked, setIsChecked] = useState(false)
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const sendEmail = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isEmailValid = validateEmailAddress(email)
        if (isEmailValid) {
            setLoading(true)

            setTimeout(() => {
                setLoading(false)
                setShow(true)
            }, 2500);

        } else {
            toast.error('Invalid Email', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <form onSubmit={sendEmail} className="flex flex-col z- gap-10" >
            <div className='flex relative'>
                <span className='absolute left-0 top-4 px-2'><CircleUserRound color='#dcd3e3' /></span>
                <input
                    type='email'
                    placeholder="Email Address"
                    autoComplete="off"
                    value={email}
                    tabIndex={1}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className=' bg-gray-100 ps-12  selection:bg-gray-400 w-96 opacity-50  focus:outline-none text-black  px-3 py-4 rounded-2xl disabled:bg-gray-600 disabled:text-white '
                />
            </div>

            <div className='flex flex-col items-center'>
                <button
                    disabled={!isChecked}
                    className='bg-red-500 p-4 w-96 rounded-2xl hover:scale-105 disabled:opacity-50 disabled:scale-100'
                    type='submit'
                    tabIndex={3}
                >
                    Log In
                </button >
                <div className="flex flex-col gap-5  items-center">
                    <div className='flex items-center mt-4 gap-2 w-96'>
                        <input
                            type='checkbox'
                            className='rounded-full'
                            checked={isChecked}
                            tabIndex={2}
                            onChange={() => setIsChecked((prev) => !prev)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    setIsChecked((prev) => !prev)
                                }
                            }}
                        />
                        <span className='text-gray-300 text-sm'> By logging in, you agree to our Terms of Service and Privacy Policy</span>
                    </div>
                    <span className={loading ? "opacity-100" : "opacity-0"}>
                        <ClipLoader
                            size={30}
                            color="white"
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </span>
                </div>
            </div>
        </form >

    )
}