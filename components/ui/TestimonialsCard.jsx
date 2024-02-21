import React from 'react';

const TestimonialsCard = ({text, name, job}) => {
  return (
    <div className='testimonials-card'>
      <div className='testimonials-card-text'>
        <p className='p'>{text}</p>
      </div>
      <div className='testimonial-detail'>
        <h1>{name}</h1>
        <h3 className='p'>{job}</h3>
      </div>
    </div>
  )
}

export default TestimonialsCard