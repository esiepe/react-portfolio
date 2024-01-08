import Image from 'next/image'
import React from 'react'
import web1 from '@/public/web1.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1, 
      src: web1
    },
    {
      id: 2, 
      src: web1
    },
    {
      id: 3, 
      src: web1
    },
  ]

  return (
    <div name="portfolio" className='min-h-screen'>
      <div className="p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className=" text-4xl font-medium inline border-b-4 border-cyan-500 dark:text-gray-300">
            Portfolio
          </p>
          <p className=" py-6 dark:text-gray-50">
            Check out some of my work!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-2 px-6 sm:px-0">
          {
          portfolios.map(({id, src}) => (
            <div key={id} className="shadow-md shadow-cyan-300 rounded-lg">
              <Image 
                src={src}
                alt='kabu'
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className="flex items-center justify-center dark:text-gray-50">
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</button>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Code</button>
              </div>
            </div>
          ))

        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio