"use client"
import React from 'react'
import Link from 'next/link'
// import Extra from '@/views/Extra'
import Slide from '@/views/Slide'
import Image from 'next/image'
import { useState } from 'react'
import Button from '@/components/Button'
import { ShoppingCart } from 'lucide-react'

type Slide={
  img:string,
  id:number,
  name:string,
  property:string,
  price:string
}
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

const Style = ({params}:{params:{details:string}}) => {
    // console.log(params)
    const id:number=Number(params.details)
    const slide:Slide = Slides[id-1]
    console.log(slide)
    const[add,setadd]=useState(0)
    
    function handleAdd(): void {
    setadd(add+1)
    
  }

  return (
    <div className='px-[104px]'>
      <div className=' h-[600px] flex w-full'>
        <div className='w-1/6 '>

        <Image src={slide.img} alt='img' width={150} height={150} className='cursor-pointer'></Image>
        </div>
        <div className='w-3/6'>
        <Image src={slide.img} alt='img' width={565} height={580} ></Image>
        </div>
        <div className='w-2/6 ml-2'>
            <div className=' text-3xl mt-9'>{slide.name}</div>
            <div className='text-gray-400 text-xl'>{slide.property}</div>
            <div className='flex flex-col font-bold text-xl'>
              <div className=' mt-7'>                
              Select Size 
              </div>
              <div className='flex'>

              <button className='rounded-full text-gray-500 hover:bg-slate-100 w-10 h-10 m-2 p-2'>XS</button>
              <button className='rounded-full text-gray-500 hover:bg-slate-100 w-10 h-10 m-2 p-2'>S</button>
              <button className='rounded-full text-gray-500 hover:bg-slate-100 w-10 h-10 m-2 p-2'>M</button>
              <button className='rounded-full text-gray-500 hover:bg-slate-100 w-10 h-10 m-2 p-2'>L</button>
              <button className='rounded-full text-gray-500 hover:bg-slate-100 w-10 h-10 m-2 p-2'>XL</button>
              </div>
            </div>
            <div className='flex mt-9'>
             <span className=' font-bold text-xl'> Quantity:</span> 
              <Button />
            </div>
            <div className='flex mt-7'>

              <div className=''>
                <Link href='/Cart'>

                <button className='flex  bg-black border-2 border-gray-800 text-white h-[50px] w-36 p-2 justify-center items-center'>
                <ShoppingCart className='mr-2'/>
                Add to Cart
                </button>
                </Link>
              </div>
              <div className='font-bold text-2xl mt-3 ml-4'>{slide.price}.00</div>
            </div>
        </div>
      </div>
    <div className=' h-[450px] px-[84px] mx-10 mt-20'>
      <div className=' relative border-b-2 border-gray-400'> 
        <h1 className='font-extrabold text-9xl text-gray-100 '>Overview</h1> 
        <h1 className='font-bold text-3xl absolute -translate-y-20 '>Product Information</h1>
      </div>
      <div className='flex flex-col'>
        <div className='flex w-full mt-4'>
          <div className='text-gray-600 font-semibold text-lg w-1/3'>PRODUCT DETAILS</div>
          <div className='w-2/3 text-justify text-lg text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className='flex w-full mt-6'>
          <div className='font-semibold text-gray-600 text-lg w-1/3'>PRODUCT CARE</div>
          <div className='text-gray-800 font-semibold w-2/3 text-lg'>
            <ul className='list-disc ml-4'>
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
              <li>Iron on low temperature.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Style
