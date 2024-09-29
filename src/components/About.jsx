import React from 'react';
import '../App.css';
import './spacing.css';
import { SiIcomoon } from "react-icons/si";
import { FaCheckDouble } from "react-icons/fa";
import shape1 from '../assets/imgs/shapes/shape-42.png';
import shape2 from '../assets/imgs/shapes/shape-43.png';
import aboutImage from '../assets/imgs/about/about-5.jpg';

const AboutSection = () => {
  return (
    <section className="about-three-section section-space-top p-relative">
      <div
        className="bg-shape"
        style={{ backgroundImage: `url(${shape2})` }}
      ></div>
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about-3-image-area p-relative">
              {/* <div className="shape-1" style={{ backgroundImage: `url(${shape1})` }}></div> */}
              <figure className="image w-img pr-60">
                <img src={aboutImage} alt="About Us" />
              </figure>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about-3-content-area p-relative pr-30 pt-20">
              <div className="title-box mb-25">
                <span className="section-sub-title no-border"><SiIcomoon style={{ color: '#3c72fc' }} /> WHO WE ARE</span>
                <h3 className="section-title mt-10">
                  Ensuring Your Success Through Reliable IT Solutions
                </h3>
              </div>
              <p>
              Founded with a passion for technology and an unwavering commitment to excellence, Softmech Solutions is a full-service IT company offering a wide range of services, including software development, web development, mobile app development, cloud services, and IT consultancy. We cater to a global clientele, providing tailored solutions that drive digital transformation and business growth.
              </p>
              <div className="row pb-25 pt-15">
            <div className="col-lg-6">
              <ul className="about-3-list">
                <li><FaCheckDouble style={{ color: '#3c72fc' }} />Accurate Testing Processes</li>
                <li><FaCheckDouble style={{ color: '#3c72fc' }} />100% Satisfaction Guarantee</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="about-3-list">
                <li><FaCheckDouble style={{ color: '#3c72fc' }} />300+ Successful Projects Done</li>
                <li>
  <FaCheckDouble style={{ color: '#3c72fc' }} /> Technology Consultancy
</li>              </ul>
            </div>
          </div>

              {/* <div className="about-3-progress-bar p-relative">
                <h6>Quality Services</h6>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '95%' }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span className="progress-count">95%</span>
              </div> */}
              <a className="primary-btn-1 btn-hover mt-50" href="about.html">
                about us &nbsp; |<i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;