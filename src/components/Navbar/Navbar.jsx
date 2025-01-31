import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="nav-header">
      <div className='nav-logo'>
        <a href="/">
          <h1>CodeName A</h1>
        </a>
      </div>
      <div className='nav-links'>
        <a href="/">Home</a>

        
        <div className="dropdown">
          <button className="dropbtn">
            Shows ▼
          </button>
          <div className={`dropdown-content`}>
            <a href="/movies">Movies</a>
            <a href="/Tv Series">Tv Series</a>
          </div>
        </div>
        {/* Dropdown */}
        
        <a href="/blog">Blog</a>
        <a href="/games">Games</a>
        <a href="/request">Request</a>
      </div>
    </header>
  );
}
