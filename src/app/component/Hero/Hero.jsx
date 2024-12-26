'use client';
import React, { useEffect, useState } from 'react';
import styles from './hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

export default function Hero() {
  return (
    <div className={styles.Parent}>
      <div className={styles.container} >
        <section className={`${styles.heroIntro}`}>
          <h1>Hi I'm Mbahmukong Destiny a Fullstack Web Developer.</h1>
          <p>Seven Advance Academy is the cue of my skills and enhancement in turning ideas into beautiful digital experience.</p>
        </section>
        <section className={styles.heroImage}>
          <div className={`${styles.heroBg}`}></div>
          <div className={`box-borde r w-[500px] ${styles.heroImgP}`}>
            <Image src="/images/intent2.png" alt="hero" width={10000} height={10000} />
          </div>
        </section>
      </div>
      <section className={styles.introduction}>
        <h1 className={`${styles.heroBdHeader}`}>Introducton</h1>
        <section> 
          <p className={`${styles.heroBdText}`}>"Hello! I’m Destiny, a passionate Web Developer based in Bamenda. My skill set is Fullstack web development , combining creativity and technical skills to deliver exceptional results, e.g., web applications, designs, database management and more. Whether you're here to explore my projects or collaborate on something exciting, I’m thrilled to have you. Let’s make something amazing!" </p>
        </section>
      </section>
      <section className={`${styles.expertiesP}`}>
        <h1 className={`${styles.heroBdHeader}`}>Experties</h1>
        <ul className={`${styles.heroBdList}`}>
          <li>
            <h1>JavaScript</h1>
            <p>Experienced in building interactive and dynamic web applications.</p>
          </li>
          <li>
            <h1>React</h1>
            <p>Proficient in building user interfaces and creating reusable components.</p>
          </li>
          <li>
            <h1>Next.js</h1>
            <p>Excellent at building server-rendered applications and improving SEO.</p>
          </li>
          <li>
            <h1>Node.js</h1>
            <p>Experienced in building server-side applications and managing databases.</p>
          </li>
          <li>
            <h1>Python</h1>
            <p>Experienced in building server-side applications and managing databases.</p>
          </li>
          <li>
            <h1>MongoDB</h1>
            <p>Experienced in working with NoSQL databases and managing data.</p>
          </li>
          <li> 
            <h1>Express</h1>
            <p>Experienced in building server-side applications and managing databases.</p>
          </li>
          <li>
            <h1>Tailwind</h1>
            <p>Experienced in using Tailwind CSS for building responsive and visually appealing designs.</p>
          </li>
          <li>
            <h1>Verison control</h1>
            <p>Experienced in using Git for version control and collaborating with team members.</p>
          </li>
          <li>
            <h1>Git</h1>
            <p>Experienced in using Git for version control and collaborating with team members.</p>
          </li>
          <li>
            <h1>Design Patterns</h1>
            <p>Experienced in understanding and implementing design patterns for better code organization and maintainability.</p>
          </li>
          <li>
            <h1>Coding Best Practices</h1>
            <p>Experienced in understanding and implementing coding best practices for writing clean, maintainable, and efficient code.</p>
          </li>
        </ul>
      </section>
      <section className={`${styles.goals}`}>
        <h1 className={`${styles.heroBdHeader}`}>Goals</h1>
        <div className={`${styles.goalsP}`}>
        <div>
          <p>
            I am committed to continuous learning and improvement, and I strive to stay up-to-date with the latest technologies and best practices in the field of web development.
          </p>
        </div>
        <div>
          <p>My goal is to provide valuable and up-to-date resources and guidance to help you build high-quality, responsive, and user-focused web applications.</p>
        </div>
        <div>
          <p>I am eager to work with talented individuals, who share my passion for web development and can help me achieve my goals.</p>
        </div>
        <div>
          <p>I am also open to discussing potential projects and collaborations with potential clients.</p>
        </div>
        </div>
      </section>
      <section className={`${styles.expore}`}>
        <h1 className={`${styles.heroBdHeader}`}>Explore</h1>
        <p className={`${styles.exploreText}`}>For more information about my services, projects, or opportunities, please don't hesitate to reach out to me.</p>
        <div >
           <ul className={`${styles.mediaIcons}`}>
            <li>
              <Link href="https://www.facebook.com/destiny.mbahmukong" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size="32" />
                <h3 className={`${styles.facebook} ${styles.iconTitle}`}>Facebook</h3>
              </Link>
            </li>
            <li>
              <Link href="https://www.tiktok.com/@destiny_mbahmukong" target="_blank" rel="noopener noreferrer">
                <FaTiktok size="32" />
                <h3 className={`${styles.tiktok} ${styles.iconTitle}`}>Tik Tok</h3>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/destiny-mbahmukong-a8a98b1b4/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size="32" />
                <h3 className={`${styles.facebook} ${styles.iconTitle}`}>LinkedIn</h3>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UC9gJ6o436p4yZ3q_h5z6-HA" target="_blank" rel="noopener noreferrer">
                <FiYoutube size="32" />
                <h3 className={`${styles.youtube} ${styles.iconTitle}`}>YouTube</h3>
              </Link>
            </li>
           </ul>
        </div>
      </section>
    </div>
  )
}
