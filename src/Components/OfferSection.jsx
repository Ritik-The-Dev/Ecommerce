import React from 'react'

function OfferSection() {
    return (
        <div className='w-full flex items-center justify-start  mb-10'>
            <img src="/offer.jpg" alt="Offer" className='h-[600px] w-screen object-cover' />
            <div className='flex items-center gap-5  justify-center absolute w-full'>
                <div className='flex flex-col items-start gap-5 w-[1200px] lg:px-0 md:px-0 px-5 justify-start'>
                    <span className='text-white lg:text-3xl md:text-3xl text-2xl font-medium font-sans'>Discount Up To 40%</span>
                    <span className='text-white lg:text-6xl md:text-6xl text-4xl font-medium font-serif'>Grand Sale Offer!</span>
                    <div className='px-5 bg-white hover:bg-[#E5345B] hover:text-white border-0 py-2 rounded-full cursor-pointer'>
                        Buy Now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferSection
