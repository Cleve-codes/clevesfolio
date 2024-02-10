import ServicesCard from '@/components/ui/ServicesCard';
import React from 'react'

const services = [
  'Web Development',
  'UI/UX Design',
  'SEO/Digital Marketing'
]

const serviceDescription = [
  'Sculpting immersive FrontEnd experiences with a palette of cutting-edge technologies, bringing your digital dreams to life.',

  'Infusing passion into pixels, I design UI/UX that dances between aesthetics and intuition, turning concepts into visual masterpieces.',

  'Ignite your online presence! With SEO and Digital Marketing wizardry, I craft strategies that propel you into the spotlight, ensuring your story captivates the digital realm.'
];

const Services = () => {
  return (
      <div className='services-section'>
        <div >
            <h1 className="span" >Services</h1>
            <div className="about-header">
              <h1 className="h1" >What I Offer</h1>
              <div className="separator"></div>
            </div>
          </div>
          <div className='services-text' >
            <p className='p' >
            I help ambitious businesses like yours generate more profits
            <br />
            by building awareness, driving web traffic, connecting with
            <br />
            customers and growing overall sales.
            </p>
          </div>
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='services-cards' >
              <ServicesCard service={services[index]} description={serviceDescription[index]} />
              </div>
            ))}
          </div>
      </div>
  )
}

export default Services