import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerNav} flex items-center justify-between gap-[10%]`}>
        <section>
          <h1 className={`text-[20px] font-[500]`}>Contact Us</h1>
          <p> 
            Douala Cameroon<br />
            Phone: (+237) 530-412-55<br />
            Email: <Link href="mailto:fokundem.com@gmail.com">fokundem.com@gmail.com</Link>
          </p>
        </section>
        <ul className={`flex flex-col gap-[10px] font-[400]`}>
          <h1 className={`text-[20px] font-[500]`}>Policies</h1>
          <li><Link href="#">Privacy Policy</Link></li>
          <li><Link href="#">Terms of Service</Link></li>
        </ul>
        <ul className={`flex flex-col gap-[15px]`}>
        <div className='flex justify-center items-center gap-[6px] h-[50px]'>
          <Image className='w-[50px] h-auto' src={'/images/logo.png'} alt='logo' width={500} height={500} />
          <h1 className={`text-[20px] font-[500]`}>Flow Web Service</h1>
        </div> 
          <div className={`${styles.footerItems} grid grid-cols-2 flex-col gap-[15px] font-[400]`}>
            <li>
              <FaFacebookF className='text-[#1b1b8d]' />
              Facebook
            </li>
            <li>
              <FiYoutube className='text-[red]' />
              Youtube
            </li>
            <li>
              <FaLinkedinIn className='text-[#1b1b8d]' />
              Linked In
            </li>
            <li>
              <FaTiktok />
              Tik Tok
            </li>
          </div>
        </ul>
      </div>
      <p className='text-left'>&copy; 2024 flow web service. All rights reserved.</p>
    </footer>
  )
}
