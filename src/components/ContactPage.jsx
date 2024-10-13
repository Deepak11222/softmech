import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import breadcrumbBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import breadcrumbBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const ContactPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_erlc7cw', 'template_zubencn', e.target, 'mQf0YiXCO2Y2Sc1sV')
    .then((result) => {
          console.log('EmailJS Result:', result); // Log the result for debugging
          alert("Email sent successfully!");
          e.target.reset(); // Reset the form
      }, (error) => {
          alert("Failed to send email. Please try again.");
          console.error("Failed to send email: ", error);
      });
  };

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
                <h2 className="breadcrumb__title">Contact Us</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link className='links' to="/">Home</Link></span></li>
                      <i className="fa fa-arrow-right"></i><li><span>Contact Us</span></li>
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
                    <span style={{fontSize:"18px",fontWeight:"bolder"}}>Location</span>
                    <h4>
  SOFTMECH SOLUTION<br />
  Office No. 6, Near Cherry County, Greater Noida West UP.
</h4>                  </div>
                </div>
                <div className="contact-box mb-30">
                  <div className="icon-1">
                    <FaPhoneAlt /> {/* Phone Icon */}
                  </div>
                  <div className="info">
                    <span style={{fontSize:"18px",fontWeight:"bolder"}}>Call Us 7/24</span>
                    <h4><Link to="tel:+919717656550">+919717656550</Link></h4>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="icon-1">
                    <FaEnvelope /> {/* Email Icon */}
                  </div>
                  <div className="info">
                    <span style={{fontSize:"18px",fontWeight:"bolder"}}>Make A quote</span>
                    <h4><Link to="#">info@softmechsolutions.in</Link></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="contact-page-form-area">
                <div className="title-box">
                  <span className="section-sub-title" style={{fontSize:'10px'}}>LET’S TALK</span>
                  <h5 className="section-title">Let’s Get in Touch</h5>
                </div>
                <div className="contact-page-form">
                  <form onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-lg-6">
                        <label>Your Name*</label>
                        <input type="text" name="name" placeholder="Your Name*" required />
                      </div>
                      <div className="col-lg-6">
                        <label>Your Email*</label>
                        <input type="email" name="from_email" placeholder="Your Email*" required />
                      </div>
                      <div className="col-lg-6">
                        <label>Your Phone*</label>
                        <input type="tel" name="phone" placeholder="Your Phone*" required />
                      </div>
                      <div className="col-lg-6">
                        <label>Subject*</label>
                        <input type="text" name="subject" placeholder="Subject*" required />
                      </div>
                      <div className="col-lg-12">
                        <label>Your Message*</label>
                        <textarea name="message" placeholder="Write Message" required />
                      </div>
                      <div className="col-lg-10" style={{borderRadius:'5px'}}>
                        <button type="submit" className="primary-btn-2 btn-hover"style={{borderRadius:'5px'}}>
                          Send &nbsp;
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
                src="https://www.google.com/maps/embed/v1/place?q=Softmech+Solutions,+Office+No.+6,+Near+Cherry+County,+Greater+Noida+West+UP.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" 
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
