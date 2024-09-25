import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import '../App.css';
import '../assets/css/animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
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
                            <li><Link className='links' to="/">Home One</Link></li>
                            <li><Link className='links' to="/index-2">Home Two</Link></li>
                            <li><Link className='links' to="/index-3">Home Three</Link></li>
                            <li><Link className='links' to="/dark-home">Home Dark</Link></li>
                          </ul>
                        </li>
                        <li><Link className='link' to="/about">About</Link></li>
                        <li>
                          <Link className='link' to="/services">Services</Link>
                          <ul className="submenu">
                            <li><Link className='link' to="/services">Services</Link></li>
                            <li><Link className='link' to="/service-details">Service Details</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link className='link' to="/blog-grid">Pages</Link>
                          <ul className="submenu">
                            <li className="has-dropdown">
                              <Link className='link' to="/projects">Projects</Link>
                              <ul className="submenu">
                                <li><Link className='link' to="/projects">Projects</Link></li>
                                <li><Link className='link' to="/project-details">Projects Details</Link></li>
                              </ul>
                            </li>
                            <li><Link className='link' to="/team">Team</Link></li>
                            <li><Link className='link' to="/team-details">Team Details</Link></li>
                            <li><Link className='link' to="/faq">Faq's</Link></li>
                            <li><Link className='link' to="/error">Error Page</Link></li>
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
                      <button type="button" className="hamburger-btn offcanvas-open-btn">
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
                  <div className="sidebar__toggle">
                    <Link className="bar-icon links" to="javascript:void(0)">
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
    </header>
  );
};

export default Header;
