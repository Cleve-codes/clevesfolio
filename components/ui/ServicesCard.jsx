import React from 'react'

const ServicesCard = ({service, description}) => {
  return (
    <div className='experiences-card'>
      <div className='job-title'>
        <h1>{service}</h1>
      </div>
      <div className='job-description'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ServicesCard