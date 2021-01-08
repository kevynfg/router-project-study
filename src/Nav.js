import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Nav() {
  const navStyle = {
    color: 'white',
  };
  return (
    <nav>
      <ul className="nav-links">
        <h4>Logo</h4>
        <Link style={navStyle} to="/todo">
          <li>To-do</li>
        </Link>
        <Link style={navStyle} to="/Continue">
          <li>Em progresso...</li>
        </Link>
        <Link style={navStyle} to="/StarWars">
          <li>Star Wars API</li>
        </Link>
      </ul>
    </nav>
  );
}
