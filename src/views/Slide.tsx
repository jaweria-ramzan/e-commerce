"use client"
import React from 'react'
import Image from 'next/image'
import Style from '@/app/AllProducts/[details]/page'
import Link from 'next/link'

type Slides={
    img:string,
    id:number,
    name:string,
    property:string,
    price:string
  }
  type slidex={
   slides:Slides[]
  }

const Slide = ({slides}:slidex) => {
  return (
    <div className=' flex  mt-4 flex-wrap gap-10'>

        {slides.map((s)=>(
        <Link key={s.id}  href={`/AllProducts/${s.id}`}>
          <div className='flex flex-col text-left w-[250px] h-[360px] mb-11 cursor-pointer'>
            <div>
            <Image src={s.img} alt='img' width={250} height={270} ></Image>
            </div>
            <div className='mt-3 h-24'>
            <div className='font-bold text-lg'>{s.name}</div>
            <div className='text-gray-400'>{s.property}</div>
            <div className='font-bold text-xl'>{s.price}</div>
            </div>
          </div>
        </Link>
        ))}
      </div>
  )
}

export default Slide
