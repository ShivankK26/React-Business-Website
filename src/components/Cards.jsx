import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className="max-w-[1240px] max-auto grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className='w-20 mx-auto bg-white' src={Single} alt="/" />
          <h2 className='font-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send Upto 2GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-3 text-black'>Start Trial</button>
        </div> 

        {/* Card 2 */}  
        <div className="w-full border bg-gray-100 shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img className='w-20 mx-auto bg-white bg-transparent' src={Double} alt="/" />
          <h2 className='font-2xl font-bold text-center py-8'>Partnership</h2>
          <p className='text-center text-4xl font-bold'>$199</p>
          <div className='text-center font-medium'>
            <p className="py-2 border-b mx-8 mt-8">1TB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted Users</p>
            <p className="py-2 border-b mx-8">Send Upto 10GB</p>
          </div>
          <button className='bg-black text-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-3'>Start Trial</button>
        </div> 

        {/* Card 3 */}
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img className='w-20 mx-auto bg-white' src={Triple} alt="/" />
          <h2 className='font-2xl font-bold text-center py-8'>Group Account</h2>
          <p className='text-center text-4xl font-bold'>$299</p>
          <div className='text-center font-medium'>
            <p className="py-2 border-b mx-8 mt-8">5TB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted Users</p>
            <p className="py-2 border-b mx-8">Send Upto 20GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] font-medium rounded-md my-6 mx-auto py-3 text-black'>Start Trial</button>
        </div> 
      </div>
    </div>
  )
}

export default Cards