import ServicesCard from '@/components/ui/ServicesCard';
import React from 'react';
import './Services.css';

import { servicesData } from '@/constants/data';


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
