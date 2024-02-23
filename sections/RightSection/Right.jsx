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
import { useRef } from "react";
import { forwardRef } from "react";

import personalImg from "@/public/assets/asset 20.jpg";

const words = [
  "Cleve Momanyi",
  "Web Developer",
  "UI/UX Designer",
  "Freelancer",
];

const Right = forwardRef(function(props,ref){
  const [windowWidth, setWindowWidth] = useState(0);
  const introTextRef = useRef(null);

  useEffect(() => {
    const tlText = gsap.timeline({ repeat: -1 });

    words.forEach((word, index) => {
      tlText.to({}, {
        duration: 1,
        onStart: () => {
          if (introTextRef.current) {
            introTextRef.current.innerText = word;
          }
        },
      });
      if (index < words.length - 1) {
        tlText.to({}, { duration: 1 }); // Add a pause between words if needed
      }
    });

    // Ensure the ref is updated after the component has rendered
    introTextRef.current = document.getElementById('animated-text');

  }, []);

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

  /* GSAP ANimation to scale down the .image class when the about section is reached  */

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

      /* Typewriter animation to hs in .intro */

      gsap.to(".brace", {
        opacity: 0,
        repeat: -1,
        yoyo: "true",
        duration: 1,
        ease: "power2.inOut",
      });

      const tlMaster = gsap.timeline({ repeat: -1 });

      words.forEach((word) => {
        let tlText = gsap.timeline({ repeat: 1, yoyo: true });
        tlText.to("#animated-text", { duration: 1, text: word });
        tlMaster.add(tlText);
      });
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
              // src="/assets/asset 20.jpg"
              src={mask}
              alt="hero"
            ></Image>
          </div>

          <div className="right-image">
            <Image
              className="personal-img"
              src={personalImg}
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
            <div className="flex justify-between gap-[2em]">
              <div className="brace">[ </div>
              <h2 id="animated-text" className="brace" ref={introTextRef}>
                {" "}
                Web Developer{" "}
              </h2>
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

Right.displayName = "Right"

// export default Right;
export default dynamic(() => Promise.resolve(Right), {
  ssr: false,
});
