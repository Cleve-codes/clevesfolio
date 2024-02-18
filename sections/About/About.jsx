import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import downloadIcon from '/assets/asset 22.svg'
import './About.css'

const About = () => {
  return (
    <div className="about-section">
          <div>
            <h1 className="about-span" >ABOUT ME</h1>
            <div className="about-header">
              <h1 className="h1" >Biography</h1>
              <div className="separator"></div>
            </div>
          </div>
          <div className="about-text">
            <>
              <p className="p">
                I&apos;m a Creative Front-end Developer based in Nairobi, Kenya with love for
                crafting web elements for a global audience.
                I thrive on collaborating with new individuals, finding inspiration in
                diverse perspectives. Let&apos;s embark on a journey of creativity
                and bring your digital vision to life!
              </p>
            </>
          </div>

          {/* About Me- Details */}
          <div className="about-details">


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
                <li className="underline hover:cursor-pointer">
                  <Link
                  className='about-link'
                  href="tel:+254700164733"
                  target="_blank"
                   >
                  (+254) 700 164 733
                  </Link>
                  </li>
              </ul>
              <ul>
                <li>EMAIL</li>
                <li className="underline hover:cursor-pointer" >
                  <Link
                  href="mailto:clevemomanyi@gmail.com?subject=Collaboration%20Opportunity!"
                  className='about-link'
                  target="_blank"
                   >
                  clevemomanyi@gmail.com
                </Link>
                </li>
              </ul>
              <ul>
                <li>GITHUB</li>
                <li className="underline">
                  <Link
                    href="https://github.com/cleve-codes/"
                    className='about-link'
                    target="_blank"
                     >
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