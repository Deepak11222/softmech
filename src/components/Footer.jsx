import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import shape1 from '../assets/imgs/shapes/shape-50.png';
import shape2 from '../assets/imgs/footer/shape-f-1.png';

const Footer = () => {
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
                  <p className="mt-40 mb-40">
                  At Softmech Solutions, we Explore, Innovate, and Execute to provide comprehensive mobile and web solutions. Whether it’s a simple app or a complex enterprise platform, we cater to diverse business verticals around the globe, ensuring that your vision becomes a reality.

</p>
                  <div className="footer-socials p-relative">
                    <span><Link className="links" to="#"><i className="fab fa-facebook-f"></i></Link></span>
                    <span><Link className="links" to="#"><i className="fab fa-twitter"></i></Link></span>
                    <span><Link className="links" to="#"><i className="fab fa-linkedin-in"></i></Link></span>
                    <span><Link className="links" to="#"><i className="fab fa-youtube"></i></Link></span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget-2 pl-50">
                  <h4 className="mb-30 footer-title" style={{ marginLeft: '15px' }}>Quick Links</h4>
                  <ul className="service-list">
                    <li><i className="fa fa-arrow-right"></i> <Link className="links" to="about.html">About Us</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link className="links" to="team.html">Our Team</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link className="links" to="services.html">Our Services</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link className="links" to="blog-grid.html">Latest Blog</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link className="links" to="contact.html">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget-2">
                  <h4 className="mb-30 footer-title" style={{ marginLeft: '15px' }}>Our Services</h4>
                  <ul className="service-list">
                    <li><i className="fa fa-arrow-right"></i> <Link className="links" to="service-details.html">IT Management</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link className="links" to="service-details.html">SEO Optimization</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link className="links" to="service-details.html">Web Development</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link className="links" to="service-details.html">Cyber Security</Link></li>
                    <li><i className="fa fa-arrow-right"></i> <Link className="links" to="service-details.html">Data Security</Link></li>
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
                        <p className="m-0">Greater Noida, India</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      </div>
                      <div className="info-details">
                        <h6 className="mb-10">Phone Call:</h6>
                        <Link to="tel:20866660112" style={{ color: 'white', textDecoration: 'none' }}>+919717656550</Link>, 
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                      <i className="fa fa-clock" aria-hidden="true"></i> 
                      </div>
                      <div className="info-details">
                        <h6 className="mb-10">Opening Hours:</h6>
                        <p className="m-0">Mon - Sat: 10.00 AM - 4.00 PM</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="small-container">
          <div className="footer-bottom pt-30 pb-30 p-relative">
            <div className="left-area">
              <span>© All Copyright 2024 by <Link className="links" to="#">wotech</Link></span>
            </div>
            <div className="right-area">
              <span><Link className="links" to="#">Terms &amp; Condition <i className="fa fa-arrow-right"></i></Link></span>
              <span><Link className="links" to="#">Privacy Policy <i className="fa fa-arrow-right"></i></Link></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;