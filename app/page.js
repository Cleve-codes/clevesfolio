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


// import { useEffect, useRef } from 'react';
export default function Page() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  /* GSAP Animation to make the left section scale up and the right section scale down when the About section
  comes into view */


  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: "top +=1000",
        end: "bottom top",
        scrub: true,
        markers: true,
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo('#left-section', { scale: 1 }, { scale: 1.2, duration: 1 })
    .fromTo('#left-section *', { scale: 1 }, { scale: 1 });

  }, [])


  return (
    <main className="flex bg-[#1d1b19]">
      <div className="border-red" id="left-section"  >
        <div className="flex px-28 flex-col min-w-[1/2]" >
          <div className="min-h-screen w-full flex flex-row">
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
    </main>
  );
}