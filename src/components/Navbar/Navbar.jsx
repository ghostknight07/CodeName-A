import PropTypes from 'prop-types';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";

export default function Navbar({ seachfunction }) {
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
            <a href="/anime">Anime</a>
            <a href="/Tv Series">Tv Series</a>
          </div>
        </div>
        {/* Dropdown */}
        
        <a href="/blog">Blog</a>
        <a href="/games">Games</a>
        <a href="/request">Request</a>
      </div>
      <div>
        {/* onclick is a prop in react */}
        <button className='nav-search-btn' onClick={seachfunction}><FaSearch /></button>
      </div>
    </header>
  );
}


// prop validation
Navbar.propTypes = {
  seachfunction: PropTypes.func,
};
