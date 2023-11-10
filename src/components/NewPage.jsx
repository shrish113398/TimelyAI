// NewPage.jsx
import React from 'react';

const NewPage = ({ card }) => {
  return (
    <div>
      <h2>{card.name}</h2>
      <p>{card.description}</p>
      <p>Launch Date: {card.launchDate}</p>
      {/* Add other card details as needed */}
    </div>
  );
};

export default NewPage;
