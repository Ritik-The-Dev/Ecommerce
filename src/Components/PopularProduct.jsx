import React from 'react'

function PopularProduct({ product, index }) {
    return (
        <div className='flex items-start justify-start gap-5' key={index}>
            <img src={product.img} className='w-[86px] h-[109px]' />
            <div className='flex w-[200px] text-[1.2rem] font-sans flex-col items-start justify-start'>
                <span>{product.name}</span>
                <span>$ {product.price}</span>
            </div>
        </div>
    )
}

export default PopularProduct
