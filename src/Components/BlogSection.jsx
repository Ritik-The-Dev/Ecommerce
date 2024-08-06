import React from 'react'
import BlogCards from './BlogCards'

function BlogSection({ MissionRef }) {
    const Blogs = [
        {
            id: 1,
            img: '/blog1.jpg',
            title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.",
            author: "John Doe"
        },
        {
            id: 2,
            img: '/blog2.jpg',
            title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.",
            author: "John Doe"
        },
        {
            id: 3,
            img: '/blog3.jpg',
            title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.",
            author: "John Doe"
        },
    ]
    return (
        <div ref={MissionRef} className='flex mt-20 mb-20 flex-col items-center justify-center'>
            <div className='text-4xl p-2 px-5 font-[sans-serif] font-medium h-[50px] border-l-4 border-[#E5345B]' style={{
                wordSpacing: '0.3rem'
            }}>
                Our Latest Blog
            </div>
            <div className='mt-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid  items-center justify-center gap-5'>
                {
                    Blogs.map((e, index) => {
                        return (
                            <BlogCards index={index} blogs={e} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogSection
