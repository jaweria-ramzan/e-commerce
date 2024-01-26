"use client"
import Image from 'next/image'
import Hero from '@/views/Hero'
import Portion2 from '@/views/Portion2'
import Portion3 from '@/views/Portion3'
import Portion4 from '@/views/Portion4'
import Portion5 from '@/views/Portion5'


export default function Home() {
  return (
    <main className=" px-[90px]">
      <Hero></Hero>
      <Portion2></Portion2>
      <Portion3></Portion3>
      <Portion4></Portion4>
      <div>
      <Portion5></Portion5>
      </div>
      
    </main>
  )
}
