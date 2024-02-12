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




export default function Page() {

  const cursorRef = useRef(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      lastMousePosition.current = { x: e.pageX, y: e.pageY };
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.pageY - 10}px`;
        cursorRef.current.style.left = `${e.pageX - 10}px`;
      }
    };

    // const keyMoveCursor = (e) => {
    //   if (cursorRef.current) {
    //     switch (e.key) {
    //       case 'ArrowUp':
    //         window.scrollBy(0, -5);
    //         break;
    //       case 'ArrowDown':
    //         window.scrollBy(0, 5);
    //         break;
    //       case 'ArrowLeft':
    //         window.scrollBy(-5, 0);
    //         break;
    //       case 'ArrowRight':
    //         window.scrollBy(0, 5);
    //         break;
    //       default:
    //         break;
    //     }
    //     cursorRef.current.style.top = `${lastMousePosition.current.y - 10}px`;
    //     cursorRef.current.style.left = `${lastMousePosition.current.x - 10}px`;
    //   }
    // };

    const clickCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("expand");
        setTimeout(() => {
          cursorRef.current.classList.remove("expand");
        }, 500);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    // document.addEventListener('keydown', keyMoveCursor);
    document.addEventListener('click', clickCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    // document.removeEventListener('keydown', keyMoveCursor);
      document.removeEventListener('click', clickCursor);
    };
  }, []);

  return (
    <main className="flex bg-[#1d1b19]">
      {/* Left Section */}
      <div className="border-red">
      <div className="flex px-28 flex-col min-w-[1/2]">
        <div className="min-h-screen  w-full flex flex-row" >
          <Home />
        </div>
        <About />
        <Portofolio />
        <Projects />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
      </div>
      <Footer />

      </div>


      {/* <Separator /> */}
      {/* <SectionsSeparator /> */}

      {/* Right section */}
      <Right />

      {/* Cursor */}
      <div ref={cursorRef} className="cursor"></div>
    </main>
  );
}
