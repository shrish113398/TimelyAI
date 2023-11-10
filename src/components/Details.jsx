// Details.jsx
import React from 'react';

const Details = ({ heading, content, launchDate, onClose }) => {
  return (
    <div className="details-overlay">
      <div className="card-details-modal">
        <div className="card-details">
          <h2>{heading}</h2>
          <p>{content}</p>
          <p>Launch Date: {launchDate}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
