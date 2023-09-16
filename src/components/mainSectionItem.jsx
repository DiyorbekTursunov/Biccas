import mainImg1 from './images/mainImg1.png'
import mainImg2 from './images/mainImg2.png'
import mainImg3 from './images/mainImg3.png'

const MainSectionItem = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex flex-col w-[21.25rem]'>
            <img src={mainImg3} alt="" />
            <div>
                <h3 className='text-[1.875rem] font-semibold text-[#191A15]'>Collboration Teams </h3>
                <p className='text-[#A6A6A6] text-[1.125rem]'>Here you can handle projects together with team virtually</p>
            </div>
        </div>
        <div className='flex flex-col w-[21.25rem]'>
            <img src={mainImg2} alt="" />
            <div>
                <h3 className='text-[1.875rem] font-semibold text-[#191A15]'>Cloud Storage</h3>
                <p className='text-[#A6A6A6] text-[1.125rem]'>No nedd to worry about storage because we provide storage up to 2 TB</p>
            </div>
        </div>
        <div className='flex flex-col w-[21.25rem]'>
            <img src={mainImg1} alt="" />
            <div>
                <h3 className='text-[1.875rem] font-semibold text-[#191A15]'>Daily Analytics</h3>
                <p className='text-[#A6A6A6] text-[1.125rem]'>We always provide useful informatin to make it easier for you every day</p>
            </div>
        </div>
    </div>
  )
}

export default MainSectionItem