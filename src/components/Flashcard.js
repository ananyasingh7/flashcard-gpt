import React from 'react';
import { connect } from 'react-redux';

const Flashcard = ({ flashcards }) => {
    return (
        <div className="flashcard-list">
            {flashcards.map((flashcard) => (
                <div className="flashcard" key={flashcard.index}>
                    <p>{flashcard.question}</p>
                    <p>{flashcard.answer}</p>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        flashcards: state.flashcards,
    };
};

export default connect(mapStateToProps)(Flashcard);
