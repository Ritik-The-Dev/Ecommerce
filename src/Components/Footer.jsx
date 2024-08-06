import React from 'react'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaPinterest, FaTwitter } from 'react-icons/fa'
import { GrMap } from 'react-icons/gr'
import { IoMdMail } from 'react-icons/io'
import { MdKeyboardArrowRight } from 'react-icons/md'

function Footer() {
    return (
        <div className='lg:h-[300px] h-full w-full bg-[#212529] flex items-center justify-center'>
            <div className='lg:w-[1300px] w-full flex lg:flex-row flex-col items-center justify-between'>
                <div className='flex lg:py-0 py-10 lg:flex-row flex-col items-center justify-center gap-10'    >
                    <div className='flex flex-col h-[180px] gap-2 items-start justify-start'>
                        <span className='text-white text-[1.2rem] font-serif' style={{
                            letterSpacing: '0.2rem'
                        }}>ATTIRE</span>
                        <span className='text-[1.2rem] w-[300px] font-normal text-[#6C757D]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit dolor ipsam?</span>
                    </div>
                    <div className='flex flex-col h-[180px] gap-2 items-start justify-start'>
                        <span className='text-white  ml-2 text-[1.2rem] font-serif' style={{
                            letterSpacing: '0.2rem'
                        }}>Links</span>
                        <div className='text-[1.2rem] gap-2 flex flex-col items-start justify-start w-[300px] font-normal text-[#6C757D]'>
                            <span className='flex items-center hover:text-[#E5345B] cursor-pointer justify-center'><MdKeyboardArrowRight className='text-2xl' /> Home</span>
                            <span className='flex items-center hover:text-[#E5345B] cursor-pointer justify-center'><MdKeyboardArrowRight className='text-2xl' /> Collection</span>
                            <span className='flex items-center hover:text-[#E5345B] cursor-pointer justify-center'><MdKeyboardArrowRight className='text-2xl' /> Blogs</span>
                            <span className='flex items-center hover:text-[#E5345B] cursor-pointer justify-center'><MdKeyboardArrowRight className='text-2xl' /> About Us</span>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-center gap-10'    >
                    <div className='flex flex-col h-[180px] gap-2 items-start justify-start'>
                        <span className='text-white text-[1.2rem] font-serif' style={{
                            letterSpacing: '0.1rem'
                        }}>Contact Us</span>
                        <span className='text-[1.2rem] flex items-start justify-start gap-2  w-[300px] font-normal text-[#6C757D] hover:text-[#E5345B] cursor-pointer'><GrMap className='text-4xl' />Albert Street, New York, AS 756, United States of America</span>
                        <span className='text-[1.2rem] hover:text-[#E5345B] flex items-center justify-start gap-2  w-[300px] font-normal text-[#6C757D] cursor-pointer'><IoMdMail className='text-2xl' />attire.support@gmail.com</span>
                        <span className='text-[1.2rem] hover:text-[#E5345B] flex items-center justify-start gap-2  w-[300px] font-normal text-[#6C757D] cursor-pointer'><FaPhoneAlt className='text-2xl' />+9786 6776 236</span>
                    </div>
                    <div className='flex flex-col h-[180px] gap-5 items-start justify-start'>
                        <span className='text-white  ml-2 text-[1.2rem] font-serif' style={{
                            letterSpacing: '0.2rem'
                        }}>Follow Us</span>
                        <div className='text-2xl gap-5 flex items-cener justify-cener w-[300px] font-normal text-[#6C757D]'>
                            <FaFacebookF className='text-2xl cursor-pointer hover:text-[#E5345B]' />
                            <FaTwitter className='text-2xl cursor-pointer hover:text-[#E5345B]' />
                            <FaInstagram className='text-2xl cursor-pointer hover:text-[#E5345B]' />
                            <FaPinterest className='text-2xl cursor-pointer hover:text-[#E5345B]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
