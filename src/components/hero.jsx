import heroImg from './images/heroImg.png'
import heroMan from './images/heroMan.png'
const Hero = ({ setOpen, isOpen }) => {
    return (
        <div className='flex justify-between mb-[8.13rem]'>
            <div className="w-[34.6875rem] flex flex-col gap-7">
                <h1 className="text-[5rem] font-bold text-[#191A15] leading-[5.625rem]">We’re here to <br /> Increase your <br /> Productivity</h1>
                <div className='blur'></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="487" height="34" viewBox="0 0 487 34" fill="none">
                    <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#54BD95" strokeWidth="8" strokeLinecap="round" />
                </svg>
                <p className="text-[1.125rem] font-medium">Let's make your work more organize and easily using <br /> the Taskio Dashboard with many of the latest <br /> featuresin managing work every day.</p>
                <div className="text-[1.125rem] text-[#fff] flex gap-[2.5rem]">
                    <button className="w-[9rem] h-14  bg-[#54BD95] rounded-[2.5rem] hover:opacity-70">Try free trial</button>
                    <button className="text-[#191A15] flex gap-[1.14rem] items-center hover:opacity-70" onClick={() => setOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17 1.16675C25.7432 1.16675 32.8333 8.25533 32.8333 17.0001C32.8333 25.7448 25.7432 32.8334 17 32.8334C8.25524 32.8334 1.16666 25.7448 1.16666 17.0001C1.16666 8.25533 8.25524 1.16675 17 1.16675Z" stroke="#191A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 16.9919C22 15.64 15.0709 11.3152 14.2848 12.0928C13.4988 12.8705 13.4232 21.0401 14.2848 21.891C15.1464 22.7449 22 18.3438 22 16.9919Z" stroke="#191A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> View Demo</button>
                </div>
            </div>
            <div className='relative'>
                <div className='absolute flex items-center justify-between bg-[#fff] w-[16.375rem] h-[4.875rem] rounded-[0.625rem] p-[1.6rem] select-none left-[-10.775rem] top-[1.88rem]'>
                    <div>
                        <p className='text-[#A9A7B6]'>Enter amount</p>
                        <p>$450..00</p>
                    </div>
                    <div>
                        <div className='bg-[#52BD94] flex justify-center items-center w-[4rem] h-[1.75rem] rounded-[2.5rem] text-[0.8125rem] text-[#fff]'>send</div>
                    </div>
                </div>
                <div className='absolute w-[2.5rem] h-[2.5rem] flex justify-center items-center rotate-[15deg] bg-[#4535AF] rounded-[0.625rem] left-[-2.88rem] top-[10.805rem] select-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                        <path d="M1 4.73309L5.17391 8.99976L13 0.999756" stroke="white" strokeWidth="2" />
                    </svg>
                </div>
                <div className='absolute flex items-end w-[8.625rem] h-[4.375rem] bg-[#fff] p-[0.75rem] rounded-[0.625rem] select-none top-[26.31rem] left-[-4.88rem]'>
                    <div className='flex flex-col'>
                        <span className='text-[0.75rem] text-[#A9A7B6]'>Total Income</span>
                        <span>$245.00</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 16.6663V8.33301" stroke="#52BD94" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 16.6663V3.33301" stroke="#52BD94" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 16.6665V11.6665" stroke="#52BD94" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className='absolute flex items-center justify-center rounded-[0.625rem] w-[3.03581rem] h-[3.03581rem] rotate-[15deg] bg-[#FBC75E] right-[-0.87581rem] top-[1.62rem]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <g clipPath="url(#clip0_0_39)">
                            <path d="M13.8627 9.78005C17.8637 10.8521 21.3968 10.64 21.7542 9.30638C22.1115 7.97271 19.1578 6.02248 15.1568 4.95042C11.1558 3.87836 7.62266 4.09043 7.26531 5.42409C6.90795 6.75776 9.86171 8.70799 13.8627 9.78005Z" stroke="#F8F8FA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.244 14.9411C19.8859 16.2773 16.3772 16.4932 12.3525 15.4148C8.32777 14.3364 5.39703 12.395 5.75507 11.0588" stroke="#F8F8FA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.26483 5.42432L4.24528 16.6935C3.88724 18.0296 6.81798 19.971 10.8427 21.0494C14.8674 22.1278 18.3761 21.9119 18.7342 20.5757L21.7537 9.3066" stroke="#F8F8FA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_39">
                                <rect width="20" height="20" fill="white" transform="translate(5.92889 0.752441) rotate(15)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='absolute  flex flex-col  w-[9.125rem] h-[11.75rem] bg-[#161C28] font-normal right-[-6.98rem] top-[18.12rem] rounded-[0.625rem] rotate-[15deg] p-[0.98rem] select-none'>
                    <svg className='-z-50 top-0 right-0 rotate-[rotate(15 79.922 46.9467)] absolute' xmlns="http://www.w3.org/2000/svg" width="47" height="106" viewBox="0 0 67 126" fill="none">
                        <circle cx="79.922" cy="46.9467" r="79" fill="#232937" />
                    </svg>
                    <svg className='mb-[1.18rem] rotate-[-15deg]' xmlns="http://www.w3.org/2000/svg" width="52" height="40" viewBox="0 0 52 40" fill="none">
                        <circle opacity="0.5" cx="34.0976" cy="22.1523" r="14" transform="" fill="white" />
                        <circle opacity="0.5" cx="18.0312" cy="17.8474" r="14" transform="rotate(15 18.0312 17.8474)" fill="white" />
                    </svg>
                    <span className='text-[0.75rem] text-[#E6E6E6] '>Creadit Crad</span>
                    <div className='mb-[1.11rem]'>
                        <div className='flex items-center gap-[0.75rem]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                <circle cx="2.76871" cy="2.64724" r="2" transform="rotate(15 2.76871 2.64724)" fill="#D9D9D9" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                <circle cx="2.76871" cy="2.64724" r="2" transform="rotate(15 2.76871 2.64724)" fill="#D9D9D9" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                <circle cx="2.76871" cy="2.64724" r="2" transform="rotate(15 2.76871 2.64724)" fill="#D9D9D9" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                                <circle cx="2.76871" cy="2.64724" r="2" transform="rotate(15 2.76871 2.64724)" fill="#D9D9D9" />
                            </svg>
                            <span className='text-[0.75rem] text-[#E6E6E6]'>1234</span>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[2.125rem] h-[1.375rem] bg-[#fff] opacity-[0.2] rounded-[0.25rem]'></div>
                        <span className='text-[0.75rem] text-[#F8F8FA]'>09/25</span>
                    </div>
                    <svg className='absolute -z-50 left-0 bottom-0' xmlns="http://www.w3.org/2000/svg" width="68" height="106" viewBox="0 0 88 136" fill="none">
                        <circle cx="8.75499" cy="79.7546" r="79" transform="rotate(15 8.75499 79.7546)" fill="#232937" />
                    </svg>
                </div>
                <div className='absolute bottom-[-1.18rem] right-[2.94rem] w-[2.5rem] h-[2.5rem] rounded-[0.625rem] rotate-[15deg] bg-[#FFAA94] flex items-center justify-center'>
                    <svg className=' rotate-[-15deg]' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <g clipPath="url(#clip0_0_33)">
                            <path d="M19.0921 16.8506C18.9777 17.2776 18.6984 17.6416 18.3156 17.8626C17.9328 18.0836 17.4778 18.1435 17.0509 18.0291L7.3916 15.4409L3.30912 17.798L6.76004 4.91896C6.87445 4.49199 7.15378 4.12796 7.53658 3.90695C7.91939 3.68593 8.37432 3.62604 8.80128 3.74045L20.0704 6.76C20.4974 6.87441 20.8614 7.15374 21.0824 7.53655C21.3034 7.91935 21.3633 8.37428 21.2489 8.80124L19.0921 16.8506Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_33">
                                <rect width="20" height="20" fill="white" transform="translate(5.42361 0.247314) rotate(15)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <img src={heroMan} alt="" />
            </div>
        </div>
    )
}

export default Hero