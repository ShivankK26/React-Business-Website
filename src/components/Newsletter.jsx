import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full px-4 py-16 text-white'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className='py-2 text-2xl font-bold md:text-5xl sm:text-4xl'>Want tips & tricks to optimize your flow?</h1>
                <p className='text-sm font-medium text-white'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className="flex flex-col items-center justify-between w-full sm:flex-row">
                    <input className='flex w-full p-3 text-black rounded-md' type="email" name="" placeholder='Enter your email' id="" />
                    <button className="bg-[#00df9a] w-[200px] font-medium rounded-md my-6 px-6 ml-4 py-3 text-black">Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
// 