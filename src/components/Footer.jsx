import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='flex md:w-[75%] my-6 justify-between'>
                <FaDribbbleSquare size={30}/>
                <FaFacebookSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
           <div className="">
            <h6 className='font-medium text-gray-400'>Solutions</h6>
              <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>  
                <li className='py-2 text-sm'>Commerce</li>  
                <li className='py-2 text-sm'>Insights</li>    
              </ul>   
           </div> 

           <div className="">
            <h6 className='font-medium text-gray-400'>Support</h6>
              <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>  
                <li className='py-2 text-sm'>Guides</li>  
                <li className='py-2 text-sm'>API Status</li>    
              </ul>   
           </div> 

           <div className="">
            <h6 className='font-medium text-gray-400'>Company</h6>
              <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>  
                <li className='py-2 text-sm'>Press</li>  
                <li className='py-2 text-sm'>Careers</li>    
              </ul>   
           </div> 

           <div className="">
            <h6 className='font-medium text-gray-400'>Legal</h6>
              <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Polcy</li>  
                <li className='py-2 text-sm'>Terms</li>  
              </ul>   
           </div> 
        </div>
    </div>
  )
}

export default Footer