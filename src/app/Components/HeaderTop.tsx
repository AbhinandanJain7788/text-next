import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
const HeaderTop =() =>
{
  return ( 
  <div className="border-b  border-gray-200 hidden  sm:block">
    
  <div className="container py-4">
    <div className='flex justify-between items-center'>
        <div className='hidden  lg:flex gap-1'>
            <div  className="header_top_icon_wrapper">
                <BsFacebook></BsFacebook>
            </div>
            <div className='header_top_icon_wrapper'>
                <BsInstagram/>
            </div>
            <div className="header_top_icon_wrapper">
               <BsTwitter/>
            </div>
            <div className="header_top_icon_wrapper">
               <BsLinkedin/>
            </div>

        </div>

         <div className="text-gray-500 text-[12px]">
            <b> EXTRA 10% OFF</b>
            THIS WEEK OVER HERE 
            </div>        
    </div>
  </div>
  </div>
  )
}; 

export default HeaderTop