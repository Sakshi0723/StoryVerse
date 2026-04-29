import React from "react";
import './list.css';
import { Link } from "react-router-dom";

function MysteryStories() {
  return (
    <div className="list-page mystery-bg">
      <h1>Mystery Stories</h1>
       <a href="/Categories"><button className="back-btn"> Back </button></a>
      <ul>
        <li>
          <Link to="/story/the-missing-painting">The Missing Painting</Link>
        </li>
        <li>
          <Link to="/story/the-secret-room">The Secret Room</Link>
        </li>
        <li>
          <Link to="/story/the-disappearing-act">The Disappearing Act</Link>
        </li>
        <li>
          <Link to="/story/the-mysterious-stranger">The Mysterious Stranger</Link>
        </li>
        <li>
          <Link to="/story/the-locked-box">The Locked Box</Link>
        </li>
        <li>
          <Link to="/story/the-vanishing">The Vanishing</Link>
        </li>
        <li>
          <Link to="/story/the-shadowy-figure">The Shadowy Figure</Link>
        </li>
        <li>
          <Link to="/story/the-cursed-object">The Cursed Object</Link>
        </li>
        <li>
          <Link to="/story/the-possessed-house">The Possessed House</Link>
        </li>
         <li>
          <Link to="/story/the-phantom">The Phantom</Link>  
        </li>
         <li>
          <Link to="/story/the-vanishing">The Vanishing</Link>
        </li>
      </ul>
    </div>
  );
}

export default MysteryStories;