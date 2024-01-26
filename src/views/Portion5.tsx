import React from 'react'

const Portion5 = () => {
  return (
    <div>
       <div className='flex flex-col justify-center items-center w-full h-[420px]'>
            <div className='font-extrbold text-8xl text-gray-200'>
                NEWSLETTER
            </div>
            <div className='flex flex-col justify-evenly h-[200px] items-center absolute -translate-y-2'>
                <div className='font-bold text-4xl'>Subscribe Our Newsletter</div> 
                <div className='text-gray-500'> Get the latest information and promo offers directly</div>
                <div className='flex'>
                <div>
                <input type="email" placeholder='Enter your Email Address' className='w-72 p-2 border-gray-500 border-[1px] bg-transparent'/>
                </div>
                <div>
                <button className='bg-black text-white border-gray-800 border-2 p-2 ml-2'>Get Started</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portion5
