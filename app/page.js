'use client'
import Home from "@/sections/Home/Home";
import About from "@/sections/About/About";
import Right from "@/sections/RightSection/Right";
import SectionsSeparator from "@/components/SectionsSeparator/SectionsSeparator";
import Portofolio from "@/sections/Portofolio/Portofolio";
import Projects from "@/sections/Projects/Projects";
import Services from "@/sections/Services/Services";
import { Testimonials } from "@/sections/Testimonials/Testimonials";
import Blog from "@/sections/Blog/Blog";
import Contact from "@/sections/Contact/Contact";
import { useEffect, useRef } from 'react';
import Footer from "@/sections/Footer/Footer";
// import Footer from "@/components/Footer/Footer";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'
import { Scale } from "lucide-react";
import { useState } from "react";


// import { useEffect, useRef } from 'react';
export default function Page() {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [])

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  /* GSAP Animation to make the left section scale up and the right section scale down when the About section
  comes into view */


  // useGSAP(() => {
  //   if (windowWidth > 1459) {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '#home',
  //         start: "bottom +=1050",
  //         end: "bottom +=850",
  //         scrub: true,
  //         // markers: true,
  //         toggleActions: "play none none reverse"
  //       }
  //     });

  //     tl.to('#left-section',{ width: '68%', duration: 1 })
  //     // .fromTo('#left-section *', { scale: 1 }, { scale: 1.2, duration: 1 }, 0)
  //   }
  // }, [windowWidth])


  return (
    <main className="main-page">
      <div className="border-red" id="left-section"  >
        <div>
          <div className="" id="home" >
            <Home />
          </div>
          <div id="about" >
            <About />
          </div>
          <div>
            <Portofolio />
            <Projects />
            <Services />
            <Testimonials />
            <Blog />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>

      <Right />

      {/* <div className="cursor" ></div> */}
    </main>
  );
}