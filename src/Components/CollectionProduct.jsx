import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { CartItem, LikedItem } from '../Recoil';
import { toast } from 'react-toastify';

function CollectionProduct({ product, index }) {
    const [cartItem, setCartItem] = useRecoilState(CartItem);
    const [likedItem, setLikedItem] = useRecoilState(LikedItem);
    const [isLiked, setIsLiked] = useState(false);
    const [isInCart, setIsInCart] = useState(false);

    const handleAddToCart = () => {
        const updatedCart = isInCart
            ? cartItem.filter((e) => e.id !== product.id)
            : [...cartItem, product];

        setCartItem(updatedCart);
        localStorage.setItem('LocalCartItem', JSON.stringify(updatedCart));
        toast[isInCart ? 'info' : 'success'](`Product ${isInCart ? 'removed from' : 'added to'} cart.`);
        setIsInCart(!isInCart);
    };

    const handleAddToLikes = () => {
        const updatedLikes = isLiked
            ? likedItem.filter((e) => e.id !== product.id)
            : [...likedItem, product];

        setLikedItem(updatedLikes);
        localStorage.setItem('LocalLikedItem', JSON.stringify(updatedLikes));
        toast[isLiked ? 'info' : 'success'](`Product ${isLiked ? 'removed from' : 'added to'} favourites.`);
        setIsLiked(!isLiked);
    };

    useEffect(() => {
        const isProductInCart = cartItem.some((e) => e.id === product.id);
        const isProductLiked = likedItem.some((e) => e.id === product.id);
        setIsInCart(isProductInCart);
        setIsLiked(isProductLiked);
    }, [cartItem, likedItem, product.id]);

    return (
        <div key={index}>
            <div className='overflow-hidden select-none w-[308px] h-[395px]'>
                <span className='flex max-h-[395px] w-[308px] p-4 -mb-8 justify-end'>
                    {isLiked ? (
                        <FaHeart onClick={handleAddToLikes} className={`text-[#E5345B] text-2xl z-10 cursor-pointer absolute`} />
                    ) : (
                        <FaRegHeart onClick={handleAddToLikes} className={`text-[#E5345B] text-2xl z-10 cursor-pointer absolute`} />
                    )}
                </span>
                <img
                    src={product.img}
                    alt="Product"
                    className='w-full h-full cursor-pointer object-cover transition-transform duration-500 hover:scale-125 transform origin-center'
                />
            </div>
            <span className='flex items-center mt-5 justify-center font-serif text-[1.1rem] gap-1'>{product.name}</span>
            <span className='flex font-bold items-center justify-center text-[1.2rem] gap-1'>{`$ ${product.price}`}</span>
            <div className='flex items-center justify-center'>
                <div onClick={handleAddToCart} className={`px-5 mt-2 hover:bg-[#E5345B] hover:border-0 hover:text-white border-black py-2 rounded-full cursor-pointer ${isInCart ? 'bg-[#E5345B] border-0 text-white' : 'border-[1px]'}`}>
                    {isInCart ? 'Already Added' : 'Add to Cart'}
                </div>
            </div>
        </div>
    );
}

export default CollectionProduct;
