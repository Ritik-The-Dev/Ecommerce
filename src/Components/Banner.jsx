import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Banner({ HomeRef }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const SlideItems = [
        { id: 1, title: "Best Collection", description: "NEW ARRIVALS", btn: "SHOP NOW" },
        { id: 2, title: "Best Price & Offer", description: "NEW SEASON", btn: "BUY NOW" },
    ]
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % SlideItems.length)
        }, 5000)
        return () => clearInterval(interval)
    })
    return (
        <div ref={HomeRef} className='flex w-full items-center justify-center h-screen text-white'>
            <div className=' lg:w-[80vw] w-screen mt-10 flex items-center justify-between h-full'>
                <MdKeyboardArrowLeft className='text-5xl text-[#E5F2F7] select-none hover:text-gray-300 cursor-pointer' onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + SlideItems.length) % SlideItems.length)} />
                <div className='flex items-center justify-center gap-5 flex-col h-full'>
                    <span className='lg:text-5xl md:text-4xl text-2xl font-semibold text-[sans-serif]'>{SlideItems[currentSlide]?.title}</span>
                    <span className='lg:text-7xl md:text-5xl text-4xl font-medium font-serif'>{SlideItems[currentSlide]?.description}</span>
                    <button className='bg-white w-[150px] hover:bg-[#E5345B] hover:text-white h-[50px] text-[1.2rem] rounded-full p-2 text-black'>{SlideItems[currentSlide]?.btn}</button>
                </div>
                <MdKeyboardArrowRight onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % SlideItems.length)} className='text-5xl text-[#E5F2F7] select-none hover:text-gray-300 cursor-pointer' />
            </div>
        </div>
    )
}
