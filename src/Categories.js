import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

function Categories() {
  return (
   <div className="categories-page">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <h1 className="heading">Explore Story Categories ✨</h1>

      <div className="categories-container">
        <Link to="/KidsStories" className="card-kids">
         <div className="card-kids"> <h4 className="card-title">Kids Stories</h4></div>
        </Link>
        <Link to="/HorrorStories" className="card-horror">
          <div className="card-horror">
            <h4 className="card-title">Horror Stories</h4>
          </div>
        </Link>
        <Link to="/MysteryStories" className="card-mystery">
          <div className="card-mystery">
            <h4 className="card-title">Mystery Stories</h4>
          </div>
        </Link>
        <Link to="/RomanticStories" className="card-romantic">
          <div className="card-romantic">
            <h4 className="card-title">Romantic Stories</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;