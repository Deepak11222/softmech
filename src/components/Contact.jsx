import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import React Icons
import breadcrumbBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import breadcrumbBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const ContactPage = () => {
  return (
    <main>
      {/* Breadcrumb area start */}
      <div className="breadcrumb__area theme-bg-1 p-relative pt-160 pb-160">
        <div 
          className="breadcrumb__thumb" 
          style={{ backgroundImage: `url(${breadcrumbBg1})` }}
        ></div>
        <div 
          className="breadcrumb__thumb_2" 
          style={{ backgroundImage: `url(${breadcrumbBg2})` }}
        ></div>
        <div className="small-container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper p-relative">
                <h2 className="breadcrumb__title">Contact</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><a href="index.html">Home</a></span></li>
                      <li><span>Contact</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area end */}

      <section className="contact-page-section section-space">
        <div className="small-container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="contact-p-info-area">
                <div className="contact-box mb-30">
                  <div className="icon-1">
                    <FaMapMarkerAlt /> {/* Location Icon */}
                  </div>
                  <div className="info">
                    <span>Location</span>
                    <h4>4140 Parker, USA</h4>
                  </div>
                </div>
                <div className="contact-box mb-30">
                  <div className="icon-1">
                    <FaPhoneAlt /> {/* Phone Icon */}
                  </div>
                  <div className="info">
                    <span>Call Us 7/24</span>
                    <h4><a href="tel:2085550112">+208-555-0112</a></h4>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="icon-1">
                    <FaEnvelope /> {/* Email Icon */}
                  </div>
                  <div className="info">
                    <span>Make A quote</span>
                    <h4><a href="mailto:Info@wotech.com">Info@wotech.com</a></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="contact-page-form-area">
                <div className="title-box mb-40">
                  <span className="section-sub-title">LET’S TALK</span>
                  <h3 className="section-title mt-10">Let’s Get in Touch</h3>
                </div>
                <div className="contact-page-form">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <label>Your Name*</label>
                        <input type="text" placeholder="Your Name*" required />
                      </div>
                      <div className="col-lg-6">
                        <label>Your Email*</label>
                        <input type="email" placeholder="Your Email*" required />
                      </div>
                      <div className="col-lg-6">
                        <label>Your Phone*</label>
                        <input type="tel" placeholder="Your Phone*" required />
                      </div>
                      <div className="col-lg-6">
                        <label>Subject*</label>
                        <input type="text" placeholder="Subject*" required />
                      </div>
                      <div className="col-lg-12">
                        <label>Your Message*</label>
                        <textarea name="message" placeholder="Write Message" required></textarea>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="primary-btn-1 btn-hover">
                          Send Now &nbsp; | <i className="icon-right-arrow"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid g-0 fix">
        <div className="row">
          <div className="col-xxl-12">
            <div className="contact-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4216.433331900906!2d90.36996032419312!3d23.83718617432321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1693682874850!5m2!1sen!2sbd" 
                style={{ width: '100%', height: '400px', border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;