import { useState } from 'react'
import EmailInput from '../components/EmailInput'
import logo from '/logo.svg'
import OTP from '../components/OTPInput'


export default function HomePage() {

    const [isEmailSent, setIsEmailSent] = useState(false)
    return (
        <>
            <img src="/bg3.jpg" className="z-10    fixed top-0 h-screen w-screen" />
            <div className="fixed z-20 top-0 flex flex-col gap-10 justify-center items-center h-screen w-screen text-white">

                <img src={logo} className='w-20 h-20 rounded-full p-3 border border-white' />

                {!isEmailSent &&
                    <div className='flex flex-col gap-10'>
                        <EmailInput setShow={setIsEmailSent} />
                    </div>}

                {
                    isEmailSent &&
                    <div className=' flex flex-col gap-8 items-center' >
                        <OTP setShow={setIsEmailSent} />
                    </div>
                }
            </div>
        </>
    )
}