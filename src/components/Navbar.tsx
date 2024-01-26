// <!-- component -->
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    
        <div  className="flex  flex-col max-w-screen-xl px-[84px]  mx-auto md:items-center md:justify-between md:flex-row ">
            <div className="flex flex-row items-center justify-between ">
                <Link href="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                <Image src="/logos.webp" alt='logo' width={155} height={110}/>
                </Link>     
            </div>
            <div  className="flex-col md:gap-12 h-24  flex-grow hidden pb-4 md:pb-0 md:flex md:justify-center md:items-center md:flex-row">
                <Link className=" text-1xl  bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900  focus:outline-none focus:shadow-outline" href="/Female">Female</Link>
                <Link className="   text-1xl bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900  focus:outline-none focus:shadow-outline" href="/Kids">Kids</Link>
                <Link className="   text-1xl  bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900  focus:outline-none focus:shadow-outline" href="/Male">Male</Link>
                <Link className="   text-1xl bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900  focus:outline-none focus:shadow-outline" href="/AllProducts">All Products</Link>
                
            </div>
            <div  className="">           
                <div className="max-w-2xl mx-auto hidden md:flex">

                    <form>       
                        <div className=" w-80">
                            <div className='flex border-[1px] border-gray-400 rounded-lg items-center justify-center'><Search size={15}/>
                            <input type="search" placeholder='What are you looking for' className='ml-2 w-72 h-6 text-xs bg-transparent'/>
                            </div>
                            
                        </div>
                    </form>
                
                </div>
            </div>
            <div className='ml-10  hidden md:flex'>
                <Link href="/Cart">

                <ShoppingCart/>
                </Link>
            </div>    
        </div>
    
    


  )
}

export default Navbar



