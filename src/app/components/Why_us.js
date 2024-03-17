import React from 'react'

import { IoIosBusiness } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

import { GiSelfLove } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa6";
import { MdSportsSoccer } from "react-icons/md";

export default function Why_us() {
    return (
        <section id='Why_us' className='py-10' >
            <h3 className='px-10 text-3xl font-semibold'>Why Choose Us</h3>
            <div className='flex justify-center flex-col lgl:flex-row px-10 '>

                <div className=' lgl:w-96 flex flex-col gap-4 p-10'>
                    <div className=' text-purple-500 text-5xl '>
                        <GiSelfLove />
                    </div>
                    <h1 className='text-bold text-2xl'>Passionate</h1>
                    <p>Passion drives businesses forward. It fuels creativity, inspires growth, and creates success</p>
                </div>
                <div className='lgl:w-96  flex flex-col gap-4 p-10'>
                    <div className=' text-purple-500 text-5xl '>
                        <FaThumbsUp />
                    </div>
                    <h1 className='text-bold text-2xl'>Professional</h1>
                    <p>Professionalism in business builds trust, establishes credibility, and sets the foundation for long-term success.</p>
                </div>
                <div className='lgl:w-96  flex flex-col gap-4 p-10'>
                    <div className=' text-5xl text-purple-500 '>
                        <MdSportsSoccer />
                    </div>
                    <h1 className='text-bold text-2xl'>Suport </h1>
                    <p>Customer support is not just a department, it’s a philosophy. It’s about putting the customer at the heart of everything you do.</p>
                </div>


            </div>
        </section>
    )
}
