import React from 'react';
import './list.css';
import { Link } from 'react-router-dom';
function KidsStories() {
  return (
   <div className="list-page kids-bg">
      <h1>Kids Stories</h1>
      <a href="/Categories"><button className="back-btn"> Back </button></a>
       <ul>
        <li>
          <Link to="/story/lion-and-mouse">The Lion and the Mouse</Link>
        </li>

        <li>
          <Link to="/story/cinderella">Cinderella</Link>
        </li>
        <li>
            <Link to="/story/three-little-pigs">The Three Little Pigs</Link>
        </li>
        <li>
            <Link to="/story/little-red-riding-hood">Little Red Riding Hood</Link>
        </li>
        <li>
            <Link to="/story/goldilocks-and-the-three-bears">Goldilocks and the Three Bears</Link>
        </li>
        <li>
            <Link to="/story/ugly-duckling">The Ugly Duckling</Link>
        </li>
        <li>
            <Link to="/story/sleeping-beauty">Sleeping Beauty</Link>
        </li>
        <li>
            <Link to="/story/rapunzel">Rapunzel</Link>
        </li>
        <li>
            <Link to="/story/hansel-and-gretel">Hansel and Gretel</Link>
        </li>
        <li>
            <Link to="/story/beauty-and-the-beast">Beauty and the Beast</Link>
        </li>
        <li>
            <Link to="/story/the-thirsty-crow">The Thirsty Crow</Link>
        </li>
        <li>
            <Link to="/story/the-tortoise-and-the-hare">The Tortoise and the Hare</Link>
        </li>
        <li>
            <Link to="/story/the-clever-fox">The Clever Fox</Link>
        </li>
      </ul>
    </div>
  );
}

export default KidsStories;