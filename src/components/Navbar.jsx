import './Navbar.css';

export default function Navbar() {
  return (
    <header className="nav-header">
      <div>
        <h1 className='logo'>TIMEJUMP</h1>
      </div>
      <div className='nav-links'>
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">Blog</a>
        <a href="#">Request</a>
        <a href="#">About Us</a>
      </div>
    </header>
  )
}
