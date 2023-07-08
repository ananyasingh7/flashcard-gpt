import React from 'react';
import FlashcardList from './views/components/FlashcardList';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Flashcard-GPT</h1>
      <FlashcardList />
    </div>
  );
};

export default App;
