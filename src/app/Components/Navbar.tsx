import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='hidden lg:block'> 
         <div className="conatiner">
           <div className="flex w-fit gap-10 mx-auto font-medium py-4 test-blackish">
              <Link className='navbar_link relative' href="#" >HOME</Link>
              <Link className='navbar_link relative' href="#" >About</Link>
              <Link className='navbar_link relative' href="#" >Gallery</Link>
              <Link className='navbar_link relative' href="#" >Destination</Link>
              <Link className='navbar_link relative' href="#" >Testimonials</Link>
              
             </div>
           </div>
        </div> 
  )
}

export default Navbar