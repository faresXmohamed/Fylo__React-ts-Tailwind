import logo from '../assets/images/logo.svg'
import location from '../assets/images/icon-location.svg'
import phoneIcon from '../assets/images/icon-phone.svg'
import emailIcon from '../assets/images/icon-email.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-[150px] bg-[#0c1524] text-[14px]">
      <div className="container flex flex-col items-center sm:items-start gap-[20px]">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className='w-[150px]' />
      </Link>
      <div className='grid gap-[40px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-start'>
        <div className='location flex items-center gap-[10px]'>
          <img src={location} alt="location:" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className='phone-gmail flex flex-col gap-[10px] justify-center items-center '>
          <div className='phone flex items-start gap-[10px]'>
            <img src={phoneIcon} alt="phone:" />
            <p className='hover:text-[var(--colorText2)] cursor-pointer'>+201212121212</p>
          </div>
          <div className='email flex items-start gap-[10px]'>
            <img src={emailIcon} alt="email:" />
            <p className='hover:text-[var(--colorText2)] cursor-pointer'>example@fylo.com</p>
          </div>
        </div>
        <div className='about-contact flex gap-[25px] justify-center sm:justify-start '>
            <div className='about flex flex-col gap-[5px] justify-start'>
              <p className='hover:text-[var(--colorText2)] cursor-pointer'>About Us</p>
              <p className='hover:text-[var(--colorText2)] cursor-pointer'>Jobs</p>
              <p className='hover:text-[var(--colorText2)] cursor-pointer'>Press</p>
              <p className='hover:text-[var(--colorText2)] cursor-pointer'>Blog</p>
            </div>
            <div className='contact flex flex-col gap-[5px] justify-start'>
              <p className='hover:text-[var(--colorText2)] cursor-pointer'>Contact Us</p>
              <p className='hover:text-[var(--colorText2)] cursor-pointer'>Terms</p>
              <p className='hover:text-[var(--colorText2)] cursor-pointer'>Privacy</p>
            </div>
        </div>
        <div className='flex gap-[12px] items-start justify-center'>
          <a className='text-[#ffff] [font-size:22px] p-[8px] border border-[#ffff] rounded-full' href="*"><FaFacebookF /></a>
          <a className='text-[#ffff] [font-size:22px] p-[8px] border border-[#ffff] rounded-full' href="*"><FaTwitter /></a>
          <a className='text-[#ffff] [font-size:22px] p-[8px] border border-[#ffff] rounded-full' href="*"><FaInstagram /></a>
        </div>

      </div>
      </div>
    </footer>
  )
}

export default Footer