import banifitImg from './images/banifitImg.png'
import banifitImage from './images/banifitImage.png'
const BanifitSection = () => {
    return (
        <div className='max-w-[1220px] mx-auto flex justify-between mb-[9rem]'>
            <div>
                <h2 className='text-[#191A15] text-[3.125rem] font-bold leading-[normal] mb-[3.19rem]'>What Benifit Will <br /> You Get</h2>
                <ol className='flex flex-col gap-[1.87rem]'>
                    <li className='flex items-center gap-[1.25rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                        </svg>
                        <p className='text-[1.125rem]'>Free Consulting With Experet Saving Money</p>
                    </li>
                    <li className='flex items-center gap-[1.25rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                        </svg>
                        <p className='text-[1.125rem]'>Online Banking</p>
                    </li>
                    <li className='flex items-center gap-[1.25rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                        </svg>
                        <p className='text-[1.125rem]'>Investment Report Every Month</p>
                    </li>
                    <li className='flex items-center gap-[1.25rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                        </svg>
                        <p className='text-[1.125rem]'>Saving Money For The Future</p>
                    </li>
                    <li className='flex items-center gap-[1.25rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95" />
                        </svg>
                        <p className='text-[1.125rem]'>Online Transection</p>
                    </li>
                </ol>
            </div>
            <div className='relative'>
                <div className='w-[19rem] h-[5.125rem] bg-[#fff] shadow-lg rounded-[0.625rem] absolute flex justify-between items-center px-[1.25rem] left-[-7.75rem] top-[2.25rem] select-none'>
                    <img src={banifitImage} alt="" />
                    <div>
                        <p className='text-[#191A15] text-[1rem]'>Amanda Young</p>
                        <p className='text-[#A6A6A6] text-[0.75rem]'>Expert Saving Money</p>
                    </div>
                    <div className='w-[2.5rem] h-[2.5rem] bg-[#74C9A9] flex items-center justify-center rounded-[50%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.5 9.58336C17.5029 10.6832 17.2459 11.7683 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6078C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6696 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7683 3.33047 10.6832 3.33333 9.58336C3.33384 8.26815 3.70051 6.97907 4.39227 5.86048C5.08402 4.7419 6.07355 3.838 7.25 3.25002C8.23176 2.75413 9.31678 2.49716 10.4167 2.50002H10.8333C12.5703 2.59585 14.2109 3.32899 15.441 4.55907C16.671 5.78915 17.4042 7.42973 17.5 9.16669V9.58336Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className='absolute flex items-end w-[8.625rem] h-[4.375rem] bg-[#fff] p-[0.75rem] rounded-[0.625rem] top-[7.56rem] right-[-4.88rem] select-none'>
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
                <div className='w-[2.5rem] h-[2.5rem] rounded-[0.625rem] rotate-[-15deg] absolute bg-[#74C9A9] flex items-center justify-center top-[17.185rem] left-[-3.75rem] select-none'>
                    <svg className='rotate-[15deg]' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <g clipPath="url(#clip0_0_173)">
                            <path d="M16.1876 3.74049L4.91847 6.76004C4.02936 6.99828 3.50172 7.91217 3.73996 8.80128L6.75951 20.0704C6.99775 20.9595 7.91165 21.4872 8.80076 21.2489L20.0699 18.2294C20.959 17.9911 21.4866 17.0772 21.2484 16.1881L18.2288 4.919C17.9906 4.02989 17.0767 3.50225 16.1876 3.74049Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.24587 11.6397C9.91271 11.461 10.3084 10.7756 10.1298 10.1087C9.95108 9.4419 9.26566 9.04617 8.59883 9.22485C7.93199 9.40352 7.53626 10.0889 7.71494 10.7558C7.89362 11.4226 8.57904 11.8183 9.24587 11.6397Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20.386 12.9683L15.2829 10.0221L8.8011 21.2489" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_173">
                                <rect width="20" height="20" fill="white" transform="translate(0.24707 5.42358) rotate(-15)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='blur'></div>
                <div className='w-[18.875rem] h-[4.25rem] bg-[#fff] rounded-[0.625rem] shadow-lg flex items-center justify-center gap-[0.94rem] absolute top-[29.69rem] left-[-6.63rem] select-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.83333 11C2.83333 5.9374 6.93739 1.83334 12 1.83334C17.0626 1.83334 21.1667 5.9374 21.1667 11C21.1667 16.0626 17.0626 20.1667 12 20.1667C6.93739 20.1667 2.83333 16.0626 2.83333 11ZM12 0.166672C6.01692 0.166672 1.16667 5.01692 1.16667 11C1.16667 16.9831 6.01692 21.8333 12 21.8333C17.9831 21.8333 22.8333 16.9831 22.8333 11C22.8333 5.01692 17.9831 0.166672 12 0.166672ZM11.9301 14.6944L17.7196 8.69437L16.2804 7.30564L11.1148 12.6591L7.61369 9.93773L6.38631 11.5168L10.5968 14.7896L11.3062 15.341L11.9301 14.6944Z" fill="#2B9B5B" />
                    </svg>
                    <p className='text-[1.125rem]'>Money Transfer Succesfull</p>
                </div>
                <img src={banifitImg} alt="" />
            </div>
        </div>
    )
}

export default BanifitSection