import React from 'react'
import Laptop from '../assets/laptop.jpg'


const Analytics = () => {
  return (
    <div className='w-full px-4 py-16 bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/'/>
            <div className='flex flex-col justify-center'>
               <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
               <h1 className='py-2 text-2xl font-bold md:text-4xl sm:text-3xl'>Manage Data Analytics Centrally</h1> 
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics