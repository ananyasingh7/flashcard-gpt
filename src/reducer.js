// src/reducer.js

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
    {
      id: 3,
      title: 'Flashcard 3',
      description: 'This is the content of Flashcard 3.',
    },
    // Add more flashcards as needed
  ],
  selectedFlashcard: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_FLASHCARD':
      return {
        ...state,
        selectedFlashcard: action.payload,
      };
    case 'ADD_FLASHCARD':
      return {
        ...state,
        flashcards: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
