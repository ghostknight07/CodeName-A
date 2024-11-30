import './Navbar.css';
import Logo from '../logo/logo.svg'

export default function Navbar() {
  return (
    <header className="nav-header">
      <div>
        <h1 className='logo'><img className='logo-nav' src={Logo} alt={Logo} /></h1>
      </div>
      <div className='nav-links'>
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/blog">Blog</a>
        <a href="/request">Request</a>
        {/* Don't think an about page is needed. */}
        {/* <a href="/about">About Us</a> */}
      </div>
    </header>
  )
}
