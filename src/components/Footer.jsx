import React from 'react';
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
                    <span><a className="links" href="#"><i className="fab fa-facebook-f"></i></a></span>
                    <span><a className="links" href="#"><i className="fab fa-twitter"></i></a></span>
                    <span><a className="links" href="#"><i className="fab fa-linkedin-in"></i></a></span>
                    <span><a className="links" href="#"><i className="fab fa-youtube"></i></a></span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget-2 pl-50">
                  <h4 className="mb-30 footer-title" style={{ marginLeft: '15px' }}>Quick Links</h4>
                  <ul className="service-list">
                    <li><i className="fa fa-arrow-right"></i> <a className="links" href="about.html">About Us</a></li>
                    <li><i className="fa fa-arrow-right"></i> <a className="links" href="team.html">Our Team</a></li>
                    <li><i className="fa fa-arrow-right"></i> <a className="links" href="services.html">Our Services</a></li>
                    <li><i className="fa fa-arrow-right"></i> <a className="links" href="blog-grid.html">Latest Blog</a></li>
                    <li><i className="fa fa-arrow-right"></i> <a className="links" href="contact.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="footer-widget-2">
                  <h4 className="mb-30 footer-title" style={{ marginLeft: '15px' }}>Our Services</h4>
                  <ul className="service-list">
                    <li><i className="fa fa-arrow-right"></i> <a className="links" href="service-details.html">IT Management</a></li>
                    <li><i className="fa fa-arrow-right"></i> <a className="links" href="service-details.html">SEO Optimization</a></li>
                    <li><i className="fa fa-arrow-right"></i> <a className="links" href="service-details.html">Web Development</a></li>
                    <li><i className="fa fa-arrow-right"></i> <a className="links" href="service-details.html">Cyber Security</a></li>
                    <li><i className="fa fa-arrow-right"></i> <a className="links" href="service-details.html">Data Security</a></li>
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
                        <a href="tel:20866660112" style={{ color: 'white', textDecoration: 'none' }}>+919717656550</a>, 
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
              <span>© All Copyright 2024 by <a className="links" href="#">wotech</a></span>
            </div>
            <div className="right-area">
              <span><a className="links" href="#">Terms &amp; Condition <i className="fa fa-arrow-right"></i></a></span>
              <span><a className="links" href="#">Privacy Policy <i className="fa fa-arrow-right"></i></a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;