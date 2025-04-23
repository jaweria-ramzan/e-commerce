import React from 'react'
import Image from 'next/image'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
const Footer = () => {
  return (
    <div className='flex flex-col w-full '>
      <div className='flex justify-around w-full h-[500px] py-[84px] px-[84px]'>
            <div className='flex flex-col w-2/5 px-20 ' >
                <div className='py-10'>
                    <Image src="/logos.webp" alt='logo' width={220} height={180}></Image>
                </div>
                <div className='text-gray-500 mb-5'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</div>
                <div className='flex  '> 
                    <button className='flex bg-gray-100 rounded-md w-10 h-10 items-center justify-center' ><Twitter size={25}/></button>
                    <button className='flex bg-gray-100 ml-5 rounded-md w-10 h-10 justify-center  items-center'><Facebook  size={25}/></button>
                    <button className='flex bg-gray-100 ml-5 rounded-md w-10 h-10 justify-center items-center'><Linkedin  size={25}/></button>
                </div>
            </div>

            <div className='flex flex-col w-1/5 justify-evenly text-gray-500 pb-3'>
            <div className='font-bold text-lg'>Company</div>
            <div>About</div>
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>How it Works</div>
            <div> Contact Us </div>        
            </div>

            <div className='flex flex-col w-1/5 justify-evenly text-gray-500 pb-28'>
                <div className='font-bold text-lg'>Support</div>
                <div>Support Carrer</div>
                <div>24h Service</div>
                <div>Quick Chat</div>
            </div>
            
            <div className=' w-1/5 flex flex-col justify-evenly text-gray-500 pb-44'>
                <div className='font-bold text-lg'>Contact</div>
                <div>Whatsapp</div>
                <div>Support 24h</div>
            </div>
      </div>


      <div className='flex w-full justify-around items-center border-t-gray-500 border-2 px-[84px] h-24'>
            <div className='text-gray-500'>
                Copyright © 2022 Dine Market
            </div>
            <div className='text-gray-500'>
                Design by. <span className='font-bold text-black'> Weird Design Studio</span>
            </div>
            <div className='text-gray-500'>
                Code by. <span className='font-bold text-black'> jaweria_ramzan on github</span>
            </div >
      </div>
    </div>
  )
}

export default Footer
