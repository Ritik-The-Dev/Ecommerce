import React from 'react'

export default function AboutUs({ AboutRef }) {
    return (
        <div ref={AboutRef} className='bg-[#FBFBFB] w-full lg:h-[520px] h-full flex lg:flex-row flex-col items-center gap-10 justify-center'>
            <div>
                <img src="/about.jpg" alt="" className='w-[636px] h-[424px] object-cover' />
            </div>
            <div className='flex flex-col lg:w-[660px] md:w-[660px] w-full gap-10 lg:items-start lg:justify-start items-center justify-center'>
                <div className='text-4xl p-2 px-5 font-[sans-serif] font-medium h-[50px] border-l-4 border-[#E5345B]' style={{
                    wordSpacing: '0.3rem'
                }}>
                    About Us
                </div>
                <span className='text-[1.5rem] flex lg:items-start lg:justify-start items-center justify-center w-full font-light text-[#6C757D]'><span className='lg:w-full w-[90%] text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam.</span></span>
                <span className='text-[1.2rem] flex lg:items-start lg:justify-start items-center justify-center w-full font-normal text-black'><span className='lg:w-full w-[90%] text-left'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.
                </span></span>
            </div>
        </div>
    )
}
