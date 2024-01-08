import React from 'react'
import ResumeCard from '@/components/ResumeCard'

const Education = () => {
  return (
    <div name="education" className='min-h-screen'>
        <div className="p-4 mx-auto flex flex-col justify-center">
            <div className="pb-8">
                <p className=" text-4xl font-medium inline border-b-4 border-cyan-500 dark:text-gray-300">
                    Education
                </p>
                <div className="mt-6 lgl:mt-14 w-full mx-auto flex flex-col sm:flex-row gap-8 px-6 sm:px-0">
                  <ResumeCard 
                    title="BSc in Computer Science"
                    subTitle="Kabarak University"
                    duration="2022-2027"
                    des="Owing to my stellar performance in my high school examination, I secured a spot at Kabarak University for a major in Computer Science."
                  />
                  <ResumeCard 
                    title="High School Education"
                    subTitle="Lenana School"
                    duration="2018-2022"
                    des="It was at this marvel of a learning instituition that my interest in web development was realized. I was the chair of the IT club."
                  />
                  <ResumeCard
                    title="JavaScript Algorithms and Data Structures Bootcamp"
                    subTitle="freeCodeCamp"
                    duration="3 months"
                    des="Earned an official freeCodeCamp certificate after completing approximately 300 hours of tasks." 
                  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education