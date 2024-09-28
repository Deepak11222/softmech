import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import '../App.css';
import './spacing.css';
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
    <header>
      <div className="container-fluid bg-color-1">
        <div className="header-top">
          <div className="header-top-contact-info">
            <span className="email p-relative">
              <i className="fas fa-envelope"></i>
              <Link className='links' to="mailto:softmech@gmail.com"> softmech@gmail.com</Link>
            </span>
            <span className="time p-relative">
              <i className="fas fa-clock" style={{ marginRight: '5px' }}></i>
              Hours: Mon - Sat: 10.00 AM - 4.00 PM
            </span>
          </div>
          <div className="header-top-socials">
            <span><Link className='links' to="#"><i className="fab fa-facebook-f" /></Link></span>
            <span><Link className='links' to="#"><i className="fab fa-twitter" /></Link></span>
            <span><Link className='links' to="#"><i className="fab fa-linkedin-in" /></Link></span>
            <span><Link className='links' to="#"><i className="fab fa-youtube" /></Link></span>
          </div>
        </div>
      </div>
      <div id="header-sticky" className="header-area">
        <div className="large-container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="header-logo">
                  <Link className='links' to="/">
                    <img src="https://softmechsolutions.in/assets/images/logo/logo.png" alt="header logo" />
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
    <ul className="submenu">
      <li>
        <Link className='links' to="/">Home One</Link>
        <i className="fas fa-chevron-down" style={{ fontSize: '16px', color: 'white', marginLeft: '8px' }}></i>
      </li>
      <li><Link className='links' to="/index-2">Home Two</Link></li>
      <li><Link className='links' to="/index-3">Home Three</Link></li>
      <li><Link className='links' to="/dark-home">Home Dark</Link></li>
    </ul>
  </li>
  <li><Link className='links' to="/about">About</Link></li>
  <li>
    <Link className='links' to="/services">Services</Link>
    <ul className="submenu">
      <li><Link className='links' to="/services">Services</Link></li>
      <li><Link className='links' to="/service-details">Service Details</Link></li>
    </ul>
  </li>
  <li className="has-dropdown">
    <Link className='links' to="/blog-grid">Pages</Link>
    <ul className="submenu">
      <li className="has-dropdown">
        <Link className='links' to="/projects">Projects</Link>
        <ul className="submenu">
          <li><Link className='links' to="/projects">Projects</Link></li>
          <li><Link className='links' to="/project-details">Projects Details</Link></li>
        </ul>
      </li>
      <li><Link className='links' to="/team">Team</Link></li>
      <li><Link className='links' to="/team-details">Team Details</Link></li>
      <li><Link className='links' to="/faq">Faq's</Link></li>
      <li><Link className='links' to="/error">Error Page</Link></li>
    </ul>
  </li>
  <li className="has-dropdown">
    <Link className='links' to="/blog-grid">Blog</Link>
    <ul className="submenu">
      <li><Link className='links' to="/blog-standard">Blog Default</Link></li>
      <li><Link className='links' to="/blog-grid">Blog Grid</Link></li>
      <li><Link className='links' to="/blog-details">Blog Details</Link></li>
    </ul>
  </li>
  <li><Link className='links' to="/contact">Contact</Link></li>
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
                <div className="header-action d-none d-xl-inline-flex gap-5">
                  <div className="header-link">
                    <Link className="primary-btn-1 btn-hover links" to="/contact">
                      GET A QUOTE &nbsp; | <i className="icon-right-arrow" />
                    </Link>
                  </div>
                </div>
                <div className="header-action">
                  <div className="header-link-1">
                    <div className="icon">
                      <i className="fal fa-phone-volume" />
                    </div>
                    <div className="content">
                      <span>Call Us Now</span>
                      <h6><Link className='links' to="tel:2085550112">+208-555-0112</Link></h6>
                    </div>
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
          <img src="https://softmechsolutions.in/assets/images/logo/logo.png" alt="header logo" />
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
          <Link to="#!" onClick={() => toggleSubMenu(0)} style={{ cursor: 'pointer' }}>Home</Link>
          <ul className="submenu" style={{ display: subMenuOpen[0] ? 'block' : 'none', padding: '0' }}>
            {/* <li><Link to="index.html">Home One</Link></li>
            <li><Link to="index-2.html">Home Two</Link></li>
            <li><Link to="index-3.html">Home Three</Link></li>
            <li><Link to="dark-home.html">Home Dark</Link></li> */}
          </ul>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="#!" onClick={() => toggleSubMenu(1)} style={{ cursor: 'pointer' }}>Services</Link>
          <ul className="submenu" style={{ display: subMenuOpen[1] ? 'block' : 'none', padding: '0' }}>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/service-details">Service Details</Link></li>
          </ul>
        </li>
        <li className="has-dropdown">
          <Link to="#!" onClick={() => toggleSubMenu(2)} style={{ cursor: 'pointer' }}>Pages</Link>
          <ul className="submenu" style={{ display: subMenuOpen[2] ? 'block' : 'none', padding: '0' }}>
            <li className="has-dropdown">
              <Link to="#!" onClick={() => toggleSubMenu(3)} style={{ cursor: 'pointer' }}>Projects</Link>
              <ul className="submenu" style={{ display: subMenuOpen[3] ? 'block' : 'none', padding: '0' }}>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/project-details">Projects Details</Link></li>
              </ul>
            </li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/team-details">Team Details</Link></li>
            <li><Link to="/faq">Faq's</Link></li>
          </ul>
        </li>
        {/* <li className="has-dropdown">
          <Link to="#!" onClick={() => toggleSubMenu(4)} style={{ cursor: 'pointer' }}>Blog</Link>
          <ul className="submenu" style={{ display: subMenuOpen[4] ? 'block' : 'none', padding: '0' }}>
            <li><Link to="blog-standard.html">Blog Default</Link></li>
            <li><Link to="blog-grid.html">Blog Grid</Link></li>
            <li><Link to="blog-details.html">Blog Details</Link></li>
          </ul>
        </li> */}
        <li className="mean-last">
          <Link to="/contact">Contact</Link>
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
              <Link target="_blank" rel="noopener noreferrer" to="#">31 Park End St, Brockhampton, UK</Link>
            </div>
          </li>
          <li className="d-flex align-items-center">
            <div className="offcanvas__contact-icon mr-15">
            <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="offcanvas__contact-text">
              <Link to="tel:+00112233665">+00112233665</Link>
            </div>
          </li>
          <li className="d-flex align-items-center">
            <div className="offcanvas__contact-icon mr-15">
            <i className="fas fa-envelope"></i>
            </div>
            <div className="offcanvas__contact-text">
              <Link to="mailto:support@example.com">support@example.com</Link>
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
