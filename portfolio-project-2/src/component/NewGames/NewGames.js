// NewGames.js
import './newGame.css';
import React, { useState } from 'react';

function NewGames() {
  const [gameName, setGameName] = useState('');
  const [gamesList, setGamesList] = useState([]);

  const handleInputChange = (e) => {
    setGameName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gameName.trim() !== '') {
      // Add the new game to the list
      setGamesList([...gamesList, gameName]);
      // Clear the input field
      setGameName('');
    }
  };

  return (
    <div>
      <h1>This is the New Games Page</h1>
      <h1>New Games</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new game"
          value={gameName}
          onChange={handleInputChange}
        />
        <button type="submit">Add Game</button>
      </form>
      <ul>
        {gamesList.map((game, index) => (
          <li key={index}>{game}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewGames;
