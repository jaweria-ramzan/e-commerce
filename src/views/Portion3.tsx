"use client"
import React from 'react'
import Image from 'next/image'
import Carousel from './Carousel'

const Slides=[
  {
    img:'/sl1.png',
    id:1,
    name:"Brushed Raglan Sweatshirt",
    property:"Sweater",
    price:"$195"
  },
  {
    img:'/sl2.png',
    id:2,
    name:"Cameryn Sash Tie Dress",
    property:"Dress",
    price:"$545"
  },
  {
    img:'/sl3.png',
    id:3,
    name:"Flex Sweatshirt",
    property:"Sweater",
    price:"$175"
  },
  {
    img:'/sl4.png',
    id:4,
    name:"Flex Sweatpants",
    property:"Pants",
    price:"$175"
  },
  {
    img:'/sl5.png',
    id:5,
    name:"Pink Fleece Sweatpants",
    property:"Pants",
    price:"$195"
  },
  {
    img:'/sl6.png',
    id:6,
    name:"Lite Sweatpants",
    property:"Pants",
    price:"$150"
  },
  {
    img:'/sl7.png',
    id:7,
    name:"Imperial Alpaca Hoodie",
    property:"Jackets",
    price:"$525"
  },
  {
    img:'/sl8.png',
    id:8,
    name:"Flex Push Button Bomber",
    property:"Jackets",
    price:"$225"
  },
  {
    img:'/sl9.png',
    id:9,
    name:"Muscle Tank",
    property:"T Shirts",
    price:"$75"
  },
  {
    img:'/sl10.png',
    id:10,
    name:"Brushed Bomber",
    property:"Jackets",
    price:"$225"
  },
  {
    img:'/sl11.png',
    id:11,
    name:"Raglan Sweatshirt",
    property:"Sweater",
    price:"$195"
  }
]

const Portion3 = () => {
  return (
      <div className=' w-full h-[650px] mt-28'>
        <div className='text-center'>
         <span className='text-blue-600'> PRODUCTS</span> <br />
         <span className='font-bold text-3xl'> Check What We Have</span>     
        </div>
        <div className='h-[580px] relative overflow-auto mt-9 p-5'>
          <Carousel slides={Slides}></Carousel>
        </div>
      </div>
  )
}

export default Portion3
