import React from 'react'
import Image from 'next/image'
const Portion2 = () => {
  return (
    <div>
      <div className='flex flex-col h-[520px] w-full'>
        <div className='text-center'>
          <p className='text-sky-700 font-bold'>PROMOTIONS</p>
          <p className='text-3xl font-bold mt-2'>Our Promotions Events</p>
        </div>

        <div className=' flex mt-4 justify-between'>
          <div className='flex flex-col'>
            <div className='p-7 flex w-[420px] bg-gray-300 h-52 mb-4'>
              <div className='w-36'>
                <h1 className='font-bold text-4xl'> GET UP TO 60%</h1>
               <p className=' text-xl mt-1 '> For the summer season</p>
              </div>
              <div>
                <Image src="/event1.webp" alt='ev1' height={350} width={260} className='absolute -translate-y-5 -translate-x-5'></Image>
              </div> 
            </div>


            <div className='flex flex-col items-center  w-[420px] bg-black text-white h-52'>
              <div className='p-8 mt-3'>
              <span className='font-extrabold text-4xl'>GET 30% Off</span> <br />

              </div>
              <div className='flex flex-col items-center'>
                USE PROMO CODE
                <button className='rounded-xl bg-slate-800 w-80 h-8'>DINEWEEKENDSALE</button>
              </div>
            </div>
          </div>


          <div className='px-5 flex flex-col justify-between ml-6 w-80 bg-pink-200'>
            
            <div className='text-lg mt-4'>
            Flex Sweatshirt
            <br />
            <span className='line-through'>
            $100.00
            </span>
            <span className='font-bold'>
            $75.00
            </span>
            </div>

            <div className=''>
              <Image src="/event2.webp" alt='eve2' width={270} height={270} ></Image>
            </div>
          </div>

          <div className='px-5 flex flex-col justify-between w-80 bg-gray-300'>
            <div className='text-lg mt-4'>
            Flex Push Button Bomber
            <br />
            <span className='line-through'>
            $225.00
            </span>
            <span className='font-bold'>
            $190.00
            </span>
            </div>
            
            <div className=''>
              <Image src="/event3.webp" alt='eve3' width={270} height={270}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portion2
