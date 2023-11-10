// Main.js
import React, { useState, useEffect } from 'react';
import './Main.css';
import Card from './Cards';
import CardForm from './CardForm';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [cards, setCards] = useState([]);
  const [isFormVisible, setFormVisibility] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    // Load card data from local storage when the component mounts
    const savedCards = JSON.parse(localStorage.getItem('cards'));
    if (savedCards) {
      setCards(savedCards);
    }
  }, []);

  const saveCardsToLocalStorage = (updatedCards) => {
    // Save card data to local storage
    localStorage.setItem('cards', JSON.stringify(updatedCards));
  };

  const addCard = (newCard) => {
    // Assign a unique ID using uuid
    const updatedCard = { ...newCard, id: uuidv4() };
  
    const updatedCards = [...cards, updatedCard];
    setCards(updatedCards);
    saveCardsToLocalStorage(updatedCards);
    setFormVisibility(false); // Close the form after submission
  };

  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
    saveCardsToLocalStorage(updatedCards);

    // Check if the card being deleted is the currently selected card
    if (selectedCardId === id) {
      // If yes, clear the selectedCardId and selectedCard
      setSelectedCardId(null);
      setSelectedCard(null);
    }
  };

  const editCard = (id, editedName, editedDescription, editedLaunchDate) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          name: editedName,
          description: editedDescription,
          launchDate: editedLaunchDate,
        };
      }
      return card;
    });
    setCards(updatedCards);
    saveCardsToLocalStorage(updatedCards);
  };

  const handleCardClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    setSelectedCard(clickedCard);
    setSelectedCardId(id);
  };

  const handleCloseModal = () => {
    setSelectedCardId(null);
    setSelectedCard(null);
  };

  return (
    <div className="main-container">
      <div className="main-background-image"></div>
      {selectedCardId && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal">
              {/* Close button at top-right corner */}
              <button className="close-button-main" onClick={handleCloseModal}>
                Close
              </button>
              {selectedCard && (
                <div>
                  <h2>{selectedCard.name}</h2>
                  <p>{selectedCard.description}</p>
                  <p>Launch Date: {selectedCard.launchDate}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {!selectedCardId && (
        <div className="card-container">
          {cards.map((card) => (
            <div
              key={card.id}
              className="clickable-card-container"
              onClick={() => handleCardClick(card.id)}
            >
              <Card
                id={card.id}
                heading={card.name}
                content={card.description}
                launchDate={card.launchDate}
                onDelete={() => deleteCard(card.id)}
                onEdit={editCard}
              />
            </div>
          ))}
        </div>
      )}
      {!selectedCardId && (
        <button onClick={() => setFormVisibility(true)}>Add Card</button>
      )}
      {isFormVisible && (
        <div className="card-form-overlay">
          <div className="card-form">
            <CardForm onSubmit={addCard} />
            <button onClick={() => setFormVisibility(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
