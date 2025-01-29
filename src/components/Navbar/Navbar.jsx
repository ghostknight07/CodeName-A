import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className='nav-logo'>
        <a href="/">
          <h1>CodeName A</h1>
        </a>
      </div>
      <div className='nav-links'>
        <a href="/">Home</a>

        {/* Dropdown */}
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            More ▼
          </button>
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <a href="/streaming">Streaming</a>
            <a href="/blog">Blog</a>
            <a href="/games">Games</a>
            <a href="/request">Request</a>
          </div>
        </div>
      </div>
    </header>
  );
}
