import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className=' w-full  bg-gradient-to-r from-blue-700 to-purple-600 flex items-center justify-evenly lgl:pt-24  flex-col-reverse lgl:flex-row p-10'>
        <div  className='flex flex-col text-white justify-center gap-4'>
            <h1 className='text-2xl lgl:text-4xl font-bold'>Your Idea Matters!</h1>
            <p>"An idea can change your life, but only if you act on it."</p>
             <Link href="#Contact" className=' text-center p-2 bg-blue-800 w-1/2'> Initiate it Now!</Link>
        </div>
        
        <div><img src="/images/hero-img.svg" alt="img" /></div>
        
    </section>
  )
}
