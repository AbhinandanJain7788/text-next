import React from 'react'

interface propsType {
    img:string ;
    title:string;
    desc:string;
    rating : number;
    price:string;
}

const ProductCard:React.FC<propsType> = ({img, title , desc, rating , price})=> {
   
 //     const generateRating =(rating:numbers) =>
//     {
//         switch(rating)
//         {
//             cas
//         }
//     }
    


  return (
    <div className='px-4 border border-gray-200 rounded -xl max-w-[400px]'>
        <div>
            <img 
            className="w-full h-auto" 
            src ={img} 
            width={200} 
            height={300} 
            alt ={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>Rating:{rating}</p>
            <p>Price: {price}</p>
        </div>
       <div className="space-y-2 py-2">
        <h2 className='text-accent font-medium uppercase'>{title}</h2>
        <p className='text-gray-500 max-w-[150px]'>{desc}</p>
        <div className='font-bold flex gap-4'>
            {price}
        </div>

       </div>

    </div>
  )
}

export default ProductCard