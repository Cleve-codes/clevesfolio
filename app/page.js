'use client'
import Image from "next/image";
import HeroImg from "../public/assets/asset 20.jpeg"
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { buttonVariants } from "@/components/ui/button";
import Signature from "@/components/Signature/Signature";


export default function Home() {
  return (
    <main className="flex px-24 bg-[#1d1b19]">

      {/* Leftt Section */}
      <div className="flex flex-col min-w-[1/2]">
      <div id='home' className="min-h-screen w-full flex flex-row ">
        <div className="flex flex-col min-w-[1/2] mt-[5%]">
          <div className="flex flex-col justify-center mx-[128px] mt-[20%]">

            <h3 className="h3 span">INTRODUCTION</h3>

            {/* <Separator className="h-10 text-white font-white" /> */}

            <div className="mt-[2.5em]">
              <h1 className="h1" >FrontEnd Developer</h1>
              {/* <Separator orientation="horizontal" /> */}
            <div className="separator"></div>

            </div>
            <div className="">
              <p className="p">
                I design and develop for customers of all sizes,
                <br />
                specializing in creating stylish, modern websites,
                <br /> web services
                and online stores.
              </p>
            </div>
            <Signature />
          </div>
        </div>
        </div>

        {/* About Section */}
        <div className="min-h-screen">
          <div>
            <h1 className="text-white" >About</h1>
          </div>
        </div>
        </div>

        {/* <Separator /> */}

      <div aria-hidden="true" className="flex items-center justify-center h-full" >
        <svg className="svgdiv" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
            <path className="pathdiv" d="M250,0 Q250,250 250,500" />
        </svg>
      </div>


      {/* Right section */ }
        <div className="px-24 min-w-[1/2] fixed right-0">
          <div>
            <Navbar />
          </div>
          <div className="detail">
            <div className="imgFrame1">
              <div className="imgFrame2">
                <div className="image">
                <Image className="m-10 rotate-180" src={HeroImg} alt="hero"></Image>
                </div>
                <div className="intro">
                  <p>Hi THERE! I AM</p>
                  <br />
                  <h2>[<span>Web Developer</span>]</h2>
                </div>
              </div>
            </div>

            <div className="text-center ">
              <Link href="#contact" className={buttonVariants({
                variant: 'link',
                className: 'outline-none'
              })}>
                <p className='text-[#dddddd] underline'>
                I&apos;m available for a freelance job. Hire me
                </p>
              </Link>
            </div>
          </div>
        </div>

    </main>
  );
}
