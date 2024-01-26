import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
const Hero = () => {
  return (
    <div>
      
      <div className='flex w-full h-[650px] '>
        <div className='mt-2 flex flex-col justify-evenly w-[500px]'>

          <div className=''>
            <button className=' w-28 h-10 bg-sky-100 font-semibold text-blue-700 items-center rounded-lg'>Sale 70%</button>
          </div>

          <div className='font-extrabold text-6xl'>An Industrial Take on Streetwear</div>

          <div className='text-gray-500 pr-48'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</div>

            <div className=''>
              <Link href='/AllProducts'>

              <button className='flex  bg-black border-2 border-gray-800 text-white h-[70px] w-36 p-2 justify-center items-center'>
              <ShoppingCart/>
              Start Shopping
              </button>
              </Link>
            </div>

          <div className='text-gray-500 flex justify-between'>
            <div className=''>
              <Image src="/Featured1.webp" alt='logo' width={110} height={100}></Image>

            </div>
            <div className=''>
              <Image src="/Featured2.webp" alt='logo' width={110} height={100}></Image>

            </div>
            <div className=''>
              <Image src="/Featured3.webp" alt='logo' width={110} height={100}></Image>

            </div>
            <div className=''>
              <Image src="/Featured4.webp" alt='logo' width={110} height={100}></Image>

            </div>
          </div>
        </div>

        <div className=' flex justify-center items-center w-[600px] '>
          <div className=' flex items-center w-[600px] h-[600px] border-black rounded-full bg-pink-100'>
              <Image src="/header.webp" alt='header' height={650} width={650} className='absolute -translate-x-4 -translate-y-3'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
