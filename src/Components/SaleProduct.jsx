import React from 'react'
import { FaStar } from 'react-icons/fa';

function SaleProduct({ product, index }) {

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FaStar className="text-[#E5345B]" key={i} />); // Add key prop to each JSX element in array
        }
        return stars; // Return array of JSX elements directly
    };

    return (
        <div key={index}>
            <div className='bg-[#F5F5F5] rounded-lg '>
                <span className='flex w-[308px] p-4  justify-end'>
                    <span className='bg-[#E5345B] w-[50px] h-[50px] rounded-full p-2 text-white text-[1.2rem] absolute'>sale</span>
                </span>
                <img src={product.img} alt="Product" className='w-[308px] h-[308px]' />
            </div>
            <span className='flex items-center justify-center mt-2 text-[1.2rem] gap-1'>{renderStars(product.rating)}</span>
            <span className='flex items-center justify-center font-serif text-[1.1rem] gap-1'>{product.name}</span>
            <span className='flex font-bold items-center justify-center text-[1.2rem] gap-1'>{`$ ${product.price}`}</span>
        </div>
    )
}

export default SaleProduct
