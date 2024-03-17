import React from 'react'


export default function Ourservices() {
  return (
    <section id='ourservices' >
        <h1 className='pl-[5%]  lgl:text-4xl font-semibold'> Our Services</h1>
        <div className='flex flex-col lgl:flex-row lgl:px-10'>

        <div className='  flex flex-col gap-4 p-10'>
                <div className=' text-purple-500 text-5xl '>
                    <img className=' w-80' src="/images/branding.jpg" alt="img" />
                </div>
                <h1 className='text-bold text-2xl'>Branding Desing</h1>
                <p>“A strong brand design differentiates you from the competition and leaves a lasting impression on your audience.”</p>
            </div>
            <div className='  flex flex-col gap-4 p-10'>
                <div className=' text-purple-500 text-5xl '>
                    <img className=' w-80' src="/images/graphic.jpg" alt="img" />
                </div>
                <h1 className='text-bold text-2xl'>Graphic Design</h1>
                <p>“Graphic design is not just about aesthetics, it’s about effectively communicating your message.”

</p>
            </div>
            <div className='  flex flex-col gap-4 p-10'>
                <div className=' text-purple-500 text-5xl '>
                    <img className=' w-80' src="/images/web.jpg" alt="img" />
                </div>
                <h1 className='text-bold text-2xl'>Web Development</h1>
                <p>“A website is not just a digital presence, it’s a window to your business. Invest in professional web development.”</p>
            </div>
            
        </div>
        </section>
  )
}
