import React from 'react';
import styles from './service.module.css';

export default function Page() {
  return (
    <div className={`${styles.serviceHeroP} flex flex-col justify-center items-center pb-[50px]`} >
      <section className={`${styles.serviceHero}`} >
        <h1 className={`${styles.serviceHeroH}`}>Services</h1>
        <p>The world is an ever evolving system of technological advancement which warrants all sectors of business, human resource management and more to intergrate to this system. I am here to transform all working domains to digital reality and mobile availability of your working sector.</p>
      </section>
      <section className={`${styles.servicesCon}`}>
        <div>
          <h2>Digital Transformation</h2>
          <p>Transform your existing physical, paper-based, or digital business processes into digital ones. This will help you achieve efficiency, reduce costs, and increase productivity. You will be guided through the process of digital transformation, from conceptualization to implementation, ensuring you have a successful and sustainable digital business.</p>
        </div>
        <div>
          <h2>Mobile Solutions</h2>
          <p>developement fo  mobile applications, websites, and digital portals that are compatible with multiple platforms, such as iOS, Android, and Windows are also implemented. Which ensures that your digital business is accessible and enjoyable to all your customers, regardless of their device or location. It entails of optimizing your mobile applications for better performance and user experience.</p>
        </div>
        <div>
          <h2>Data Integration and Management</h2>
          <p>This is to design and implement data integration solutions that will allow your digital business to seamlessly connect with various data sources, such as databases, APIs, and third-party systems. It also helps you manage and analyze this data to identify trends, patterns, and opportunities for improvement. Your data privacy and security measures to protect your customers' data is guanranteed.</p>
        </div>
        <div>
          <h2>Digital Marketing and Advertising</h2>
          <p>This aspect is to create, manage, and optimize digital marketing campaigns to reach your target audience. it also consist of implementing digital advertising strategies to increase your online visibility and reach your customers. An added benefit of digital marketing efforts to improve your online performance and customer engagement.</p>
        </div>
      </section>
    </div>
  )
}
