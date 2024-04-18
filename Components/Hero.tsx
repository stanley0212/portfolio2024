import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const Hero = () => {
  return (
    // <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center bg-[#141c27] ">
    <div className="h-[88vh] bg-cover bg-center bg-[#141c27] mt-[10vh]">
        <Particle />
        <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
           <div>
           <h1 className='text-[35px] md:text-[50px] text-white font-bold'>HI, I'M <span className='text-rose-500'>Stanley!</span></h1>
            <TextEffect />
            <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
            I am Stanley. 10 years of software development experience from Taiwan and Australia companies, familiar with PHP, Android, Flutter and React Native. 
           </p>
           <div className='mt-[2rem] flex-col sapce-y-6 sm:sapce-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <button className='px-[2rem] hover:bg-rose-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
              <p>Download CV</p>
              <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
            </button>
            {/* <button className='flex items-center space-x-2'>
              <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-rose-500 transition-all duration-200 bg-[#55e6a5]' />
              <p className='text-[20px] font-semibold text-white'>Watch The Video</p>
            </button> */}
           </div>
           </div>
           <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
            <Image src={'/stanley.jpeg'} alt='user' layout='fill' className='object-cover rounded-full' />
           </div>
        </div>
    </div>
  )
}

export default Hero