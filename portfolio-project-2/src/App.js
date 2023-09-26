import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import NewGames from './component/NewGames/NewGames';
import AddGames from './component/AddGames/AddGames';
import AnimatedList from "./component/AnimatedList/AnimatedList";
import Contact from "./component/Contact/Contact"; // Import the Contact component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>This is the Home Page</h1>} />
          <Route path="/newgames" element={<NewGames />} />
          <Route path="/addgames" element={<AddGames />} />
          <Route path="/contact" element={<Contact />} /> {/* Add this route for the Contact page */}
        </Routes>
        {/* <AnimatedList /> */}
      </div>
    </Router>
  );
}

export default App;