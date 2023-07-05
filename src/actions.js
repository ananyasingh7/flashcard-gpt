export const selectFlashcard = (flashcardId) => {
    return {
        type: 'SELECT_FLASHCARD',
        payload: flashcardId,
    };
};

export const addFlashcard = (flashcard) => {
    return {
        type: 'ADD_FLASHCARD',
        payload: flashcard,
    };
};
