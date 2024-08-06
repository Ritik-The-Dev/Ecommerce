import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function NewsLetter() {
    const [subscribed, setSubScribed] = useState('')
    const [email, setEmail] = useState('')

    const Subscribe = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            return toast.info('Please enter your email');
        } else if (!emailRegex.test(email)) {
            return toast.error('Please enter a valid email address');
        } else {
            localStorage.setItem('Email', email)
            setSubScribed(email)
            toast.success(`Email Subscribed Successfully`);
            setEmail('');
        }
    };

    const UnSubscribe = (e) => {
        e.preventDefault();
        if (!email) {
            return toast.info('No Email Found');
        } else {
            localStorage.removeItem('Email')
            setSubScribed('')
            toast.info(`Email Unsubscribed Successfully`);
            setEmail('');
        }
    };

    useEffect(() => {
        const EMAIL = localStorage.getItem('Email')
        if (EMAIL) {
            setEmail(EMAIL)
            setSubScribed(EMAIL)
        }
    }, [subscribed])

    return (
        <div className='flex mt-20 bg-[#FBFBFB] w-full h-[350px] gap-10 flex-col items-center justify-center'>
            <div className='lg:text-4xl text-3xl p-2 px-5 font-[sans-serif] font-medium h-[50px] border-l-4 border-[#E5345B]' style={{
                wordSpacing: '0.3rem'
            }}>
                Newsletter Subscription
            </div>
            <span className='flex items-center justify-center w-full'>
                <span className='text-[1.2rem] lg:w-[600px] w-[90%] font-normal lg:text-center text-left text-[#6C757D]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem officia accusantium maiores quisquam dolorum?</span></span>
            <form className='flex items-center justify-center gap-0'>
                <input type="email" readOnly={subscribed} required placeholder='Enter Your Email ...' value={email} onChange={(e) => setEmail(e.target.value)} className='h-[50px] text-[#6C757D] border-[#6C757D]  border-[1px] outline-none px-5 lg:w-[370px] w-[220px] rounded-l-full' />
                <button onClick={subscribed ? UnSubscribe : Subscribe} className={`lg:px-7 px-2 border-l-0 hover:border-0 border-[#6C757D]  border-[1px] hover:bg-black h-[50px] flex items-center justify-center -ml-4 ${subscribed ? 'bg-black' : 'bg-[#E5345B]'} text-white  rounded-r-full cursor-pointer`}>
                    {subscribed ? 'Unsubscibe' : 'Subscribe'}
                </button>
            </form>
        </div>
    )
}

export default NewsLetter
