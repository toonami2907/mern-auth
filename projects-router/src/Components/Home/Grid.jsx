import React from 'react'
const clothes=[
    {id: '1', name: 'Explore', alt: 'image', imageSrc: '/cloth1.png'},
    { id: '2',name: 'Explore', alt: 'image', imageSrc: '/cloth2.png'},
    {id: '3',  name: 'Explore', alt: 'image', imageSrc: '/cloth3.png'},
    {id: '4', name: 'Explore', alt: 'image', imageSrc: '/colth4.png'},
    {id: '5', name: 'Explore', alt: 'image', imageSrc: '/colth4.png'},
    {id: '6', name: 'Explore', alt: 'image', imageSrc: '/colth4.png'},
    {id: '7', name: 'Explore', alt: 'image', imageSrc: '/colth4.png'},
    {id: '8', name: 'Explore', alt: 'image', imageSrc: '/colth4.png'},
];
const Grid = () => {
  return (
    <>
      <div className='px-20 '>
      <h1 className='text-3xl fonr-[san-serif]'> Trending</h1>
      </div>
    <div className='h-[650px] mt-2 mb-10 xl:w-[90%] w-[80%] lg:w-[60%] gap-3  grid-cols-2  mx-auto grid lg:grid-cols-4'>
       {clothes.map((cloth)=>(
        <div key={cloth.id} className=' relative'>
            <div key={cloth.id} className='relative h-full w-full shadow-sm hover:shadow-2xl rounded hover:scale-95 bg-green' >
                    <img src={cloth.imageSrc} alt=""  className='absolute  h-full rounded-md bg-cover bg-center w-full  overflow-hidden '/>
            <div className='w-full  bg-black/10 h-full absolute left-0 top-0'/>
            <div className='absolute w-full h-full flex justify-center items-center '><button className='text-lg bg-black shadow-sm inset-4 px-3 py-1 lg:px-5 lg:py-2 font-[regular] font-normal rounded hover:bg-white hover:text-black  text-white '><a href="/">{cloth.name}</a></button></div>
            </div>
        </div>
       ))}
    </div>
    </>
  )
}

export default Grid