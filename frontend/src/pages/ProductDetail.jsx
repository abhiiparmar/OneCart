import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopDataContext } from '../context/ShopContext';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import RelatedProduct from '../components/RelatedProduct';

function ProductDetail() {

    const { productId } = useParams();
    const { products, currency, addtoCart } = useContext(shopDataContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    useEffect(() => {
        const selectedProduct = products.find(item => item._id === productId);
        if (selectedProduct) {
            setProductData(selectedProduct);
            setImage(selectedProduct.image1);
        }
    }, [productId, products]);

    return productData ? (
        <div className='w-full min-h-screen bg-gradient-to-br from-[#0c2025] to-[#141414]'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-10 py-16 px-6'>
                <div className='flex flex-col lg:flex-row items-center gap-6 w-full lg:w-1/2'>
                    <div className='flex lg:flex-col flex-row gap-4'>
                        {[productData.image1, productData.image2, productData.image3, productData.image4].map((img, index) => (
                            <div 
                                key={index} 
                                className={`w-20 h-20 md:w-24 md:h-28 rounded-xl 
                                overflow-hidden cursor-pointer border border-gray-600 
                                hover:scale-110 transition-all duration-300 shadow-md shadow-black/50 
                                ${img === image ? 'ring-2 ring-red-500' : ''}`}>
                                <img 
                                    src={img} 
                                    alt="" 
                                    className='w-full h-full object-cover'
                                    onClick={() => setImage(img)} 
                                />
                            </div>
                        ))}
                    </div>
                    <div className='flex-1 max-w-lg h-[420px] md:h-[500px] rounded-2xl overflow-hidden 
                    bg-black/20 backdrop-blur-md border border-gray-600 shadow-xl shadow-black/70 relative'>
                        <img 
                            src={image} 
                            alt="" 
                            className='w-full h-full object-contain hover:scale-110 
                            transition-transform duration-700 ease-in-out'
                        />
                        <span className='absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm shadow-lg'>
                            Bestseller
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-5 w-full lg:w-1/2 text-white'>
                    <h1 className='text-4xl font-extrabold tracking-wide drop-shadow-md mt-4'>
                        {productData.name.toUpperCase()}
                    </h1>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-400 text-xl'/>
                        <FaStar className='text-yellow-400 text-xl'/>
                        <FaStar className='text-yellow-400 text-xl'/>
                        <FaStarHalfAlt className='text-yellow-400 text-xl'/>
                        <FaRegStar className='text-yellow-400 text-xl'/>
                        <span className='ml-2 text-gray-300 text-lg'>(124 Reviews)</span>
                    </div>
                    <p className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500'>
                        {currency}{productData.price}
                    </p>
                    <p className='text-gray-300 text-lg max-w-xl leading-relaxed'>
                        {productData.description} Stylish, breathable cotton shirt with a 
                        modern slim fit. Easy to wash, super comfortable, and designed for effortless style.
                    </p>
                    <div className='mt-4'>
                        <p className='text-xl font-semibold mb-2'>Select Size</p>
                        <div className='flex gap-3 flex-wrap'>
                            {productData.sizes.map((item, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-5 rounded-md font-medium transition-all 
                                    duration-300 shadow-md hover:scale-105 
                                    ${item === size 
                                        ? 'bg-red-600 text-white shadow-red-500/50' 
                                        : 'bg-gray-200 text-black hover:bg-gray-300'}`}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button 
                        className='mt-6 py-3 px-8 bg-gradient-to-r from-red-600 to-orange-500 
                        text-white font-bold rounded-full shadow-lg shadow-red-600/50 
                        hover:scale-110 hover:shadow-red-500/70 transition-all duration-500'
                        onClick={() => addtoCart(productData._id, size)}
                    >
                        🛒 Add To Cart
                    </button>
                    <div className='w-full h-[2px] bg-slate-700 my-4'></div>
                    <div className='w-[80%] text-[16px] text-white space-y-1'>
                        <p>✅ 100% Original Product</p>
                        <p>🚚 Cash on Delivery Available</p>
                        <p>🔄 Easy 7-day Return & Exchange Policy</p>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025]
            flex flex-col items-start justify-start overflow-x-hidden'>
                <div className='flex px-6 mt-16 lg:ml-20'>
                    <p className='border px-5 py-3 text-sm text-white cursor-pointer hover:bg-white/10 transition'>
                        Description
                    </p>
                    <p className='border px-5 py-3 text-sm text-white cursor-pointer hover:bg-white/10 transition'>
                        Reviews (124)
                    </p>
                </div>
                <div className='w-[85%] mt-6 bg-[#3336397c] border text-white rounded-xl 
                text-[13px] md:text-[15px] lg:text-[18px] px-5 md:px-10 py-8 lg:ml-[80px] shadow-lg shadow-black/40'>
                    <p className='leading-relaxed'>
                        Upgrade your wardrobe with this stylish slim-fit cotton shirt, available 
                        now on OneCart. Crafted from breathable, high-quality fabric, it offers 
                        all-day comfort and effortless style. Easy to maintain and perfect for any
                        setting, this shirt is a must-have essential for those who value both fashion and
                        function.    
                    </p>
                </div>
                <div className='w-full mt-12'>
                    <RelatedProduct 
                        category={productData.category} 
                        subCategory={productData.subCategory}
                        currentProductId={productData._id}
                    />
                </div>
            </div>
        </div>
    ) : <div className='opacity-0'></div>
}

export default ProductDetail;




