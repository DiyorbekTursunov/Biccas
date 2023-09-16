import React from 'react'
import MainSectionItem from './mainSectionItem'

const MainSection = () => {
  return (
    <div className="max-w-[1220px] mx-auto mb-[8.13rem]"> 
        <div className='flex items-center justify-between mb-[5.75rem]'>
            <h3 className='text-[#191A15] text-[3.125rem] font-medium leading-[]'>Our Features <br /> you cab get</h3>
            <div className='w-[28.8125rem]'><p className='text-[#A6A6A6] text-[1.125rem]'>We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p></div>
            <button className='w-[10.125rem] h-[4.125rem] bg-[#54BD95] rounded-[4.375rem] text-[#fff] hover:opacity-70'>Get Started</button>
        </div>
        <MainSectionItem/>
    </div>
  )
}

export default MainSection