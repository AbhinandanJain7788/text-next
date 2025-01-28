"use client"

import React from 'react'
import ProductCard from './productcard';


const Products = [
     {
        img: "/room-1.jpg",
        title:"Hotel 1",
        desc:"",
        rating:4.5,
        price:"2100",

     },
     {
        img:'/room-2.jpg',
        title:"Hotel 2",
        desc:"",
        rating:4,
        price:"2500",

     },
     {
        img:'/room-3.jpg',
        title:"Hotel 3",
        desc:"",
        rating:4.5,
        price:"3000",

     },
     {
        img:'/room-4.jpg',
        title:"Hotel 4",
        desc:"",
        rating:3.5,
        price:"1800",

     },
     {
        img:'/room-5.jpg',
        title:"Hotel 5",
        desc:"",
        rating:4,
        price:"2500",

     },
     {
        img:'./room-6.jpg',
        title:"Hotel 6",
        desc:"",
        rating:5,
        price:"4500",

     },
];



const NewProduct = () => 
    {
    return (
    <div  className='container pt-16' >
        <h2 className='font-medium text-2xl pb-4 '>MORE HOTEL VIEWS </h2>

        <div className='grid grid-cols-1 place-items-center sm:place-items-start  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
            
        {Products.map((item , index )=>(
            <ProductCard
                key={index} 
                img={item.img} 
                title={item.title} 
                desc={item.desc} 
                rating={item.rating}
                 price={item.price}             
            />

        ))}

          
        </div>


    </div>
  )
}

export default NewProduct