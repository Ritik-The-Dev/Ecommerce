import React from 'react'

function BlogCards({ blogs, index }) {
    return (
        <div className='flex flex-col lg:px-0 px-2 lg:w-[421px] md:w-[421px] w-full items-start justify-start gap-5' key={index}>
            <img src={blogs.img} alt="Blog" className='w-[421px] h-[280px] object-cover' />
            <span className='text-2xl font-medium'>{blogs.title}</span>
            <span className='text-[1.2rem] text-[#6C757D]'>{blogs.desc}</span>
            <span className='text-[1rem] font-bold text-[#6C757D]'>Author: <span className='text-[1rem] text-[#6C757D] font-normal'> {blogs.author}</span></span>
            <div key={index} className='px-7 border-[1px] hover:border-0 hover:bg-[#E5345B] hover:text-white border-black py-3 rounded-full cursor-pointer'>
                Read More
            </div>
        </div>
    )
}

export default BlogCards
