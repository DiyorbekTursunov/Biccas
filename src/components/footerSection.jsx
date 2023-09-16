import footerImg1 from './images/footerImg1.png'
import footerImg2 from './images/footerImg2.png'
import footerImg3 from './images/footerImg3.png'
import footerImg4 from './images/footerImg4.png'
import footerImg5 from './images/footerImg5.png'

const FooterSection = ({ setOpen, isOpen }) => {
    return (
        <div className='max-w-[1220px] mx-auto pt-[8.13rem]'>
            <div className='flex justify-between mb-[10.63rem]'>
                <div className='w-[29.125rem] text-[#A6A6A6] text-[1.125rem]'>
                    <h2 className='text-[#fff] text-[3.125rem] font-semibold mb-[1.25rem]'>People are Saying <br /> About DoWhith</h2>
                    <p className='mb-[2.63rem]'>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="38" viewBox="0 0 45 38" fill="none">
                        <path d="M11.5 0H21.5L14.5 38H0L11.5 0Z" fill="#D9D9D9" />
                        <path d="M35 0H45L38 38H23.5L35 0Z" fill="#D9D9D9" />
                    </svg>
                    <p className='my-[2.5rem]'>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>
                    <span>_ Aria Zinanrio</span>
                    <div className='flex gap-[1.25rem] mt-[2.5rem]'>
                        <img src={footerImg1} alt="" className='cursor-pointer hover:opacity-70' />
                        <img src={footerImg2} alt="" className='cursor-pointer hover:opacity-70' />
                        <img src={footerImg3} alt="" className='cursor-pointer hover:opacity-70' />
                        <img src={footerImg4} alt="" className='cursor-pointer hover:opacity-70' />
                        <button onClick={() => setOpen(!isOpen)}>
                            <img src={footerImg5} alt="" className='cursor-pointer hover:opacity-70' />
                        </button>
                    </div>
                </div>
                <div className='bg-[#222938] px-[5.38rem] pt-[2.5rem] rounded-[1.25rem]'>
                    <div className='w-full flex flex-col items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="86" viewBox="0 0 73 86" fill="none">
                            <path d="M72.0585 20.8486V20.4268H72.0234C71.8125 15.2245 68.2974 10.0574 61.4255 6.103C47.3302 -2.03433 24.4824 -2.03433 10.4749 6.103C3.46239 10.1805 -0.017509 15.5233 6.62377e-05 20.8662V31.8859V32.0792V42.9055V43.0989V53.9252V54.1185V65.1382C0.0352167 70.4811 3.58541 75.8239 10.6331 79.8838C17.6983 83.9613 26.9253 86 36.1347 86C45.3617 86 54.5536 83.9613 61.5837 79.8838C68.5962 75.8064 72.0761 70.4635 72.0585 65.1382V54.1185V53.5034V43.0989V42.4486V32.044V31.4289V20.8486C72.0585 20.8662 72.0585 20.8486 72.0585 20.8486ZM17.8038 14.2403L19.7546 13.1155C20.2467 12.8343 21.02 12.8343 21.5297 13.1155L23.9375 14.504C24.4648 14.1876 25.0096 13.8888 25.5369 13.5725L23.1291 12.184C22.637 11.9028 22.637 11.4459 23.1291 11.1647L25.0799 10.0399C25.572 9.75865 26.3629 9.75865 26.855 10.0399L29.9307 11.8149L30.3349 11.6919C33.7797 10.6374 37.4353 10.1629 41.337 10.4441C44.3951 10.6726 47.1368 11.3931 49.6501 12.4477C50.6343 12.8519 51.5482 13.3088 52.3743 13.7834C54.5536 15.0488 56.2232 16.5251 57.5238 18.1948L57.7874 18.6517C58.0862 19.2668 57.7347 19.6887 56.6978 19.9347C55.6081 20.2159 54.5009 20.462 53.3936 20.708C52.6203 20.8662 52.0755 20.831 51.6009 20.5498C51.4779 20.4795 51.3725 20.3917 51.2494 20.3038C50.5113 19.6184 49.8434 18.8802 49.0525 18.2123C48.3495 17.5972 47.5762 17.0172 46.6975 16.5075C45.5375 15.8397 44.2018 15.2773 42.6024 14.8906C40.2122 14.2931 37.8747 14.4337 35.5196 14.9785L35.4317 14.9961L41.3897 18.4408C41.8818 18.722 41.8818 19.179 41.3897 19.4602L39.4389 20.585C38.9468 20.8662 38.1559 20.8662 37.6638 20.585L30.827 16.6481C30.3173 16.9469 29.7725 17.2633 29.2277 17.5796L36.0644 21.5165C36.5565 21.7977 36.5565 22.2546 36.0644 22.5358L34.1136 23.6607C33.6215 23.9419 32.8482 23.9419 32.3385 23.6607L26.0993 20.0577C24.7108 21.745 24.2715 23.4146 25.8357 25.1546C26.5035 25.8927 27.3647 26.543 28.3665 27.123C29.2453 27.6327 30.2119 28.072 31.2488 28.4763C32.4088 28.8981 33.6391 29.2847 34.8342 29.7241C35.0275 29.7944 35.1857 29.8647 35.3263 29.9526C35.8008 30.2338 35.8711 30.5501 35.5899 30.9895C35.1857 31.6574 34.7287 32.3077 34.2366 32.9404C33.8324 33.5204 33.0767 33.7313 31.987 33.5204C30.8973 33.2743 29.8252 32.9755 28.7707 32.6416C26.8374 32.0089 25.0975 31.2707 23.586 30.392C22.0043 29.4781 20.6685 28.4235 19.5964 27.2284C17.0832 24.3812 17.1359 21.4813 19.1922 18.5638C19.5964 17.9839 20.1589 17.4742 20.651 16.9293L17.7335 15.2421C17.3117 14.9785 17.3117 14.5215 17.8038 14.2403ZM10.6331 35.6118C24.746 43.7667 47.5586 43.7667 61.5837 35.6118C63.763 34.3464 65.5732 32.9404 67.0671 31.4641V32.0792C67.0847 35.7348 64.1672 39.5487 59.0704 42.5013C53.0245 46.0163 44.8872 47.9496 36.1347 47.9496C27.3823 47.9496 19.1922 46.0163 13.1112 42.5013C7.96165 39.5311 4.99143 35.6997 4.95628 32.0616V31.341C6.52048 32.8525 8.38345 34.3112 10.6331 35.6118ZM59.088 64.5231C53.0421 68.0381 44.9048 69.9714 36.1523 69.9714C27.3999 69.9714 19.2098 68.0381 13.1288 64.5231C7.97922 61.5529 5.00901 57.7215 4.97386 54.0834V53.5561C6.52048 55.0852 8.36588 56.5263 10.6331 57.8269C17.6983 61.9044 26.9253 63.9431 36.1347 63.9431C45.3617 63.9431 54.5536 61.9044 61.5837 57.8269C63.763 56.5615 65.5732 55.1555 67.0671 53.6791V54.1185C67.1023 57.7742 64.1848 61.5704 59.088 64.5231ZM59.088 53.521C53.0421 57.036 44.9048 58.9693 36.1523 58.9693C27.3999 58.9693 19.2098 57.036 13.1288 53.521C7.97922 50.5508 5.00901 46.7194 4.97386 43.0813V42.554C6.52048 44.0831 8.36588 45.5242 10.6331 46.8248C17.6983 50.9023 26.9253 52.941 36.1347 52.941C45.3617 52.941 54.5536 50.9023 61.5837 46.8248C63.763 45.5594 65.5732 44.1534 67.0671 42.6771V43.1164C67.1023 46.7545 64.1848 50.5508 59.088 53.521ZM59.088 75.5427C53.0421 79.0578 44.9048 80.9911 36.1523 80.9911C27.3999 80.9911 19.2098 79.0578 13.1288 75.5427C7.97922 72.5725 5.00901 68.7411 4.97386 65.1031V64.5758C6.52048 66.1048 8.36588 67.546 10.6331 68.8466C17.6983 72.924 26.9253 74.9628 36.1347 74.9628C45.3617 74.9628 54.5536 72.924 61.5837 68.8466C63.763 67.5812 65.5732 66.1751 67.0671 64.6988V65.1382C67.1023 68.7763 64.1848 72.5901 59.088 75.5427Z" fill="#54BD95" />
                        </svg>
                        <h3 className='text-[1.875rem] text-[#fff]'>Get Started</h3>
                    </div>
                    <form className='flex flex-col gap-[1.25rem]'>
                        <div className='flex flex-col gap-[1.25rem] '>
                            <label htmlFor="Email">
                                <span className='text-[1.125rem] text-[#fff]'>Email</span>
                            </label>
                            <input type="email" name="Email" id='Email' placeholder='Enter your email' className='w-[27.5rem] h-[3.125rem] rounded-[0.625rem] pl-[1.25rem]' />
                        </div>
                        <div className='flex flex-col gap-[1.25rem]'>
                            <label htmlFor="Message">
                                <span className='text-[1.125rem] text-[#fff]'>Message</span>
                            </label>
                            <input type="text" name="Message" placeholder='What are you say ?' className='w-[27.5rem] h-[5rem] rounded-[0.625rem] pl-[1.25rem] pb-[2.69rem]' />
                        </div>
                        <button className='bg-[#54BD95] w-full h-[3.75rem] rounded-[0.625rem] font-semibold text-[#fff]  hover:opacity-70'>Request Demo</button>
                        <p className='text-[0.875rem] text-[#fff] text-right'><span className='text-[#A6A6A6] pr-1'>or</span>Start Free Trial</p>
                    </form>
                </div>
            </div>
            <div className='flex w-full justify-between mb-[3.69rem]'>
                <div className='text-[#A6A6A6] text-[1.125rem] flex flex-col gap-[1.48rem]'>
                    <a href="#">
                        <span className="text-[#54BD95] text-[3.125rem] font-semibold hover:opacity-70">Biccas</span>
                    </a>
                    <p>Get started noew try our product</p>
                    <form className='border-[2px] border-[#A6A6A6] w-[25.625rem] flex items-center pl-[1.25rem] rounded-[4.375rem]'>
                        <input type="email" name="" id="" placeholder='Enter your email here' className='bg-transparent w-full h-[100%] border-none select' />
                        <button className='p-[0.69rem] bg-[#54BD95] rounded-[50%] m-[0.44rem] hover:opacity-70'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></button>
                    </form>
                </div>
                <div className='w-[36.6875rem] flex justify-between'>
                    <ol className='text-[#A6A6A6] text-[1.125rem] flex flex-col gap-[1.25rem]'>
                        <li>
                            <p className='text-[#fff] mb-[0.63rem]'>Support</p>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>Help centre</a>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>Account information</a>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>About</a>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>Contact us</a>
                        </li>
                    </ol>
                    <ol className='text-[#A6A6A6] text-[1.125rem] flex flex-col gap-[1.25rem]'>
                        <li>
                            <p className='text-[#fff] mb-[0.63rem]'>Help and Solution</p>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>Talk to support</a>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>Support docs</a>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>System status</a>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>Covid responde</a>
                        </li>
                    </ol>
                    <ol className='text-[#A6A6A6] text-[1.125rem] flex flex-col gap-[1.25rem]'>
                        <li>
                            <p className='text-[#fff] mb-[0.63rem]'>Product</p>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>Update</a>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>Security</a>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>Beta test</a>
                        </li>
                        <li>
                            <a href='#' className='hover:opacity-70'>Pricing product</a>
                        </li>
                    </ol>
                </div>
            </div>
            <div className='text-[#fff] text-[1.125rem] flex justify-between pb-[2.5rem]'>
                <span>© 2022 Biccas Inc. Copyright and rights reserved</span>
                <p className='flex items-center gap-[0.62rem]'>Terms and Condtions <span><svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#A6A6A6" />
                </svg></span>
                    Privacy Policy</p>
            </div>
        </div>
    )
}

export default FooterSection