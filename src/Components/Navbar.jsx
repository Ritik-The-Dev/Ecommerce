import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useRecoilValue } from 'recoil';
import { CartItem, LikedItem } from '../Recoil';
import { MdOutlineMenu } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function Navbar({
    GoToTop,
    GoToCollection,
    GoToSpecial,
    GoToMission,
    GoToAbout,
    GoToPopular,
}) {
    const NavItems = [
        { name: "Home", CallFunction: GoToTop },
        { name: "Collection", CallFunction: GoToCollection },
        { name: "Specials", CallFunction: GoToSpecial },
        { name: "Mission & Goals", CallFunction: GoToMission },
        { name: "About us", CallFunction: GoToAbout },
        { name: "Popular", CallFunction: GoToPopular },
    ];
    const [showMenu, setShowMenu] = useState(false)
    const cartItems = useRecoilValue(CartItem);
    const likedItems = useRecoilValue(LikedItem);
    const [searchBar, setSearchBar] = useState(false);
    const [transitioning, setTransitioning] = useState(false);
    const searchBarRef = useRef(null);
    const openMenuRef = useRef(null)
    const [animationClass, setAnimationClass] = useState('');

    const handleClickOutside = (event) => {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
            setTransitioning(true);
        }
    };

    const handleClickMenuOutside = (event) => {
        if (openMenuRef.current && !openMenuRef.current.contains(event.target)) {
            setAnimationClass('slide-up');
            setTimeout(() => {
                setShowMenu(false);
            }, 500);
        }
    };

    useEffect(() => {
        if (searchBar) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchBar]);

    useEffect(() => {
        if (showMenu) {
            document.addEventListener('mousedown', handleClickMenuOutside);
        } else {
            document.removeEventListener('mousedown', handleClickMenuOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickMenuOutside);
        };
    }, [showMenu]);

    useEffect(() => {
        if (transitioning) {
            const timeout = setTimeout(() => {
                setSearchBar(false);
                setTransitioning(false);
            }, 300); // Match this duration with your animation duration

            return () => clearTimeout(timeout);
        }
    }, [transitioning]);

    useEffect(() => {
        if (!showMenu) {
            setAnimationClass('');
        }
    }, [showMenu]);

    return (
        <nav className='flex flex-col z-20 fixed items-center bg-[#ffffff] shadow-xl justify-center w-full py-8'>
            <div className='flex items-center justify-between lg:w-[1320px] w-full lg:px-0 md:px-10 px-5'>
                {
                    window.innerWidth <= 600 ? !searchBar ? <div onClick={GoToTop} className='flex items-center justify-center gap-2 cursor-pointer'>
                        <img src="/logo.png" className='w-[30px]' />
                        <span style={{ letterSpacing: '0.2rem' }} className='text-[#212529] font-serif mt-2 text-[1.3rem]'>ATTIRE</span>
                    </div> : <div></div> : <div onClick={GoToTop} className='flex items-center justify-center gap-2 cursor-pointer'>
                        <img src="/logo.png" className='w-[30px]' />
                        <span style={{ letterSpacing: '0.2rem' }} className='text-[#212529] font-serif mt-2 text-[1.3rem]'>ATTIRE</span>
                    </div>
                }
                <div className='items-center justify-center text-[#212529] font-[sans-serif] font-extralight gap-10 text-lg lg:flex md:hidden hidden'>
                    {NavItems.map((item, index) => (
                        <div onClick={item.CallFunction} key={index} className=' cursor-pointer hover:text-[#E5345B]'>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                {searchBar ? (
                    <div ref={searchBarRef} className={`flex items-center justify-center w-[120px] ${transitioning ? 'animate-slide-out' : 'animate-slide-in'}`}>
                        <div className='flex absolute items-center justify-center gap-0'>
                            <input
                                type="text"
                                placeholder='Search...'
                                className='lg:w-[200px] text-black border-black px-5 h-[40px] rounded-l-full outline-none border-r-[0px] border-[1px]'
                            />
                            <span className='px-5 h-[40px] rounded-r-full flex items-center justify-center border-black border-[1px] border-l-0'>
                                <IoSearch className='text-[1.2rem] cursor-pointer hover:text-[#E5345B]' />
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center justify-center lg:gap-8 md:gap-8 gap-4'>
                        <div>
                            <span className='w-[24px] h-[20px] bg-[#E5345B] absolute flex items-center justify-center text-white font-semibold rounded-md -mt-5 ml-4'>
                                {cartItems?.length}
                            </span>
                            <FaShoppingCart className='text-[1.2rem] cursor-pointer hover:text-[#E5345B]' />
                        </div>
                        <div>
                            <span className='w-[24px] h-[20px] bg-[#E5345B] absolute flex items-center justify-center text-white font-semibold rounded-md -mt-5 ml-4'>
                                {likedItems?.length}
                            </span>
                            <FaHeart className='text-[1.2rem] cursor-pointer hover:text-[#E5345B]' />
                        </div>
                        <IoSearch onClick={() => setSearchBar(true)} className='text-[1.2rem] cursor-pointer hover:text-[#E5345B]' />
                    </div>
                )}
                <div className='lg:hidden'>
                    {
                        showMenu ? <IoIosCloseCircleOutline onClick={() => {
                            setAnimationClass('slide-up');
                            setTimeout(() => {
                                setShowMenu(false);
                            }, 500);
                        }} className='text-[1.5rem] cursor-pointer' /> : <MdOutlineMenu onClick={() => {
                            setShowMenu(true);
                            setAnimationClass('slide-down');
                        }} className='text-[1.5rem] cursor-pointer' />
                    }
                </div>
            </div>
            {
                showMenu && window.innerWidth <= 1000 && (
                    <div ref={openMenuRef} className={`flex mt-5 flex-col items-center justify-center w-full px-5 ${animationClass}`}>
                        {NavItems.map((item, index) => (
                            <div onClick={() => {
                                item.CallFunction()
                                setShowMenu(false)
                            }} key={index} className='cursor-pointer hover:text-[#E5345B] border-t-[1px] w-full flex items-center justify-center'>
                                <span className='mt-5 mb-5 text-[1.2rem]'>{item.name}</span>
                            </div>
                        ))}
                    </div>
                )
            }

        </nav>
    );
}