import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import FlashcardList from './FlashcardList';


const initialState = {
  flashcards: [
    {
      id: 1,
      title: 'Flashcard 1',
      description: 'This is the content of Flashcard 1.',
    },
    {
      id: 2,
      title: 'Flashcard 2',
      description: 'This is the content of Flashcard 2.',
    },
    // Add more flashcards as needed
  ],
  selectedFlashcard: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_FLASHCARD':
      return {
        ...state,
        selectedFlashcard: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Flashcard App</h1>
        <FlashcardList />
      </div>
    </Provider>
  );
};

export default App;
