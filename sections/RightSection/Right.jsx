import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import mask from "@/public/assets/mask.svg";
import { useEffect, useState } from "react";

import "./Right.css";

const Right = () => {

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
  }, [windowWidth])

  gsap.registerPlugin(ScrollTrigger);

  /* GSAP ANimation to scale down the .image class when the about section is reached  */

  useGSAP(() => {
    if (windowWidth > 1039) {
    const tl = gsap.timeline({ duration: 1, scrollTrigger: {
      trigger: "#about",
      start: "top bottom",
      end: "top bottom-=300",
      scrub: true,
    }});

    tl.fromTo(
      ".image",
      {
        scale: 1,
        x: 0,
        y: 0,
      },
      {
        scale: 0.8,
        x: 100,
        y: -50,
      }
    );


  }
}, [windowWidth]);

  return (
    <div className="right-section">
      <div>
        <Navbar />
      </div>
      <div className="detail">
        <div className="image">
          <div>
            <Image
              className="hero-img"
              // src="/assets/asset 20.jpg"
              src={mask}
              alt="hero"
            ></Image>
          </div>

          <div className="right-image" >
            <Image
              className="personal-img"
              src="/assets/asset 20.jpg"
              // width={480}
              // height={480}
              fill
              priority
              alt="hero"
            />
          </div>

          <div className="intro">
            <p>Hi THERE! I AM</p>
            {/* <br /> */}
            <h2>
              [<span>Web Developer</span>]
            </h2>
          </div>

          <div className="text-center" id="to-contact">
            <Link
              href="#contact"
              className={buttonVariants({
                variant: "link",
                className: "outline-none",
              })}
            >
              <p className="text">
                I&apos;m available for a freelance job. Hire me
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Right;
export default dynamic(() => Promise.resolve(Right), {
  ssr: false,
});
