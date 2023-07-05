import React from 'react';
import { connect } from 'react-redux';
import { addFlashcard } from '../actions';
import '../index.css';

const FlashcardList = ({ flashcards, addFlashcard }) => {
  const handleClick = () => {
    const newFlashcard = {
      question: 'New Question',
      answer: 'New Answer',
    };
    addFlashcard(newFlashcard);
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        Add Flashcard
      </button>
      <div className="flashcard-list">
        {flashcards.map((flashcard) => (
          <div className="flashcard" key={flashcard.index}>
            <p className="flashcard-question">{flashcard.question}</p>
            <p className="flashcard-answer">{flashcard.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    flashcards: state.flashcards,
  };
};

export default connect(mapStateToProps, { addFlashcard })(FlashcardList);