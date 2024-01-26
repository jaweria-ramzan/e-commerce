import React from 'react'
import Image from 'next/image'
import Slide from '@/views/Slide'
const Slides=[
  
  {
    img:'/sl8.png',
    id:8,
    name:"Flex Push Button Bomber",
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

const page = () => {
  return (
    <div className='w-full  px-[84px]'>
      <Slide slides={Slides}></Slide>
    </div>
  )
}
  
export default page
  