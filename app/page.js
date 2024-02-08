'use client'
import Image from "next/image";
// import { Button } from "../components/ui/button"
import Asset1 from '../public/assets/asset 1.jpeg'
import { Separator } from "@radix-ui/react-separator";
import HeroImg from "../public/assets/asset 20.jpeg"
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { buttonVariants } from "@/components/ui/button";
import Signature from "@/components/Signature/Signature";



// import { cn } from "@/lib/utils";
// public/assets/asset 1.jpeg

export default function Home() {
  return (
    <main className="px-24 bg-[#1d1b19]">
      <div id='home' className="min-h-screen w-full flex flex-row">
        <div className="flex flex-col mt-[15%] min-w-[1/2]">
          <div className="flex flex-col justify-center mx-[128px]">

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
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
            <Signature />
          </div>
        </div>

        {/* <Separator /> */}

      <div aria-hidden="true">
        <svg className="svgdiv" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
            <path className="pathdiv" d="M250,0 Q250,250 250,500" />
        </svg>
      </div>


        <div className="px-24 min-w-[1/2]">
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
        </div>

    </main>
  );
}
