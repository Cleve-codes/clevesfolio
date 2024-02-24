import ServicesCard from '@/components/ui/ServicesCard';
import React from 'react';
import './Services.css';

const servicesData = [
  {
    service: 'Web Development',
    description: 'Sculpting immersive FrontEnd experiences with a palette of cutting-edge technologies, bringing your digital dreams to life.',
  },
  {
    service: 'UI/UX Design',
    description: 'Infusing passion into pixels, I design UI/UX that dances between aesthetics and intuition, turning concepts into visual masterpieces.',
  },
  {
    service: 'SEO/Digital Marketing',
    description: 'Ignite your online presence! With SEO and Digital Marketing wizardry, I craft strategies that propel you into the spotlight, ensuring your story captivates the digital realm.',
  },
];

const Services = () => {
  return (
    <div className="services-section" id="services" >
      <div>
        <h1 className="services-span">SERVICES</h1>
        <div className="services-header">
          <h1 className="h1">What I Offer</h1>
          <div className="separator"></div>
        </div>
      </div>
      <div className="services-text">
        <p className="p">
          I help ambitious businesses like yours generate more profits
          by building awareness, driving web traffic, connecting with customers
          and growing overall sales.
        </p>
      </div>
      <div>
        {servicesData.map((service, index) => (
          <div key={index} className="services-cards">
            <ServicesCard service={service.service} description={service.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
