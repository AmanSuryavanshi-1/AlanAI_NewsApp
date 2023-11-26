import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import your CSS file for styling
import logo from '../main logo.png';
import homeImage from '../home.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="news" />
      </Link>
      <button className="navbar-toggler" onClick={handleToggleMenu} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg></span>
      </button>
      <div className={`navbar-links ${isMobileMenuOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <Link to="/">
              <img src={homeImage} alt="home" />
              <span className='home'>Home</span> 
            </Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/health">Health</Link>
          </li>
          <li>
            <Link to="/science">Science</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
