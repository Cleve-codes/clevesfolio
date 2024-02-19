import Signature from '@/components/Signature/Signature'
import React from 'react'
import './Home.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Home = () => {

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.fromTo("#home, #home-title, #signature", { y: +50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.5})
    .fromTo("#home-text", { opacity: 0 }, { opacity: 1, duration: 1}, "-=0.2")

  }, [])


  return (
    <div id='home' className="">
          <div className="home-section">
            <div className="home-container">

              <h3 className="h3 span">INTRODUCTION</h3>

              {/* <Separator className="h-10 text-white font-white" /> */}

              <div className="mt-[2.5em]" id="home-title" >
                <h1 className="h1" >FrontEnd Developer</h1>
                {/* <Separator orientation="horizontal" /> */}
                <div className="separator"></div>

              </div>
              <div id="home-text">
                <p className="p">
                  I design and develop for customers of all sizes,
                  <br />
                  specializing in creating stylish, modern websites,
                  <br /> web services
                  and online stores.
                </p>
              </div>
              <Signature id="signature" />
            </div>
          </div>
        </div>
  )
}

export default Home