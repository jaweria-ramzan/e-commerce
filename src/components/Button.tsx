"use client"
import { Minus, Plus } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const Button = () => {
    const [value,setvalue]=useState(0)
    function handlecover(){
        setvalue(value+1)
    }
    function handlecovers(){
        setvalue(value-1)
    }
  return (
    <div className='flex'>
      <button className='rounded-full bg-slate-100 border-double w-8 h-8 p-2 mx-3 ' onClick={handlecovers}><Minus size={18}/></button>
      <p className='flex justify-center items-center'>{value}</p>
      <button className='rounded-full bg-slate-100 border-double w-8 h-8 p-2  mx-3 ' onClick={handlecover}><Plus size={18}/></button>
    </div>
  )
}

export default Button
