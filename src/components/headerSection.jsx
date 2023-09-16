import React from 'react'
import ReactStars from 'react-stars'

import HeaderSectionItems from './headerSectionItems'
const HeaderSection = () => {
  return (
    <div className='max-w-[1220px] mx-auto flex items-center justify-between py-[3.75rem]'>
        <div className='w-[40.25rem]'>
            <h2 className='text-[#191A15] text-[3.125rem] font-semibold'>How we support our <br /> pratner all over the world</h2>
            <p className='text-[#A6A6A6] text-[1rem] leading-[1.875rem] mb-[4.56rem]'>SaaS become a common delivery model for many business application, including <br /> office software, messaging software, payroll processing software , DBMS software, <br /> management software</p>
            <div className='text-[#191A15] text-[1.125rem] font-medium flex gap-[6.88rem]'>
                <div className='flex flex-col gap-[0.5rem]'>
                    <ReactStars value={5} edit={false} size={30}/>
                    <p><span className='font-bold'>4.9</span>/ 5 rating</p>
                    <p className='text-[#A6A6A6] text-[1.125rem] font-bold'>databricks</p>
                </div>
                <div className='flex flex-col gap-[0.5rem]'>
                    <ReactStars value={4} edit={false} size={30}/>
                    <p><span className='font-bold'>4.9</span>/ 5 rating</p>
                    <p className='text-[#A6A6A6] text-[1.125rem] font-bold'>databricks</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-[1.88rem]'>
            <HeaderSectionItems />
        </div>
    </div>
  )
}

export default HeaderSection