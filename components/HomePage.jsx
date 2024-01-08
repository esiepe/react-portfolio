import React from 'react'
import {
    AiFillTwitterCircle, 
    AiFillLinkedin,
    AiFillGithub,
  } from "react-icons/ai"
import Image from "next/image"
import esiepe from '@/public/esiepe.jpg'


const HomePage = () => {
  return (
        <div name="home" className='max-h-screen'>
          <div className='mx-auto rounded-full overflow-hidden w-60 h-60 shadow-shadowOne'>
            <Image src={esiepe} alt='profile'/>
          </div>
          <div className='text-center px-10 py-6'>
            <p className='text-md md:text-xl dark:text-gray-300'>Hi my name is</p>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Esiepe Owen
            </h2>
            <h3 className='text-xl py-2 md:text-3xl dark:text-gray-300'>
              and I&apos;m a <span className='text-teal-600'>Full Stack Developer</span>
            </h3>
            <p className='text-md py-4 leading-7 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-50'>
              Passionate Full Stack Developer with an insatiable hunger for growth.
              Join me in driving innovation in the world of technology. 
              Let&apos;s make tech work!
            </p>
          </div>
          <div className='text-4xl flex justify-center gap-16 text-gray-600 dark:text-gray-300'>
            <a href="#"><AiFillTwitterCircle /></a> 
            <a href="#"><AiFillLinkedin /></a>
            <a href="#"><AiFillGithub /></a> 
          </div>
          
        </div>
  )
}

export default HomePage