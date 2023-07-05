import React from 'react';
import { useSelector } from 'react-redux';
import FlashcardList from './FlashcardList';
import { addFlashCard } from '../actions';

const App = () => {
  const flashcards = useSelector((state) => state.flashcards);

  const handleButtonClick = () => (dispatch) => {
    dispatch(addFlashCard({
      id: 4,
      title: 'Flashcard 4',
      description: 'This is the content of Flashcard 4.',
    },));
  };

  return (
    <div className="App">
      <h1>Flashcard App</h1>
      <div className="button-container">
        <button className="button" onClick={handleButtonClick}>
          Click Me
        </button>
      </div>
      <FlashcardList flashcards={flashcards}/>
    </div>
  );
};

export default App;
