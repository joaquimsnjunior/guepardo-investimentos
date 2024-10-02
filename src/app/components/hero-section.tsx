import Image from 'next/image'
import React from 'react'
import GuepardoHero from '../assets/leopardo-hero.jpg'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JSX } from 'react'

export default function HeroSection() {
  return (
    <div>
      <div className="bg-white"> {/* Container */} 
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20"> {/* Title */} 
            <h1 className="mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12">
             DISCIPLINA, <span className='italic'>CONSISTÊNCIA</span> E RESULTADO. </h1>
          <div className="flex items-stretch">
          <Image 
            src={GuepardoHero}
            alt='Guepardo Hero'
            className='w-full h-full object-cover' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}
