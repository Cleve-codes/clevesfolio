import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './About.css'

import { credentials } from '@/constants/data'

const About = () => {

  const handleDownloadClick = () => {
    const link = document.createElement('a');

    link.href = './assets/Cleve Momanyi.pdf';
    link.download = 'Cleve_Momanyi_CV.pdf';

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to initiate the download
    link.click();

    // Remove the link from the document to clean up
    document.body.removeChild(link);
  };

  return (
    <div className="about-section" id="about-section">
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
              {
                credentials.map((credential, index) => (
                  <ul key={index}>
                    <li>{credential.title}</li>
                    <li className={credential.href? "underline hover:cursor-pointer" : ""}>
                      {credential.href ? (
                        <Link
                        href={credential.href}
                        className='about-link'
                        target="_blank"
                        >
                          {credential.value}
                        </Link>
                        )
                        : (
                          credential.value
                        )
                      }
                    </li>
                  </ul>
                ))
              }
            </div>

            {/* CV */}
            <div className="cv" onClick={handleDownloadClick} >
                <Image 
                  alt="download" 
                  src='/assets/asset 22.svg' 
                  width={60} 
                  height={60} 
                  style={{ width: 'auto', height: 'auto' }} 
                />
                <p>DOWNLOAD CV</p>
            </div>


          </div>

        </div>
  )
}

export default About