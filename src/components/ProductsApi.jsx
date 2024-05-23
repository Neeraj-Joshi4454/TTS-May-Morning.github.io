import React, { useState, useEffect } from 'react'

const ProductsApi = () => {
    const [mainData , setMainData] = useState([]);

    const loadProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        setMainData(data);
    }

    useEffect(() => {
        setTimeout(() => {

            loadProducts();
        },3000)
    },[])
  return (
    <>
    
        <div>

            {
                mainData.map((product, i) => {
                    return(
                        <div className='h-[100%] w-[18rem] shadow-xl border m-3 rounded-md '>
                            <img src={product.image} className='h-[40vh] w-[100%] border-t-md' alt="" />
                            <div className='p-2'>
                                <h2 className='text-3xl'>{product.title}</h2>
                                <p className='text-gray-500'>{product.description}</p>
                                <p className='text-2xl'>Price : {product.price}$</p>
                                <p className='text-yellow-600'>Rating : {product.rating.rate}</p>
                                <button className='text-white bg-black rounded-md p-2 m-2'>Buy Now</button>
                                <button className='text-white bg-black rounded-md p-2 m-2'>Add To Card</button>
                            </div>
                        </div>
                    );
                })
            }

        </div>
    </>
  )
}

export default ProductsApi