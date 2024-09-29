import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import shape1 from '../assets/imgs/shapes/shape-50.png';
import shape2 from '../assets/imgs/footer/shape-f-1.png';

const Footer = () => {
  const linkStyle = {
    color: 'white', // Customize link color
    textDecoration: 'none', // Remove underline from links
    fontSize: '16px', // Make link text size equal to paragraph size
  };

  const paragraphStyle = {
    fontSize: '16px', // Make paragraph text size equal to link text size
  };

  return (
    <footer>
      <div className="footer-main bg-color-1 p-relative">
        <div className="footer-shape-1" style={{ backgroundImage: `url(${shape2})` }}></div>
        <div className="footer-shape-3" style={{ backgroundImage: `url(${shape1})` }}></div>
        <div className="footer-top section-space-medium">
          <div className="small-container">
            <div className="row g-4">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget-1">
                  <figure className="image">
                  <img src="https://softmechsolutions.in/assets/images/logo/logo.png" alt="header logo" />
                  </figure>
                  <p className="mt-40 mb-40" style={paragraphStyle}>
  At Softmech Solutions, we deliver innovative mobile and web solutions, effectively turning your vision into reality across various business sectors worldwide.
</p>
                  <div className="footer-socials p-relative">
                    <span><Link to="#" style={linkStyle}><i className="fab fa-facebook-f"></i></Link></span>
                    <span><Link to="#" style={linkStyle}><i className="fab fa-twitter"></i></Link></span>
                    <span><Link to="#" style={linkStyle}><i className="fab fa-linkedin-in"></i></Link></span>
                    <span><Link to="#" style={linkStyle}><i className="fab fa-youtube"></i></Link></span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget-2">
                  <h4 className="mb-30 footer-title" style={{ marginLeft: '15px' }}>Quick Links</h4>
                  <ul className="service-list">
                    <li><i className="fa fa-arrow-right"></i> <Link to="/about" style={linkStyle}>About Us</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link to="/team-details" style={linkStyle}>Our Team</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link to="/services" style={linkStyle}>Our Services</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link to="/projects" style={linkStyle}>Projects</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link to="/contact" style={linkStyle}>Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget-2">
                  <h4 className="mb-30 footer-title" style={{ marginLeft: '15px' }}>Our Services</h4>
                  <ul className="service-list">
                    <li><i className="fa fa-arrow-right"></i> <Link to="#" style={linkStyle}>IT Management</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link to="#" style={linkStyle}>SEO Optimization</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link to="#" style={linkStyle}>Web Development</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link to="#" style={linkStyle}>Cyber Security</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link to="#" style={linkStyle}>Data Security</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget-4">
                  <h4 className="mb-20 footer-title">Contact Info</h4>
                  <ul className="footer-contact-info-widget p-relative">
                    <li>
                      <div className="icon">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </div>
                      <div className="info-details">
                        <h6 className="mb-10">Location:</h6>
                        <p className="m-0" style={paragraphStyle}>SOFTMECH SOLUTION Office No. 6, Near Cherry County, Greater Noida West UP.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </div>
                      <div className="info-details">
                        <h6 className="mb-10">Phone Call:</h6>
                        <Link to="tel:20866660112" style={linkStyle}>+919717656550</Link>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa fa-clock" aria-hidden="true"></i>
                      </div>
                      <div className="info-details">
                        <h6 className="mb-10">Opening Hours:</h6>
                        <p className="m-0" style={paragraphStyle}>Mon - Sat: 10.00 AM - 4.00 PM</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="small-container">
  <div className="footer-bottom pt-30 pb-30 p-relative" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span style={{ color: 'white', textAlign: 'center' }}>
      © All Copyright 2024 by <Link to="#" style={linkStyle}>Softmech Solutions</Link>
    </span>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;