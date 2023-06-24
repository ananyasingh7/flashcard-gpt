import React from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard, isSelected, onClick }) => {
    const handleCardClick = () => {
        onClick(flashcard.id);
    };

    return (
        <div
            className={`flashcard ${isSelected ? 'selected' : ''}`}
            onClick={handleCardClick}
        >
            <div className="flashcard-content">
                <div className="flashcard-front">
                    <h2>{flashcard.title}</h2>
                </div>
                <div className="flashcard-back">
                    <p>{flashcard.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
