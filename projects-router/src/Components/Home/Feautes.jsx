import React from 'react'

const Feautes = () => {
  return (
    <div className='w-[90%] py-5 mx-auto h-[400px] lg:h-[600px]'>
      <h1 className='text-2xl font-[sans-serif]'>Featured</h1>
      <div className='grid grid-cols-2 gap-3'>
      <div className='bg-green- h-[200px] relative w-[100%] lg:h-[500px]'>
        <img src="/nike-just-do-it.jpg" alt="" className='absolute h-full w-full'/>
        <div className='absolute px-10 h-[180px] w-full bottom-0'>
          <h1 className='text-lg font-medium text-gray-50'>Nike Soccer</h1>
          <h1 className='text-gray-50 font-[sans-serif] font-light text-3xl'>Say It With Your Crest</h1>
          <button className='px-5 my-5 py-2 rounded-full bg-white font-[sans-serif] hover:bg-gray-500 text-lg font-semibold'>Shop</button>
        </div>
      </div>
      <div className='bg-yellow-300 h-[200px] lg:h-[500px] relative'>
      <img src="/just do it shoe.jpg" alt="" className='absolute h-full w-full'/>
      <div className='absolute  h-[150px] px-10 w-full bottom-0'>
        <h1 className='text-gray-50 font-[sans-serif] font-light text-3xl'>Air Force 1 Wild</h1>
        <button className='px-5 my-5 py-2 rounded-full bg-white font-[sans-serif] hover:bg-gray-500 text-lg font-semibold'>Shop</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Feautes