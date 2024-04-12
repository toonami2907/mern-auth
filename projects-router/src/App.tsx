import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


const App = ({testimonials, interval =5000}) => {
//  const {userid}= useParams()
const [index, setIndex] = useState(0);
useEffect(()=>{
  const timer = setTimeout(()=>{
    setIndex((prevIndex)=>(prevIndex +1)% testimonials.length);
  }, interval);
  return()=> clearTimeout(timer);
}, [index, testimonials.length, interval]);


  return (
    <div className='relative max-w-xl h-60 flex flex-col mx-auto'>
      {testimonials.map((testimonial, i)=>(
        <div key={i} className={`absolute  flex justify-center items-center flex-col h-60 w-full 
         px-8 py-6 rounded-lg shadow-lg transform transition-all  duration-500 
        ${i===index ? 'opacity-100 bg-blue-200 ': 'opacity-0 bg-gray-100'}`} style={{top:0,left:`${i===  index ? 0 : '100%'}` }}>
          <p className='text-lg'>{testimonial.text}</p>
          <p className='text-gray-600'>{testimonial.author}</p>
        </div>
      ))}
    </div>
    )
}

export default App