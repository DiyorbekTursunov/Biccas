import React from 'react'

const PaymantItems = () => {
    return (
        <>
            <div className='w-[23.375rem]  bg-[#fff] rounded-[1.25rem] shadow-xl '>
                <div className='text-[#191A15] flex flex-col font-semibold items-center pt-[2.5rem]'>
                    <h3 className='text-[1.875rem] mb-[0.63rem]'>Free</h3>
                    <p className='text-[#A6A6A6] font-medium text-[1.125rem] text-center mb-[1.44rem]'>Have a go  and test your <br />  superpowers</p>
                    <p className='text-[3.125rem] flex'> <sub className='text-[#A6A6A6] text-[1.125rem]'>$</sub>0</p>
                </div>
                <div className='bg-[#F9FAFB] rounded-[0.625rem] px-[2.31rem] py-[1.75rem] m-[1.25rem]'>
                    <ol className='flex flex-col gap-[1.38rem] mb-[1.69rem]'>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>2 Users</p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>2 Files</p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>Public Share & Comments</p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>Chat Support </p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>New income apps</p>
                        </li>
                    </ol>
                    <button className='w-[16.25rem] h-[4rem] bg-[#fff] shadow-lg text-[#54BD95] rounded-[1.25rem] text-[1.125rem] hover:opacity-70 active:opacity-60'>Signup for free</button>
                </div>
            </div>
            <div className='w-[23.375rem]  bg-[#54BD95] rounded-[1.25rem] shadow-xl '>
                <div className='text-[#fff] flex flex-col font-semibold items-center pt-[2.5rem]'>
                    <h3 className='text-[1.875rem] mb-[0.63rem]'>Free</h3>
                    <p className='font-medium text-[1.125rem] text-center mb-[1.44rem]'>Experiment the power <br /> of infinite possibilities</p>
                    <p className='text-[3.125rem] flex'> <sub className='text-[1.125rem]'>$</sub>8</p>
                    <button className='w-[8.125rem] h-[2.5rem] bg-[#85DAB9] text-[0.875rem] text-[#fff] rounded-[0.625rem] font-semibold  hover:opacity-70 active:opacity-60'>Save $50 a year</button>
                </div>
                <div className='bg-[#F9FAFB] rounded-[0.625rem] px-[2.31rem] py-[1.75rem] m-[1.25rem]'>
                    <ol className='flex flex-col gap-[1.38rem]  '>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>4 Users</p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>All apps</p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>Unlimited editable exports</p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>Folders and collaboration </p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>All incoming apps</p>
                        </li>
                    </ol>
                    <button className='w-[16.25rem] h-[4rem] bg-[#54BD95] shadow-lg text-[#fff] mt-[2.75rem] rounded-[1.25rem] text-[1.125rem] hover:opacity-70 active:opacity-60'>Go to pro</button>
                </div>
            </div>

            <div className='w-[23.375rem]  bg-[#fff] rounded-[1.25rem] shadow-xl'>
                <div className='text-[#191A15] flex flex-col font-semibold items-center pt-[2.5rem]'>
                    <h3 className='text-[1.875rem] mb-[0.63rem]'>Free</h3>
                    <p className='text-[#A6A6A6] font-medium text-[1.125rem] text-center mb-[1.44rem]'>Unveil new superpowers and <br /> join the Design Leaque</p>
                    <p className='text-[3.125rem] flex'> <sub className='text-[#A6A6A6] text-[1.125rem]'>$</sub>0</p>
                </div>
                <div className='bg-[#F9FAFB] rounded-[0.625rem] px-[2.31rem] py-[1.75rem] m-[1.25rem]'>
                    <ol className='flex flex-col gap-[1.38rem] mb-[1.69rem]'>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>All the features of pro plan</p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>Account success Manager</p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>Single Sign-On (SSO)</p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>Co-conception pogram</p>
                        </li>
                        <li className='flex gap-[0.62rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26ZM12.8355 16.2959L17.8779 11.0959L16.4421 9.70358L12.0894 14.1923L9.5295 11.7554L8.15054 13.204L11.4281 16.324L12.1458 17.0072L12.8355 16.2959Z" fill="#54BD95" />
                            </svg>
                            <p>Collaboration-Soon</p>
                        </li>
                    </ol>
                    <button className='w-[16.25rem] h-[4rem] bg-[#fff] shadow-lg text-[#54BD95] rounded-[1.25rem] text-[1.125rem] hover:opacity-70 active:opacity-60'>Go to Business</button>
                </div>
            </div>
        </>
    )
}

export default PaymantItems