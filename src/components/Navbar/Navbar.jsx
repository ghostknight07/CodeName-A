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
        <a href="/streaming">Streaming</a>
        <a href="/blog">Blog</a>
        <a href="/games">Games</a>
        <a href="/request">Request</a>
        {/* Don't think an about page is needed. */}
        {/* <a href="/about">About Us</a> */}
      </div>
    </header>
  )
}
