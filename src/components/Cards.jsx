// Card.js
import React, { useState } from 'react';
import Details from './Details';
import './Card.css';

const Card = ({ id, heading, content, launchDate, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedHeading, setEditedHeading] = useState(heading);
  const [editedContent, setEditedContent] = useState(content);
  const [editedLaunchDate, setEditedLaunchDate] = useState(launchDate);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDelete = () => {
    // Execute only if not in editing state
    if (!isEditing) {
      onDelete(id);
    }
  };

  const handleEdit = () => {
    if (isEditing) {
      onEdit(id, editedHeading, editedContent, editedLaunchDate);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const openModal = () => {
    // Open modal only if not in editing state
    if (!isEditing) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card">
      <p></p>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedHeading}
            onChange={(e) => setEditedHeading(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <input
            type="date"
            value={editedLaunchDate}
            onChange={(e) => setEditedLaunchDate(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <h2>{editedHeading}</h2>
          <p>{editedContent}</p>
          <p>Launch Date: {editedLaunchDate}</p>
        </div>
      )}
      <button onClick={handleDelete} style={{ zIndex: 1 }}>
        Delete
      </button>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>

      {isModalOpen && (
        <Details
          heading={editedHeading}
          content={editedContent}
          launchDate={editedLaunchDate}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Card;
