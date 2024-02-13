import Signature from '@/components/Signature/Signature'
import React from 'react'
import './Home.css'

const Home = () => {



  return (
    <div id='home' className="">
          <div className="home-section">
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
  )
}

export default Home