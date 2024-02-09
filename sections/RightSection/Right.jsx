import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";



const Right = () => {
  return (
    <div className="px-24 min-w-[1/2] fixed right-0">
        <div>
          <Navbar />
        </div>
        <div className="detail">
          <div className="imgFrame1">
            <div className="imgFrame2">
              <div className="image">
                <Image className="m-10 rotate-180" src='/assets/asset 20.jpeg' width={487} height={487} alt="hero"></Image>
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
  )
}

export default Right