"use client"
import Image from 'next/image'
import React from 'react'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Link from 'next/link';
type Slides={
  img:string,
  name:string,
  id:number,
  price:string
}
type slidex={
 slides:Slides[]
}
const Carousel = ({slides}:slidex) => {
  return (
    <div className='flex flex-col'>
      <div className=' flex absolute mt-4'>

        {slides.map((s)=>(
          <Link key={s.id} href={`/AllProducts/${s.id}`}>

          <div  className='flex flex-col text-left w-[360px] h-[460px] cursor-pointer transform transition duration-700 hover:scale-110'>
            <div>
            <Image src={s.img} alt='img' width={360} height={320} ></Image>
            </div>
            <div className='font-bold text-gray-700 mt-3 h-24'>
            <div>{s.name}</div>
            <div>{s.price}</div>
            </div>
          </div>
          </Link>
          
        ))}
      </div>
      
      
    </div>
  )
}

export default Carousel
