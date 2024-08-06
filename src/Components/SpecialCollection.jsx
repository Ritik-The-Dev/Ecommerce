import React from 'react'
import SaleProduct from './SaleProduct'
import CollectionProduct from './CollectionProduct'

function SpecialCollection({ SpecialRef }) {
    const SaleProducts = [
        {
            id: 1, name: "Monday Meeting", price: '45.50', rating: 5, img: '/product1.jpg', sale: true
        },
        {
            id: 2, name: "Gray Shirt", price: '45.50', rating: 5, img: '/product2.jpg', sale: true
        },
        {
            id: 3, name: "Gray Shirt", price: '45.50', rating: 5, img: '/product3.jpg', sale: true
        },
        {
            id: 4, name: "Friday Fun", price: '45.50', rating: 5, img: '/product4.jpg', sale: true
        }
    ]
    return (
        <div ref={SpecialRef} className='flex mt-20 mb-10 flex-col items-center justify-center'>
            <div className='text-4xl p-2 px-5 font-[sans-serif] font-medium h-[50px] border-l-4 border-[#E5345B]' style={{
                wordSpacing: '0.3rem'
            }}>
                Special Collection
            </div>
            <div className='mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center justify-center gap-5'>
                {
                    SaleProducts.map((e, index) => {
                        return (
                            <CollectionProduct index={index} product={e} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SpecialCollection
