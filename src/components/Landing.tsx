import { Link } from 'react-router-dom'
import {useEffect , useRef} from "react";
import landingImg from '../assets/images/illustration-intro.png'
import curvyDesktop from "../assets/images/bg-curvy-desktop.svg"


const Landing = () => {
  const landingRef=useRef<HTMLImageElement | null>(null);
  return (
    <section className="pt-[120px] flex-center flex-col bg-[#1c2230]">
        <div>
            <img className='mx-auto max-w-[70%]' src={landingImg} alt="Landing" />
        </div>
        <div className='text-center w-[100%] sm:w-[70%] md:w-[80%] lg:w-[60%] mx-auto pb-[20px]'>
            <h1 className='font-bold text-[16px] pb-[20px] sm:text-[24px] md:text-[28px] lg:text-[35px]'>All your files in one secure place,<br/>accessible anywhere</h1>
            <p className='text-[10px] sm:text-[14px] md:text-[14px] lg:text-[18px] px-[50px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id officiis quo corrupti sapiente dolore libero blanditiis, rem earum obcaecati.</p>
        </div>
        <Link to="/" className="btn p-[10px] sm:p-[15px] rounded-[30px] text-[12px] sm:text-[16px] w-[90px] sm:w-[200px] flex-center font-bold">Get Started</Link>
        <div className='w-[100%]'>
            <img  src={curvyDesktop} className='w-full h-[80px] sm:h-[200px]' />
        </div>
    </section>
  )
}

export default Landing