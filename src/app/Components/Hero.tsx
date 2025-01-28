"use client"

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';
const Hero = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow : 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData =[
        {
            id:0,
            img:"/im-1.jpg",
            title:"Forest wood cottage",
            mainTitle:"",
            price:"2000",

        },
        {
            id:1,
            img:"/im-3.jpg",
            title:"Gateways",
            mainTitle:"",
            price:"1500",
        },
        {
            id:2,
            img:"/im-4.jpg",
            title:"The cottage and cheese",
            mainTitle:"",
            price:"1800",

        },
    ];

  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
            {slideData.map((item) => (
              <Slide 
              key ={item.id} 
               img={item.img} 
               title={item.title}
               mainTitle ={item.mainTitle}
               price = {item.price} /> ))}
        </Slider>
          </div>
   </div>
  );
};

export default Hero;