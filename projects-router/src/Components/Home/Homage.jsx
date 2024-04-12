
import React from 'react'
const Homage = () => {
  return (
    <>
    <div className='relative w-full h-[600px] justify-center items-center flex flex-col img'>
         <div className='absolute bottom-10 w-[85%] mx-auto top-10 flex flex-col gap-2 justify-center items-center pb-10 '>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl text-center xl:text-6xl font-[orbitron] text-white ' >PURCHASE <span className='bg-white  text-black'>HIGH-QUALITY</span> PRODUCTS</h1>
          <p className='sm:text-sm text-xs xl:text-lg font-[regular] text-white leading-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga optio debitis. Alias,.</p>
          <button className=' hover:bg-white px-10 py-4 hover:text-black text-white bg-black  rounded font-[regular] text-lg'>Explore More</button>
         </div>
    </div>
    </>
  )
}

export default Homage