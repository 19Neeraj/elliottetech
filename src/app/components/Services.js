import React from 'react'
import { IoIosBusiness } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export default function Services() {
    return (
        <>
        <section id='Services ' >
        <div className='flex flex-col lgl:flex-row px-10 lgl:py-16'>

        <div className=' lgl:w-96 flex flex-col gap-4 p-10'>
                <div className=' text-purple-500 text-5xl '>
                    <IoIosBusiness />
                </div>
                <h1 className='text-bold text-2xl'>Local Business</h1>
                <p>“Support local, it’s not just a trend, it’s the foundation of our community.”</p>
            </div>
            <div className='lgl:w-96  flex flex-col gap-4 p-10'>
                <div className=' text-purple-500 text-5xl '>
                <FaShoppingBag />
                </div>
                <h1 className='text-bold text-2xl'>Online Store</h1>
                <p>“Shop online, shop conveniently, shop from the comfort of your own home.”</p>
            </div>
            <div className='lgl:w-96  flex flex-col gap-4 p-10'>
                <div className=' text-5xl text-purple-500 '>
                <MdContentCopy />
                </div>
                <h1 className='text-bold text-2xl'> Blogging</h1>
                <p>“Blogging opens up a world of possibilities and allows you to share your voice with the world.”</p>
            </div>
            <div className=' lgl:w-96 flex flex-col gap-4 p-10'>
                <div className=' text-purple-500 text-5xl '>
                    <FaCheckCircle />
                </div>
                <h1 className='text-bold text-2xl'>Customised Solutions</h1>
                <p>“Customized software solutions: Designed to fit your unique needs, built to enhance your business.”</p>
            </div>

        </div>
        </section>
        </>
    )
}
