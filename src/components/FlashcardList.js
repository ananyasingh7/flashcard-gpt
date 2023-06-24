import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Flashcard from './Flashcard';
import { selectFlashcard } from '../actions';

const FlashcardList = () => {
  const flashcards = useSelector((state) => state.flashcards);
  const selectedFlashcard = useSelector((state) => state.selectedFlashcard);
  const dispatch = useDispatch();

  const handleFlashcardClick = (flashcardId) => {
    dispatch(selectFlashcard(flashcardId));
  };

  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          flashcard={flashcard}
          isSelected={selectedFlashcard === flashcard.id}
          onClick={handleFlashcardClick}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
