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
  gsap.registerPlugin(ScrollTrigger);

  /* GSAP ANimation to scale down the .image class when the about section is reached  */

  // useGSAP(() => {
  //   const tl = gsap.timeline({ duration: 1 });

  //   tl.fromTo(
  //     ".image",
  //     {
  //       scale: 1,
  //       x: 60,
  //       y: 0,
  //     },
  //     {
  //       scale: 0.8,
  //       x: 80,
  //       y: -100,
  //       scrollTrigger: {
  //         trigger: "#home",
  //         start: "bottom +=1050",
  //         end: "bottom +=850",
  //         scrub: true,
  //       },
  //     }
  //   );


  // }, []);

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

          <div>
            <Image
              className="personal-img"
              // src="/assets/asset 20.jpg"
              width={480}
              height={480}
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
