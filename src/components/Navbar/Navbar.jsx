import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showsDropDown, setshowsDropDown] = useState(false);

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
          <button className="dropbtn" onClick={() => setshowsDropDown(!showsDropDown)}>
            Shows ▼
          </button>
          <div className={`dropdown-content ${showsDropDown ? "show" : ""}`}>
            <a href="/movies">Movies</a>
            <a href="/Tv Series">Tv Series</a>
          </div>
        </div>
        {/* Dropdown */}
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            More ▼
          </button>
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <a href="/blog">Blog</a>
            <a href="/games">Games</a>
            <a href="/request">Request</a>
          </div>
        </div>
      </div>
    </header>
  );
}
