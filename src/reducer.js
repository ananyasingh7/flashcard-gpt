// src/reducer.js

const initialState = {
  flashcards: [
    
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
        flashcards: [
          ...state.flashcards,
          { ...action.payload, index: state.flashcards.length +1 } 
        ]
      };
    default:
      return state;
  }
};

export default reducer;
