import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div  className={`${styles.navBarP}`} >
            <section className={`${styles.navBarChild}`}>
                <div>
                    <Image className={`${styles.logoImg}`} src={'/images/logo.png'} alt='logo' width={600} height={600}/>
                    <h1 className={`${styles.logo}`}>
                        Flow Web Service
                    </h1>
                </div>
                <ul>
                    <Link href={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link href={'/service'}>
                        <li>Our Services</li>
                    </Link>
                    <Link href={'/skill'}>
                        <li>Our Skills</li>
                    </Link>
                    <Link href={'/realisation'}>
                        <li>Realisations</li>
                    </Link>
                    <Link href={'/contact'}>
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </section>
        </div >
    )
}
