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
import { forwardRef } from "react";

import personalImg from "@/public/assets/asset 20.jpg";

import { TypeAnimation } from 'react-type-animation';

const words = [
  "Cleve Momanyi",
  1000,
  "Web Developer",
  1000,
  "UI/UX Designer",
  1000,
  "Freelancer",
  1000,
];

const Right = forwardRef(function (props, ref) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [windowWidth]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (windowWidth > 1039) {
      const tl = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "top bottom-=200",
          scrub: true,
        },
      });

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
        <Navbar ref={ref} />
      </div>
      <div className="detail">
        <div className="image">
          <div>
            <Image
              className="hero-img"
              src={mask}
              alt="hero"
            ></Image>
          </div>

          <div className="right-image">
            <Image
              className="personal-img"
              src={personalImg}
              fill
              priority
              alt="hero"
            />
          </div>

          <div className="intro">
            <div className="greet">
                <p>Hi THERE! I AM</p>
            </div>
            <div className="flex justify-between gap-[2em]">
              <div className="brace">[ </div>
              <div
              style={{width: '200px'}}
              >

                <TypeAnimation
                sequence={words}
                wrapper="h2"
                style={{ marginInline: "0.5em", paddingTop: ".8em"}}
                speed={-10}
                repeat={Infinity}
                className="animated-text"
                />

                </div>
              <div className="brace"> ]</div>
            </div>
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
                <span className="blinker" />
                I&apos;m available for a freelance job. Hire me
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

Right.displayName = "Right";

export default dynamic(() => Promise.resolve(Right), {
  ssr: false,
});
