import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import BgAnimation from "./component/BgAnimation/BgAnimation";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome to My Full Stack Web Development Site",
  description: "A place where you can explore great content and order a website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Welcome to My Full Stack Web Development Site</title>
        <meta name="description" content="Welcome to my portfolio! I am a full-stack web developer showcasing my web applications and skills in JavaScript, Node.js, React, Next.js, and more." />
        <meta name="keywords" content="full-stack web developer, JavaScript, React, Node.js, Next.js, web applications, web development portfolio, web development skills" />
        <meta name="author" content="Mbahmukong Destiny" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags (for better social media sharing) */}
        <meta property="og:type" content="website, web application" />
        <meta property="og:title" content="Destiny's Full-Stack Web Development Portfolio" />
        <meta property="og:description" content="Explore my portfolio of web applications and discover my skills in JavaScript, Node.js, React, and more." />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://portfolioemo.vercel.app" />
        <meta property="og:site_name" content="Destiny's Web Development Portfolio" /> 

        {/* Schema.org for Google (structured data) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mbahmukong Destiny",
              "url": "https://portfolioemo.vercel.app",
              "description": "I am a full-stack web developer specializing in JavaScript, React, Node.js, and web development applications.",
            }
          `}
        </script>
        <meta name="google-site-verification" content="9hoog_2YA3jhBSHjhIE0VdmBaRZPsMrirWRT7DOaPHY" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <BgAnimation />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
