import React, { useState } from 'react';
import './AddGames.css'; 
function AddGames() {
  const [gameData, setGameData] = useState({
    name: '',
    genre: '',
    year: '',
    price: '',
    rating: '',
    exclusive: false, // Use a checkbox for exclusivity
    multiplayer: false, // Use a checkbox for multiplayer
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setGameData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send the data to an API or update state
    console.log('Form data:', gameData);
  };

  return (
    <div>
        <h1>This is the Add Games Page</h1>
      <h2>Add Games Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Game Name:
          <input
            type="text"
            name="name"
            value={gameData.name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={gameData.genre}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Year:
          <input
            type="number"
            name="year"
            value={gameData.year}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={gameData.price}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={gameData.rating}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Exclusive:
          <input
            type="checkbox"
            name="exclusive"
            checked={gameData.exclusive}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Multiplayer:
          <input
            type="checkbox"
            name="multiplayer"
            checked={gameData.multiplayer}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}

export default AddGames;
