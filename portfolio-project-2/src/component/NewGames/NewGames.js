import React, { useState, useEffect } from 'react';
import './newGame.css'; // Make sure to use the correct CSS file

function NewGames() {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const API_URL = 'https://api.rawg.io/api/games?key=0659341660e24263b4d235b65c1e2ee3';

    const fetchGames = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGamesList(data.results.map((game) => ({ ...game, isExpanded: false, randomPrice: getRandomPrice() })));
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchGames();
  }, []); // The empty dependency array ensures that this effect runs once on component mount

  const getRandomPrice = () => {
    return (Math.random() * (100 - 59.99) + 59.99).toFixed(2);
  };

  const handleToggleInfo = (index) => {
    setGamesList((prevGamesList) => {
      const updatedGamesList = [...prevGamesList];
      updatedGamesList[index].isExpanded = !updatedGamesList[index].isExpanded;
      return updatedGamesList;
    });
  };

  return (
    <div>
      <ul className="games-list">
        {gamesList.map((game, index) => (
          <li key={index} className="game-item">
            <img src={game.background_image} alt={game.name} />
            <h3>{game.name}</h3>
            <button onClick={() => handleToggleInfo(index)}>
              {game.isExpanded ? 'Less Info' : 'More Info'}
            </button>
            {game.isExpanded && (
              <div>
                <p>Platforms: {game.platforms.map((platform) => platform.platform.name).join(', ')}</p>
                <p>ESRB Rating: {game.esrb_rating ? game.esrb_rating.name : 'Not available'}</p>
                <p>Price: ${game.randomPrice}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewGames;
