import React, { useState, useEffect } from "react";
import "./App.css";
import VideoBg from "../src/Assets/VideoBg.mp4";
import Navbar from "./component/Navbar/Navbar";
import NewGames from "./component/NewGames/NewGames";
import AddGames from "./component/AddGames/AddGames";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import AboutContact from "./component/aboutcontacts"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const API_URL = 'https://api.rawg.io/api/games?key=0659341660e24263b4d235b65c1e2ee3';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const listItems = await response.json();
        console.log("API Response:", listItems);
        setItems(listItems.results);
        setLoading(false);
      } catch (err) {
        console.error("API Error:", err);
        setLoading(false);
      }
    };

    fetchItems();

    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleSearch = () => {
    const game = items.find((item) => item.name.toLowerCase() === searchTerm.toLowerCase());
    setSelectedGame(game);
  };

  return (
    <Router>
      <div className="App">
        <div className="overlay"></div>
        <div className="videobg">
          <video
            src={VideoBg}
            autoPlay
            loop
            muted
            className="fullscreen-video"
          />
        </div>
        <Navbar />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a game"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : (
          <>
            {selectedGame && (
              <div className="game-details">
                <h2>{selectedGame.name}</h2>
                <img src={selectedGame.background_image} alt={selectedGame.name} />
              </div>
            )}
            <Routes>
              <Route path="/" element={""} />
              <Route path="/newgames" element={<NewGames />} />
              <Route path="/addgames" element={<AddGames />} />
              <Route path="/aboutcontact" element={<AboutContact />} /> {/* Use the new component here */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
