import React from 'react';

const ExperiencesCard = ({ company, date, jobTitle, description }) => {
  return (
    <div className='experiences-card'>
      <header>
        <h3 className='experiences-card-h3'>
          {company} <span className='date'>({date})</span>
        </h3>
      </header>
      <div className='job-title'>
        <h1>{jobTitle}</h1>
      </div>
      <div className='job-description'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperiencesCard;
