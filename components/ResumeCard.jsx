import React from 'react'

const ResumeCard = ({title, subTitle, duration, des}) => {
  return (
    <div className='w-full sm:w-1/3 mx-auto group flex bg-gray-100 dark:bg-gray-800 rounded-lg'>
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                <span className="w-3 h-3 rounded-full inline-flex group-hover:bg-gray-100 duration-300"></span>
            </span>
        <div className="w-full bg-opacity-20 hover:bg-opacity-30 duration:300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-cyan-300">
            <div className="flex flex-col justify-between gap-4">
                <div className="mx-auto">
                    <h3 className="text-md md:text-xl font-semibold text-gray-800 dark:text-gray-100 duration-300">
                        {title}
                    </h3>
                    <p className="text-sm mt-2 text-gray-800 dark:text-gray-50 duration-300">
                        {subTitle}
                    </p>
                </div>
                <div className="">
                    <p className="px-4 py-2 text-teal-600 rounded-lg bg-gray-200 dark:bg-gray-700 flex justify-center items-center text-sm">
                        {duration}
                    </p>
                </div>
            </div>
            <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-50 duration-300">
                {des}
            </p>
        </div>
    </div>
  )
}

export default ResumeCard