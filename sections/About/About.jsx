import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import downloadIcon from '/assets/asset 22.svg'
// import './About.css'

const About = () => {
  return (
    <div className="min-h-screen">
          <div>
            <h1 className="span" >About Me</h1>
            <div className="about-header">
              <h1 className="h1" >Biography</h1>
              <div className="separator"></div>
            </div>
          </div>
          <div className="mt-[6em]">
            <>
              <p className="p">
                I&apos;m a Creative Front-end Developer based in Nairobi, Kenya
                <br />
                with love for
                crafting web elements for a global audience.
                {/* crafted web elements that resonate globally. */}
                <br />
                I thrive on collaborating with new individuals, finding inspiration in
                <br />
                diverse perspectives. Let&apos;s embark on a journey of creativity
                <br />
                and bring your digital vision to life!
              </p>
            </>
          </div>

          {/* About Me- Details */}
          <div className="flex items-center">


            <div className="credentials">
              <ul>
                <li>NAME</li>
                <li>Cleve Momanyi</li>
              </ul>
              <ul>
                <li>BIRTHDAY</li>
                <li>1st April 2003</li>
              </ul>
              <ul>
                <li>AGE</li>
                <li>21 years</li>
              </ul>
              <ul>
                <li>ADDRESS</li>
                <li>Nairobi, KENYA</li>
              </ul>
              <ul>
                <li>PHONE</li>
                <li className="underline hover:cursor-pointer">(+254) 700 164 733</li>
              </ul>
              <ul>
                <li>EMAIL</li>
                <li className="underline hover:cursor-pointer" >clevemomanyi@gmail.com</li>
              </ul>
              <ul>
                <li>GITHUB</li>
                <li className="underline">
                  <Link href="https://github.com/cleve-codes/">
                    clevecodes
                  </Link>
                </li>
              </ul>


            </div>

            {/* CV */}
            <div className="cv">
                <Image alt="download" src='/assets/asset 22.svg' width={60} height={60} />
                <p>DOWNLOAD CV</p>
            </div>


          </div>

        </div>
  )
}

export default About