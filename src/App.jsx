import ModalVideo from "react-modal-video"
import BanifitSection from "./components/banifitSection"
import FooterSection from "./components/footerSection"
import HeaderSection from "./components/headerSection"
import Hero from "./components/hero"
import descript from './components/images/descript.png'
import gramarly from './components/images/gramarly.png'
import intercom from './components/images/intercom.png'
import nation from './components/images/nation.png'
import unsplash from './components/images/unsplash.png'
import MainSection from "./components/mainSection"
import PaymentSection from "./components/paymentSection"
import { useState } from "react"

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <ModalVideo channel='vimeo' autoplay isOpen={isOpen} videoId="366560857" onClose={() => setOpen(!isOpen)} />
      <div className="max-w-[1220px] mx-auto">
        <div className="flex justify-between items-center mb-[8.12rem]">
          <a href="#">
            <span className="text-[#54BD95] text-[3.125rem] font-semibold hover:opacity-70">Biccas</span>
          </a>
          <nav>
            <ol className="flex gap-[2.5rem] text-[1rem] font-medium text-[#A6A6A6]">
              <li>
                <a href="#" className="active:text-[1.125rem] active:text-[#000] hover:text-[#656565] transition-all">Home</a>
              </li>
              <li>
                <a href="#" className="active:text-[1.125rem] active:text-[#000] hover:text-[#656565] transition-all">Product</a>
              </li>
              <li>
                <a href="#" className="active:text-[1.125rem] active:text-[#000] hover:text-[#656565] transition-all">FAQ</a>
              </li>
              <li>
                <a href="#" className="active:text-[1.125rem] active:text-[#000] hover:text-[#656565] transition-all">Blog</a>
              </li>
              <li>
                <a href="#" className="active:text-[1.125rem] active:text-[#000] hover:text-[#656565] transition-all">About Us</a>
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-[1.25rem]">
            <button className="text-[#A6A6A6] hover:opacity-70">Login</button>
            <button className="bg-[#54BD95] text-[#F8F8FA] rounded-[0.625rem] w-[5rem] h-[2.5rem] hover:opacity-70">Sign Up</button>
          </div>
        </div>
        <Hero setOpen={setOpen} isOpen={isOpen} />
        <div className="mb-[8.19rem]">
          <h2 className="text-[#191A15] text-[2.5rem] font-bold text-center mb-[3.81rem]">More than 25,000 teams use Collabs</h2>
          <div className="flex justify-center gap-[3.12rem]">
            <a href="#"><img src={unsplash} alt="logo" className="hover:opacity-70" /></a>
            <a href="#"><img src={nation} alt="logo"   className="hover:opacity-70" /></a>
            <a href="#"><img src={intercom} alt="logo" className="hover:opacity-70" /></a>
            <a href="#"><img src={descript} alt="logo" className="hover:opacity-70" /></a>
            <a href="#"><img src={gramarly} alt="logo" className="hover:opacity-70" /></a>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F9F8FE] mb-[9rem]">
        <HeaderSection />
      </div>
      <MainSection />
      <BanifitSection />
      <PaymentSection />
      <div className="w-full bg-[#161C28]">
        <FooterSection setOpen={setOpen} isOpen={isOpen} />
      </div>
    </div>
  )
}

export default App