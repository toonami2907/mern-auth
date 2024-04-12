import React from 'react'

const Promo = () => {
  return (
    <div className='bg-white flex flex-col h-[250px] justify-center items-center'>
                <h1 className='promo font-medium  text-black'>Mellan promo's day</h1>
                <h1 className='promo text-4xl  text-center lg:text-6xl font-extrabold my-2'>MELLAN SHOP ON PROMO </h1>
                <p className='leading-5 md:my-1 spacing-4 my-2 text-center text-xl font-medium'>Enjoy free and low-price on all items, accessories and so on.</p>
                <button className='py-2 px-3 my-3 leading-relaxed bg-black hover:bg-gray-700 rounded-full text-white'><a href="/">Shop Now</a></button>
    </div>
  )
}

export default Promo