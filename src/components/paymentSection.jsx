import React, { useState } from 'react'
import PaymantItems from './paymantItems'

const PaymentSection = () => {
    const [isSelected, setisSelected] = useState(true)
    return (
        <section className='max-w-[1220px] mx-auto mb-[8.12rem]'>
            <h2 className='text-[#191A15] text-[3.125rem] font-bold text-center mb-[2.5rem]'>Choose Plan <br /> That’s Right For You</h2>
            <p className='text-center text-[1.125rem] text-[#A6A6A6] mb-[2.5rem]'>Choose plan that works best for you, feel free to contact us</p>
            <div className='w-full flex justify-center mb-[4.19rem]'>
                <div className='w-[21.25rem] h-[4.375rem] bg-[#ffffff] text-[#191A15] shadow-lg rounded-[0.625rem] flex justify-evenly items-center'>
                    <button onClick={() => setisSelected(false)} className={`w-[10rem] h-[3.5rem] rounded-[0.625rem] transition-all ${isSelected ? '' : 'active'} hover:opacity-60`}>Bil Monthly</button>
                    <button onClick={() => setisSelected(true)} className={`w-[10rem] h-[3.5rem] rounded-[0.625rem] transition-all ${isSelected ? 'active' : ''} hover:opacity-60`}>Bil Yearly</button>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <PaymantItems />
            </div>
        </section>
    )
}

export default PaymentSection