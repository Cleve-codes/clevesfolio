import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ViewMoreCard = ({ url }) => {
  return (
    <div className="view-more-card">
      <div className="view-more-content">
        <FaGithub className="github-icon" />
        <h2 className="view-more-title">View More Projects</h2>
        <p className="view-more-text">Check out my GitHub repository</p>
      </div>
    </div>
  );
};

export default ViewMoreCard; 