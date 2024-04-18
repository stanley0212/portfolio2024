import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div id='project' className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>Pro<span className='text-rose-500'>jects</span></h1>
        <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
            <div data-aos='fade-up'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={'/chill.jpeg'} alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='300'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={'/covid_19.jpeg'} alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='600'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={'/luvtas.jpeg'} alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='900'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={'/camping_now.jpeg'} alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='1200'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={'/campsite.jpeg'} alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='1500'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                    <Image src={'/luvtas_1.jpeg'} alt='portfolio' layout='fill' className='object-contain'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects