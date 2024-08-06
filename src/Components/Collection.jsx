import React, { useEffect, useState } from 'react';
import SaleProduct from './SaleProduct';

function NewCollection({ CollectionRef }) {
    const [FilteredProduct, setFilteredProduct] = useState([]);
    const [category, setCategory] = useState('');
    const [toRemove, setToRemove] = useState([]);

    const Categories = [
        "All",
        "Corporate Shirts",
        "Glitz Girlz",
        "Yogini's Set"
    ];

    const SaleProducts = [
        { id: 1, name: "Monday Meeting", price: '45.50', rating: 5, img: '/product1.png', sale: true, category: 'Corporate Shirts' },
        { id: 2, name: "Gray Shirt", price: '45.50', rating: 5, img: '/product2.png', sale: true, category: 'Glitz Girlz' },
        { id: 3, name: "Gray Shirt", price: '45.50', rating: 5, img: '/product3.png', sale: true, category: "Yogini's Set" },
        { id: 4, name: "Friday Fun", price: '45.50', rating: 5, img: '/product4.png', sale: true, category: 'Corporate Shirts' },
        { id: 5, name: "Gray Shirt", price: '45.50', rating: 5, img: '/product5.png', sale: true, category: 'Glitz Girlz' },
        { id: 6, name: "Gray Shirt", price: '45.50', rating: 5, img: '/product6.png', sale: true, category: "Yogini's Set" },
        { id: 7, name: "Gray Shirt", price: '45.50', rating: 5, img: '/product7.png', sale: true, category: 'Glitz Girlz' },
    ];

    useEffect(() => {
        const filteredArr = SaleProducts.filter((e) => e.category.includes(category));
        const toBeRemoved = FilteredProduct.filter(fp => !filteredArr.some(product => product.id === fp.id));
        setToRemove(toBeRemoved.map(p => p.id));

        if (toBeRemoved.length > 0) {
            setTimeout(() => {
                setFilteredProduct(filteredArr);
                setToRemove([]);
            }, 500); // Wait for the animation to complete before removing
        } else {
            setFilteredProduct(filteredArr);
        }
    }, [category]);

    return (
        <div ref={CollectionRef} className='flex mt-10 mb-10 flex-col items-center justify-center'>
            <div className='text-4xl p-2 px-5 font-[sans-serif] font-medium h-[50px] border-l-4 border-[#E5345B]' style={{ wordSpacing: '0.3rem' }}>
                New Collection
            </div>
            <div className='mt-10 grid lg:grid-col-4 grid-cols-2 place-content-center gap-5'>
                {
                    Categories.map((e, index) => (
                        <div key={index}
                            onClick={() => e === "All" ? setCategory('') : setCategory(e)}
                            className={`px-5 border-[1px] text-center hover:bg-[#E5345B] hover:text-white border-black hover:border-0 py-2 rounded-full cursor-pointer ${category === e || (category === "" && e === "All") ? 'bg-[#E5345B] text-white border-0' : ""}`}>
                            {e}
                        </div>
                    ))
                }
            </div>
            <div className='mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 min-h-[422px] items-center justify-center gap-5'>
                {
                    SaleProducts.map((e, index) => {
                        const isFiltered = FilteredProduct.some(fp => fp.id === e.id);
                        const isToRemove = toRemove.includes(e.id);

                        return (
                            (isFiltered || isToRemove) && (
                                <div
                                    key={e.id}
                                    className={`${isToRemove ? 'shrink-out' : 'slide-in'}`}
                                    onAnimationEnd={() => {
                                        if (isToRemove) {
                                            setToRemove(toRemove.filter(id => id !== e.id));
                                        }
                                    }}
                                >
                                    <SaleProduct index={index} product={e} />
                                </div>
                            )
                        );
                    })
                }
            </div>
        </div>
    );
}

export default NewCollection;
