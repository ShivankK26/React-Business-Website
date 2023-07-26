import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-4xl font-bold md:text-7xl sm:text-6xl md:py-6'>Grow with data.</h1>
            <div className='flex items-center justify-center'>
                <p className='py-4 text-xl font-bold md:text-5xl sm:text-4xl'>Fast, flexible financing for </p>
                <Typed
                   className='pl-2 text-xl font-bold md:text-5xl sm:text-4xl md:pl-4' 
                   strings={[
                    'B2B', 'B2C', 'SAAS'
                ]} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='py-2 text-xl font-bold text-gray-500 md:text-2xl'>Monitor your data analytics to increase revenue for B2B, B2C, and SAAS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero