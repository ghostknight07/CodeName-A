import './Navbar.css';

export default function Navbar() {
  return (
    <header className="nav-header">
      <div>
        <h1 className='logo'>TIMEJUMP</h1>
      </div>
      <div className='nav-links'>
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/blog">Blog</a>
        <a href="/request">Request</a>
        <a href="/about">About Us</a>
      </div>
    </header>
  )
}
