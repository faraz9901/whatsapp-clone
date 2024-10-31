import { useEffect, useState } from 'react'
import EmailInput from '../components/EmailInput'
import logo from '/logo.svg'
import OTP from '../components/OTPInput'


export default function HomePage() {
    const [isEmailSent, setIsEmailSent] = useState(false)

    useEffect(() => {
        document.title = "F-Chat Login"
    }, [])

    return (
        <>

            <div className="fixed  top-0 flex flex-col gap-10 justify-center items-center h-screen w-screen text-white">

                <img src={logo} className='w-20 h-20 rounded-full p-3 border border-white' />


                <div className={`duration-500  ${isEmailSent ? "-translate-x-full opacity-0 fixed" : ""} `}>
                    <EmailInput setShow={setIsEmailSent} />
                </div>

                <div className={` flex flex-col gap-8  items-center duration-500   ${isEmailSent ? "" : "translate-x-full opacity-0 fixed"}`}>
                    <OTP setShow={setIsEmailSent} />
                </div>

            </div>
        </>
    )
}