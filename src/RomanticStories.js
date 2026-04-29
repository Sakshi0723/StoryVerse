import React from "react";
import './list.css';
import { Link } from "react-router-dom";

function RomanticStories() {
  return (
    <div className="list-page romantic-bg">
      <h1>Romantic Stories</h1>
      <a href="/Categories"><button className="back-btn"> Back </button></a>
      <ul>
        <li>
          <Link to="/story/the-lovers">The Lovers</Link>
        </li>
        <li>
          <Link to="/story/the-secret-admirer">The Secret Admirer</Link>
        </li>
        <li>
          <Link to="/story/the-romantic-getaway">The Romantic Getaway</Link>
        </li>
        <li>
          <Link to="/story/the-love-letter">The Love Letter</Link>
        </li>
        <li>
          <Link to="/story/the-proposal">The Proposal</Link>
        </li>
        <li>
          <Link to="/story/the-first-date">The First Date</Link>
        </li>
        <li>
          <Link to="/story/the-reunion">The Reunion</Link>
        </li>
        <li>
          <Link to="/story/the-wedding">The Wedding</Link>
        </li>
        <li>
          <Link to="/story/the-anniversary">The Anniversary</Link>
        </li>
        <li>
          <Link to="/story/the-breakup">The Breakup</Link>
        </li>
        <li>
          <Link to="/story/the-make-up">The Make-Up</Link>
        </li>
      </ul>
    </div>
  );
}

export default RomanticStories;