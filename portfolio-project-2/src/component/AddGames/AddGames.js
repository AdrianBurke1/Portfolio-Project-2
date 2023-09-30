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

  const [cart, setCart] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setGameData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., add the game data to the cart
    setCart([...cart, gameData]);
    // Clear the form after adding to the cart
    setGameData({
      name: '',
      genre: '',
      year: '',
      price: '',
      rating: '',
      exclusive: false,
      multiplayer: false,
    });
  };

  return (
    <div>
      <h1>This is the Shopping Cart</h1>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <h2>Add Games to Cart</h2>
      <form onSubmit={handleSubmit}>
        {/* ... (Input fields for game data) */}
        <button type="submit">Add Game to Cart</button>
      </form>
      
      <h2>Shopping Cart</h2>
      <ul className="cart-list">
        {cart.map((game, index) => (
          <li key={index}>
            <h3>{game.name}</h3>
            <p>Genre: {game.genre}</p>
            <p>Price: ${game.price}</p>
            {/* Add more game information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddGames;
