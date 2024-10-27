import React from 'react'
import { AboutMe } from '../constant/constant'

const AboutSection = () => {
  return (
    <div className='p-5 mb-[4.5rem]'>
        <div className='flex justify-center mb-10'>
            <button className='rounded-full bg-mainColorten text-mainColor font-medium p-[2px_20px_3px]'>{AboutMe.about}</button>
        </div>
        <div className='grid grid-cols-2 items-center'>
            <div className='relative flex items-center justify-center'>

                <div className='bg-black w-[260px] h-[260px]'></div>
                <div className=' absolute left-0 right-[75px] m-auto top-[75px] bottom-0 border-2 border-black w-[260px] h-[260px]'></div>
                {/* image */}
                {/* {AboutMe.image} */}
            </div>
            <div>
                <h4 className='text-[2rem] text-titletext font-medium mb-4'>{AboutMe.title}</h4>
                <p className='text-[1.04rem] text-subtext mb-4'>{AboutMe.subtitle}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection