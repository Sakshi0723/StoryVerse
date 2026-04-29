import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Categories from './Categories';
import KidsStories from './KidsStories';
import HorrorStories from './HorrorStories';
import MysteryStories from './MysteryStories';
import RomanticStories from './RomanticStories';
import StoryPage from './StoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="Hero">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>

              <div className="content">
                <h1 id="Name">StoryVerse</h1>
                <h3 id="Tagline">A Universe of Stories ✨</h3>
                <Link to="/Categories">
                  <button className="explore-btn">Explore Stories</button>
                </Link>
              </div>
            </div>
        }
        />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/KidsStories" element={<KidsStories />} />
        <Route path="/HorrorStories" element={<HorrorStories />} />
        <Route path="/MysteryStories" element={<MysteryStories />} />
        <Route path="/RomanticStories" element={<RomanticStories />} />
        <Route path="/story/:id" element={<StoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;