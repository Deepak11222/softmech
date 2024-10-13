import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import '../App.css';
import './spacing.css';
import softmechlogo from '../assets/imgs/logo/softmechlogo.png';
import '../assets/css/meanmenu.css';
import '../assets/css/animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({}); // Track the open state of submenus

  
  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = (index) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific submenu
    }));
  };

  return (
<header style={{marginTop:'-10px', marginBottom:"-22px"}}>
      <div id="header-sticky" className="header-area">
        <div className="large-container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="header-logo">
                  <Link className='links' to="/">
                    <img src={softmechlogo} alt="header logo" />
                  </Link>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end">
                <div className="mean__menu-wrapper d-none d-lg-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                    <ul>
  <li className="has-dropdown active">
    <Link className='links' to="/">Home</Link>
  </li>
  <li className="has-dropdown">
  <Link 
    className='links' 
    to="#" 
    style={{ 
      // fontSize: '12px', 
      // fontWeight: 'bold', 
      color: '#000', 
      textDecoration: 'none',
      display: 'inline-block'
    }}>
    Company
  </Link>
  <ul 
    className="submenu" 
    style={{ 
      width: '120px', // Reduced width for the dropdown
      padding: '8px', 
      backgroundColor: '#f0f0f0', 
      borderRadius: '5px', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
      listStyleType: 'none', // Remove bullets
      margin: '0', // Reset margin
      textAlign: 'left'
    }}>
    <li className="has-dropdown">
      <Link 
        className='links' 
        to="/about" 
        style={{ 
          fontSize: '12px', // Reduced text size
          padding: '5px 10px', // Padding within each dropdown item
          display: 'block', 
          color: '#333', 
          textDecoration: 'none'
        }}>
        About Us
      </Link>
    </li>
    <li>
      <Link 
        className='links' 
        to="/team" 
        style={{ 
          fontSize: '12px', 
          padding: '5px 10px', 
          display: 'block', 
          color: '#333', 
          textDecoration: 'none'
        }}>
        Our Team
      </Link>
    </li>
  </ul>
</li>
 
  <li>
    <Link className='links' to="/services">Our Services</Link>
    
  </li>
  <li><Link className='links' to="/contact">Contact Us</Link></li>
</ul>

                    </nav>
                    <div className="header__hamburger ml-50 d-none">
                      <button type="button" className="hamburger-btn offcanvas-open-btn" onClick={toggleOffcanvas}>
                        <span>01</span>
                        <span>01</span>
                        <span>01</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="search-toggle-open header-search my-auto">
                  <div className="search-icon">
                    <i className="icon-search" />
                  </div>
                </div>
                <div className="header-shopping-cart my-auto">
                  <div className="cart-icon">
                    <Link className='links' to="#"><i className="icon-shopping-cart" /></Link>
                  </div>
                </div>
                <div
  className="header-action d-none d-xl-inline-flex gap-5"
  style={{ fontSize: '14px' }} // Making the text size smaller
>
  <div className="header-link">
    <Link
      className="primary-btn-1 btn-hover links"
      to="/contact"
      style={{
        marginLeft: '80px',
        borderRadius: '5px', // Adding border-radius
        padding: '8px 16px',  // Adjusting padding for a smaller button
        fontSize: '13px',     // Optional: Reducing text size inside button
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      GET A QUOTE &nbsp;
    </Link>
  </div>
</div>

                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle" style={{ color: "black" }}>
                    <Link className="bar-icon links" style={{ color: "black" }} to="javascript:void(0)" onClick={toggleOffcanvas}>
                      <RxHamburgerMenu />
                      <i className="fa-light fa-bars-sort" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Sidebar */}
      <div className="fix">
      <div className={`offcanvas__info ${isOffcanvasOpen ? 'info-open' : ''}`} style={{ backgroundColor: 'black', color: 'white' }}>
  <div className="offcanvas__wrapper">
    <div className="offcanvas__content">
      <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
        <div className="offcanvas__logo">
          <Link to="dashboard.html">
          <img src={softmechlogo} alt="header logo" />
          </Link>
        </div>
        <div className="offcanvas__close">
          <button onClick={toggleOffcanvas}>
          <i className="fas fa-times" style={{ fontSize: '24px', color: 'white' }}></i>

          </button>
        </div>
      </div>
      {/* <div className="offcanvas__search mb-25">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime accusamus corrupti natus obcaecati vitae dignissimos, id officiis similique eos.
        </p>
      </div> */}
      <div className={`mobile-menu fix mean-container ${menuOpen ? 'open' : ''}`}>
      <div className="mean-bar">
        <Link to="#nav" className="meanmenu-reveal" onClick={toggleMenu}>
          <span><span><span></span></span></span>
        </Link>
        <nav className={`mean-nav ${menuOpen ? 'open' : ''}`}>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li className="has-dropdown active">
          <Link to="/" onClick={() => toggleSubMenu(0)} style={{ cursor: 'pointer' }}>Home</Link>
          <ul className="submenu" style={{ display: subMenuOpen[0] ? 'block' : 'none', padding: '0' }}>
            {/* <li><Link to="index.html">Home One</Link></li>
            <li><Link to="index-2.html">Home Two</Link></li>
            <li><Link to="index-3.html">Home Three</Link></li>
            <li><Link to="dark-home.html">Home Dark</Link></li> */}
          </ul>
        </li>
        
        <li className="has-dropdown">
          <Link to="#!" onClick={() => toggleSubMenu(2)} style={{ cursor: 'pointer' }}>Company</Link>
          <ul className="submenu" style={{ display: subMenuOpen[2] ? 'block' : 'none', padding: '0' }}>
            <li className="has-dropdown">
              <Link to="/about" onClick={() => toggleSubMenu(3)} style={{ cursor: 'pointer' }}>About Us</Link>
                <li><Link to="/team">Our Team</Link></li>
            </li>
            {/* <li><Link to="/faq">Faq's</Link></li> */}
          </ul>
        </li>
        <li>
          <Link to="/services" onClick={() => toggleSubMenu(1)} style={{ cursor: 'pointer' }}>Our Services</Link>
        </li>
        <li className="mean-last">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
        </nav>
      </div>
    </div>
    <div className="offcanvas__contact mt-30 mb-20">
  <h4>Contact Info</h4>
  <ul>
    <li className="d-flex align-items-center">
      <div className="offcanvas__contact-icon mr-15">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
      </div>
      <div className="offcanvas__contact-text">
        <Link 
          target="_blank" 
          rel="noopener noreferrer" 
          to="#" 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          SOFTMECH SOLUTION Office No. 6, Near Cherry County, Greater Noida West UP.
        </Link>
      </div>
    </li>
    <li className="d-flex align-items-center">
      <div className="offcanvas__contact-icon mr-15">
        <i className="fa fa-phone" aria-hidden="true"></i>
      </div>
      <div className="offcanvas__contact-text">
        <Link 
          to="tel:+00112233665" 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          +919717656550
        </Link>
      </div>
    </li>
    <li className="d-flex align-items-center">
      <div className="offcanvas__contact-icon mr-15">
        <i className="fas fa-envelope"></i>
      </div>
      <div className="offcanvas__contact-text">
        <Link 
          to="mailto:support@example.com" 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          info@softmechsolution.com
        </Link>
      </div>
    </li>
  </ul>
</div>

      <div className="offcanvas__social">
  <ul>
    <li>
      <Link to="#" style={{ textDecoration: "none" }}>
        <i className="fab fa-facebook-f"></i>
      </Link>
    </li>
    <li>
      <Link to="#" style={{ textDecoration: "none" }}>
        <i className="fab fa-twitter"></i>
      </Link>
    </li>
    <li>
      <Link to="#" style={{ textDecoration: "none" }}>
        <i className="fab fa-youtube"></i>
      </Link>
    </li>
    <li>
      <Link to="#" style={{ textDecoration: "none" }}>
        <i className="fab fa-linkedin"></i>
      </Link>
    </li>
  </ul>
</div>
    </div>
  </div>
</div>

      <button onClick={toggleOffcanvas} className="toggle-button">
        {isOffcanvasOpen ? 'Close Menu' : 'Open Menu'}
      </button>
    </div>

    </header>
  );
};

export default Header;