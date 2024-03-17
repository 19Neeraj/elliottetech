import React from 'react'
import Email from './Email'

export default function Enquire() {
  return (
    <section id='Contact' className=' w-full lgl:py-20 py-10  bg-gradient-to-r from-blue-700 to-purple-600 flex items-center justify-center flex-col gap-5 text-white '>
        <h1 className=' lgl:text-3xl font-bold'>Get professional IT Services today</h1>
        {/* <div ><button className='p-3 bg-blue-700'>Enqurie Now</button></div> */}
        <Email></Email>

        </section>
  )
}
