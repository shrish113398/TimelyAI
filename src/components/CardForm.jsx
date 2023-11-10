// CardForm.jsx
import React, { useState } from 'react';

const CardForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [launchDate, setLaunchDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      name,
      description,
      launchDate,
    };
    onSubmit(newCard);
    // Clear the form fields or close the modal, as needed
    setName('');
    setDescription('');
    setLaunchDate('');
  };

  return (
    <div className="card-form">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="square-input" // Add a class for styling
        />
        <label>Launch Date:</label>
        <input
          type="date"
          value={launchDate}
          onChange={(e) => setLaunchDate(e.target.value)}
        />
        <button type="submit">Create Card</button>
      </form>
    </div>
  );
};

export default CardForm;
