import React from 'react'
import BlogCards from './BlogCards'
import PopularProduct from './PopularProduct'

function Popular({ PopularRef }) {
    const TopRated = [
        {
            id: 1,
            img: '/top1.jpg',
            name: "Blue Shirt",
            price: "20.00"
        },
        {
            id: 2,
            img: '/top2.jpg',
            name: "Blue Shirt",
            price: "20.00"
        },
        {
            id: 3,
            img: '/top3.jpg',
            name: "Blue Shirt",
            price: "20.00"
        },
    ]
    const BestSelling = [
        {
            id: 1,
            img: '/best1.jpg',
            name: "Blue Shirt",
            price: "20.00"
        },
        {
            id: 2,
            img: '/best2.jpg',
            name: "Blue Shirt",
            price: "20.00"
        },
        {
            id: 3,
            img: '/best3.jpg',
            name: "Blue Shirt",
            price: "20.00"
        },
    ]
    const OnSale = [
        {
            id: 1,
            img: '/sale1.jpg',
            name: "Blue Shirt",
            price: "20.00"
        },
        {
            id: 2,
            img: '/sale2.jpg',
            name: "Blue Shirt",
            price: "20.00"
        },
        {
            id: 3,
            img: '/sale3.jpg',
            name: "Blue Shirt",
            price: "20.00"
        },
    ]
    return (
        <div ref={PopularRef} className='flex mt-20 mb-20 flex-col items-center justify-center'>
            <div className='text-4xl py-2 text-nowrap lg:px-5 px-3 font-[sans-serif] font-medium h-[50px] border-l-4 border-[#E5345B]' style={{
                wordSpacing: '0.3rem'
            }}>
                Popular Of This Year
            </div>
            <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  items-center justify-between lg:w-[60%] w-full lg:px-0 md:px-10 px-5 gap-5'>
                <div className='flex flex-col gap-5 items-start justify-start w-[110px]'>
                    <span className='text-[1.3rem] font-sans text-nowrap text-black font-semibold'>Top Rated</span>
                    {
                        TopRated.map((e, index) => <PopularProduct product={e} index={index} />)
                    }
                </div>
                <div className='flex flex-col gap-5 items-start justify-start w-[110px]'>
                    <span className='text-[1.3rem] font-sans text-nowrap text-black font-semibold'>Best Selling</span>
                    {
                        BestSelling.map((e, index) => <PopularProduct product={e} index={index} />)
                    }
                </div>
                <div className='flex flex-col gap-5 items-start justify-start w-[110px]'>
                    <span className='text-[1.3rem] font-sans text-nowrap text-black font-semibold'>On Sale</span>
                    {
                        OnSale.map((e, index) => <PopularProduct product={e} index={index} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Popular
