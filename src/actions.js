export const selectFlashcard = (flashcardId) => {
    return {
        type: 'SELECT_FLASHCARD',
        payload: flashcardId,
    };
};

export const addFlashCard = (flashcard) => (dispatch, getState) => {
    const state = getState();
    const flashcards = state.flashcards;
    flashcards.add(flashcard);
    dispatch({
        type: 'ADD_FLASHCARD',
        payload: flashcards,
    });
}