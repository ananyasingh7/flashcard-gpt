export const selectFlashcard = (flashcardId) => {
    return {
        type: 'SELECT_FLASHCARD',
        payload: flashcardId,
    };
};