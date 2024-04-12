import React from 'react'

import App from '../App'

const testimonials=[
    {text: 'this is the first testiomails', author: 'Authors 1'},
    {text: 'this is the first2 testiomails', author: 'Authors 1'},
    {text: 'this is the first3 testiomails', author: 'Authors 1'},
    {text: 'this is the first4 testiomails', author: 'Authors 1'},
    {text: 'this is the first5 testiomails', author: 'Authors 1'},
];

export const Slider = () => {
  return (
    <div className='h-screen'>
        <App testimonials={testimonials} interval={5000}/>
    </div>
    
  )
}
