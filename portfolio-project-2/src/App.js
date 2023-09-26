import React from 'react';
import './App.css';
import VideoBg from "../src/Assets/VideoBg.mp4"
import Navbar from './component/Navbar/Navbar';
import NewGames from './component/NewGames/NewGames';
import AddGames from './component/AddGames/AddGames';
import About from "./component/About/About"
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
          <Route path="/contact" element={<Contact />} /> {/* Route for the Contact page */}
          <Route path="/about" element={<About />} /> {/* Route for the About page */}
        </Routes>
        {/* <AnimatedList /> */}
      </div>
      <div className='videobg'>
      <video src={VideoBg} autoPlay loop muted/>
      </div>
    </Router>
  );
}

export default App;
