import React from 'react';
import "../App.css";
import 'font-awesome/css/font-awesome.min.css';
import { SiMaterialformkdocs } from "react-icons/si";
import { FaHandsHelping, FaAward } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { SiIcomoon } from "react-icons/si";
import shape1 from '../assets/imgs/shapes/shape-39.png';
import shape2 from '../assets/imgs/shapes/shape-40.png';
import shape3 from '../assets/imgs/shapes/shape-49.png';
import shape4 from '../assets/imgs/shapes/shape-44.png';
import shape5 from '../assets/imgs/shapes/shape-45.png';
import shape6 from '../assets/imgs/resources/choose-2.jpg';
import shape7 from '../assets/imgs/about/about-2.jpg';
import shape8 from '../assets/imgs/bg/choose-bg-2.png';
import BlogSection from './BlogSection';
import AboutSection from './About';
import NewsSection from './NewsSection';
import ProjectSliderSection from './ProjectSliderSection';
import ServiceSection from './ServiceSection';
import TechSection from './ClientSection';

const Main = () => {
  return (
    <>
      {/* Slider Area Start */}
      <section className="banner-three-section fix">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="banner-3-content p-relative bg-color-1">
                <div className="shape-2" style={{ backgroundImage: `url(${shape2})` }}></div>
                <div className="shape-3 float-bob-y" style={{ backgroundImage: 'url(assets/imgs/shapes/shape-41.png)' }}></div>
                <div className="banner-area-2 img-custom-anim-left animated">
                  <span className="p-relative banner-sub-title no-border">
                    <SiIcomoon style={{ color: '#3c72fc' }} /> TECHNOLOGY RELATED CONSULTANCY
                  </span>
                  <h1 className="banner-title">Welcome to Softmech Solutions</h1>
                  <p className="banner-text">
                    At Softmech Solutions, we specialize in transforming your business ideas into robust, cutting-edge technology solutions. 
                    With over 5+ years of experience in the IT industry, our team of seasoned professionals is dedicated to delivering innovation, quality, and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <TechSection />
      <ServiceSection />

      {/* Choose Us Section Start */}
      <section className="choose-3-section p-relative section-space" style={{ backgroundImage: `url(${shape8})` }}>
        <div className="shape-1" style={{ backgroundImage: `url(${shape3})` }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="choose-3-image-area p-relative">
                <div className="shape-1" style={{ backgroundImage: `url(${shape4})` }}></div>
                <figure className="image w-img pr-100">
                  <img src={shape6} alt="Choose Us" />
                </figure>
                <div className="image-3-area">
                  <div className="image-3 p-relative">
                    <img src={shape7} alt="About Us" />
                  </div>
                </div>
                <h1>WOTECH</h1>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="choose-3-content-area pl-60 pt-20 p-relative">
                <div className="title-box mb-25">
                  <span className="section-sub-title no-border">
                    <SiIcomoon style={{ color: '#3c72fc' }} /> WHY Choose US
                  </span>
                  <h3 className="section-title mt-10">Elevate Your Achievements Using Premier IT Solutions</h3>
                </div>
                <p>
                  We distinguish ourselves in the industry through our unwavering commitment to quality and customer satisfaction, which is why businesses around the world trust us. 
                  Our experienced team of professionals brings a wealth of expertise in the latest technologies and best practices, allowing us to deliver custom solutions tailored to fit your unique business needs and objectives. 
                </p>
                <div className="row g-4 pt-35">
                  <div className="col-lg-6">
                    <div className="icon-box-area">
                      <h5>
                        <SiMaterialformkdocs style={{ color: '#3c72fc' }} />
                        <a className='linked' href="services.html"> Quality Materials</a>
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="icon-box-area">
                      <h5>
                        <MdOutlineMiscellaneousServices style={{ color: '#3c72fc' }} />
                        <a className='linked' href="services.html"> Best Services</a>
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="icon-box-area">
                      <h5>
                        <FaHandsHelping style={{ color: '#3c72fc' }} />
                        <a className='linked' href="services.html"> 24/7 Call Support</a>
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="icon-box-area">
                      <h5>
                        <FaAward style={{ color: '#3c72fc' }} />
                        <a className='linked' href="services.html"> Award Winning</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Choose Us Section End */}
    </>
  );
};

export default Main;