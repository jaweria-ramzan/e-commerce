import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Portion4 = () => {
  return (
    <div  className='mt-28 flex flex-col w-full h-[560px]'>

        <div className='flex h-48 items-center'>
          <div className='w-3/5'></div>
          <div className=' w-2/5 font-extrabold text-5xl text-left'>Unique and Authentic Vintage Designer Jewellery</div>
        </div>    

        <div className='flex h-96 w-full'>
          <div className='w-1/2 flex'>
                <div className=' font-extrabold text-9xl w-1/2 text-gray-200 '>
                    Different from others
                </div>
                <div className='absolute flex w-1/2'>
                
                    <div className='w-1/2 h-96 flex flex-col justify-evenly'>
                        <div className=' pr-36'>
                            <div className='text-xl pb-4 font-extrabold'>Using Good Quality Materials</div> 
                            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                        </div>
                        <div className=' pr-36'>
                            <div className='text-xl pb-4 font-extrabold'>Modern Fashion Design</div> 
                            Lorem ipsum dolor sit amt, consectetur adipiscing elit. 
                        </div>
                    </div>

                    <div className='w-1/2 h-96 flex flex-col justify-evenly'>
                        <div className='pr-36'>
                            <div className='pb-4 text-xl font-extrabold'>Discount for Bulk Orders</div> 
                            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                        </div>
                        <div className='pr-36'>
                            <div className='pb-4 text-xl font-extrabold'>100% Handmade Products</div> 
                            Lorem ipsum dolor sit amt, consectetur adipiscing elit. 
                        </div>
                    </div>
                
                </div>
            </div>
          <div className='w-1/2 flex'>
          <div className='w-1/2 flex'>
          <Image src="/feature0.webp" alt='logo' width={300} height={90}></Image>
          </div>
          <div className='w-1/2'>
            <div className='py-5 px-9 text-justify text-lg'>
            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.

            </div>
            <div className='px-9'>
              <Link href="/AllProducts">
                <button className='bg-black border-2 border-gray-800 text-white h-16 w-28 p-2' >
                  See All Products
                </button>
              </Link>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Portion4
