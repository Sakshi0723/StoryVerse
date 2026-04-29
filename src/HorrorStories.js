import React from "react";
import './list.css';
import { Link } from "react-router-dom";


function HorrorStories() {
  return (
   <div className="list-page horror-bg">
      <h1>Horror Stories</h1>
      <a href="/Categories"><button className="back-btn"> Back </button></a>
      <ul>
        <li>
          <Link to="/story/someone-outside">Someone's Outside</Link>
        </li>
        <li>
          <Link to="/story/the-lighthouse">The Lighthouse</Link>
        </li>
        <li>
          <Link to="/story/Nightmare">Nightmare On a Plane</Link>
        </li>
        <li>
          <Link to="/story/the-haunted-house">The Haunted House</Link>
        </li>
        <li>
          <Link to="/story/the-ghostly-figure">The Ghostly Figure</Link>
        </li>
        <li>
          <Link to="/story/the-creepy-doll">The Creepy Doll</Link>
        </li>
        <li>
          <Link to="/story/the-abandoned-hospital">The Abandoned Hospital</Link>  
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

export default HorrorStories;