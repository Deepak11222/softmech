import React from 'react';
import "../App.css";
import 'font-awesome/css/font-awesome.min.css';
import { SiMaterialformkdocs } from "react-icons/si";
import { FaHandsHelping } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { SiIcomoon } from "react-icons/si";
import "./spacing.css";
import shape1 from '../assets/imgs/shapes/shape-39.png';
import shape14 from '../assets/imgs/shapes/shape-29.png'
import shape2 from '../assets/imgs/shapes/shape-40.png';
import shape3 from '../assets/imgs/shapes/shape-49.png';
import shape4 from '../assets/imgs/shapes/shape-44.png';
import shape5 from '../assets/imgs/shapes/shape-45.png';
import shape6 from '../assets/imgs/resources/choose-2.jpg';
import shape7 from '../assets/imgs/about/about-2.jpg';
import shape8 from '../assets/imgs/bg/choose-bg-2.png';
import shape12 from '../assets/imgs/bg/faq-bg.png';
import shape9 from '../assets/imgs/icon/icon-8.png';
import shape10 from '../assets/imgs/shapes/shape-48.png';
import shape11 from '../assets/imgs/resources/faq-1.png';
import BlogSection from './BlogSection ';
import AboutSection from './About';
import NewsSection from './NewsSection';
import ProjectSliderSection from './ProjectSliderSection';
import ServiceSection from './ServiceSection';

const Main = () => {
  return (
    <>
      {/* Slider Area Start */}
      <section className="banner-three-section fix">
      <div className="container-fluid g-0">
        <div className="row g-0">
          <div className="col-xxl-7">
            <div className="banner-3-content p-relative bg-color-1">
            {/* <div className="shape-1" style={{ backgroundImage: `url(${shape1})` }}></div> */}
            <div className="shape-2" style={{ backgroundImage: `url(${shape2})` }}></div>
              <div className="shape-3 float-bob-y" style={{ backgroundImage: 'url(assets/imgs/shapes/shape-41.png)' }}></div>
              <div className="banner-area-2 img-custom-anim-left animated" style={{ animationDelay: '2000ms' }}>
                <span className="p-relative banner-sub-title no-border"><SiIcomoon style={{ color: '#3c72fc' }} /> TECHNOLOGY RELATED CONSULTANCY</span>
                <h1 className="banner-title">Welcome to Softmech Solutions</h1>
                <p className="banner-text">
                At Softmech Solutions, we specialize in transforming your business ideas into robust, cutting-edge technology solutions. With over 5+ years of experience in the IT industry, our team of seasoned professionals is dedicated to delivering innovation, quality, and reliability. <br />
                </p>
                {/* <div className="banner-btn-area-2">
  <a className="primary-btn-1 btn-hover" href="services.html">
    GET A QUOTE &nbsp; | <i className="fa fa-arrow-right"></i>
    <span style={{ top: '147.172px', left: '108.5px' }}></span>
  </a>
</div> */}
              </div>
            </div>
          </div>
          <div className="col-xxl-5">
            <div className="banner-3-image-area p-relative" style={{ backgroundImage: 'url(assets/imgs/banner/banner-4.jpg)' }}>
              <div className="banner-3-experience">
                <div className="icon-box">
                  <i className="icon-roof-9"></i>
                </div>
                <div className="content">
                  <h3 className="text-white"><span className="counter">25</span>+</h3>
                  <p className="text-white">Years Working Experience</p>
                </div>
              </div>
              <div className="content-1">
                <div className="banner-3-popup p-relative">
                  <div className="banner_popup_btn">
                    <div className="icon-1"><i className="fa fa-plus"></i></div>
                  </div>
                  <div className="best-quality">
                    <span>Best Quality</span>
                  </div>
                </div>
              </div>
              <div className="content-2">
                <div className="banner-3-popup p-relative">
                  <div className="banner_popup_btn">
                    <div className="icon-1"><i className="fa fa-plus"></i></div>
                  </div>
                  <div className="best-quality">
                    <span>Best Quality</span>
                  </div>
                </div>
              </div>
              <div className="content-3">
                <div className="banner-3-popup p-relative">
                  <div className="banner_popup_btn">
                    <div className="icon-1"><i className="fa fa-plus"></i></div>
                  </div>
                  <div className="best-quality">
                    <span>Best Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AboutSection/>
{/* 
    <section className="help-3-form-section p-relative z-1">
      <div className="small-container">
        <div className="help-3-form-area p-relative">
          <div
            className="shape-1"
            style={{ backgroundImage: `url(${shape4})` }}
          ></div>
          <div
            className="shape-2"
            style={{ backgroundImage: `url(${shape5})` }}
          ></div>
          <h3 className="mb-30">Need Any Help?</h3>
          <form action="#">
            <div className="row p-relative">
              <div className="col-lg-3">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="col-lg-3">
                <input type="tel" placeholder="Your Phone" required />
              </div>
              <div className="col-lg-3">
                <input type="text" placeholder="Message" required />
              </div>
              <div className="col-lg-3">
                <button type="submit" className="primary-btn-1 btn-hover">
                  Submit Request
                  <span style={{ top: '147.172px', left: '108.5px' }}></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section> */}
    <ServiceSection/>

    <section 
      className="choose-3-section p-relative section-space" 
      style={{  backgroundImage: `url(${shape8})` }}    >
      <div 
        className="shape-1" 
        style={{  backgroundImage: `url(${shape3})` }}
      ></div>
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="choose-3-image-area p-relative">
              <div 
                className="shape-1" 
                style={{ backgroundImage: `url(${shape14})` }}
              ></div>
              <figure className="image w-img pr-100">
    <img src={shape6} alt="" />
</figure>
              <div className="image-3-area">
                <div className="image-3 p-relative">
                <img src={shape7} alt="" />
                {/* <div className="play-btn">
                    <div className="video_player_btn">
                      <a 
                        href="https://www.youtube.com/watch?v=eEzD-Y97ges" 
                        className="popup-video"
                      >
                        <i className="icon-play"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
              <h1>WOTECH</h1>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="choose-3-content-area pl-60 pt-20 p-relative">
              <div className="title-box mb-25 wow fadeInLeft" data-wow-delay=".5s">
                <span className="section-sub-title no-border"><SiIcomoon style={{ color: '#3c72fc' }} /> WHY Choose US</span>
                <h3 className="section-title mt-10">Elevate Your Achievements Using Premier IT Solutions</h3>
              </div>
              <p>
              We distinguish ourselves in the industry through our unwavering commitment to quality and customer satisfaction, which is why businesses around the world trust us. Our experienced team of professionals brings a wealth of expertise in the latest technologies and best practices, allowing us to deliver custom solutions tailored to fit your unique business needs and objectives. We pride ourselves on our innovative approach, utilizing cutting-edge tools and methodologies to ensure that you stay ahead of the competition. Additionally, our dedicated support team is available 24/7 to ensure that your operations run smoothly at all times. With a track record of high-quality, client-centric services, we have earned several industry accolades, further solidifying our reputation as a trusted partner.
              </p>
              <div className="row g-4 pt-35">
              <div className="col-lg-6">
                  <div className="icon-box-area">
                   
                    <h5><SiMaterialformkdocs style={{ color: '#3c72fc' }}  /><a className='linked' href="services.html"> Quality Materials</a></h5>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="icon-box-area active">
                    <div className="icon-box">
                      <i className="icon-roof-7"></i>
                    </div>
                    <h5><SiMaterialformkdocs />
                    <a className='linked' href="services.html"> Quality Materials</a></h5>
                  </div>
                </div> */}
                <div className="col-lg-6">
                  <div className="icon-box-area">
                   
                    <h5><MdOutlineMiscellaneousServices style={{ color: '#3c72fc' }}  /><a className='linked' href="services.html"> Best Services</a></h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="icon-box-area">
                    <h5><FaHandsHelping style={{ color: '#3c72fc' }} />
                    <a className='linked' href="services.html"> 24/7 Call Support</a></h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="icon-box-area">
                    <h5><FaAward style={{ color: '#3c72fc' }} /><a className='linked' href="services.html"> Award Winning</a></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <ProjectSliderSection/> */}

    {/* <section className="faq-section bg-color-1 p-relative mb-20">
      <div
        className="shape-1"
        style={{ backgroundImage: `url(${shape12})` }}      ></div>
      <div
        className="shape-2"
        style={{ backgroundImage: 'url(assets/imgs/shapes/shape-47.png)' }}
      ></div>
      <div
        className="shape-3"
        style={{ backgroundImage: `url(${shape10})` }}
      ></div>
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-7">
            <div className="faq-wrapper pr-50">
              <div className="faq-container section-space">
                <div
                  className="title-box mb-25 wow fadeInLeft"
                  data-wow-delay=".5s"
                  style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInLeft' }}
                >
                  <span className="section-sub-title no-border">FAQ</span>
                  <h3 className="section-title mt-10">Most Common Question?</h3>
                </div>
                <div className="bd-faq">
                  <div className="accordion" id="accordionExample-st-2">
                    <div className="bd-faq-group">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne-st-2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne-st-2"
                            aria-expanded="false"
                            aria-controls="collapseOne-st-2"
                          >
                            Where should I incorporate my business?
                          </button>
                        </h2>
                        <div
                          id="collapseOne-st-2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne-st-2"
                          data-bs-parent="#accordionExample-st-2"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo-st-2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo-st-2"
                            aria-expanded="false"
                            aria-controls="collapseTwo-st-2"
                          >
                            How can I safely use files?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo-st-2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo-st-2"
                          data-bs-parent="#accordionExample-st-2"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree-st-2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree-st-2"
                            aria-expanded="false"
                            aria-controls="collapseThree-st-2"
                          >
                            What is included in your services?
                          </button>
                        </h2>
                        <div
                          id="collapseThree-st-2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree-st-2"
                          data-bs-parent="#accordionExample-st-2"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour-st-2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour-st-2"
                            aria-expanded="false"
                            aria-controls="collapseFour-st-2"
                          >
                            What type of company is measured?
                          </button>
                        </h2>
                        <div
                          id="collapseFour-st-2"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour-st-2"
                          data-bs-parent="#accordionExample-st-2"
                        >
                          <div className="accordion-body">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 mt-auto">
            <div className="faq-image-area p-relative">
              <figure className="image">
              <img src={shape11} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    {/* <BlogSection/> */}
    {/* <BackToTop/> */}
    {/* <NewsSection/> */}


      {/* Slider Area End */}

      {/* Other sections can be implemented here like "feature-area", "about-area", etc. */}
    </>
  );
};

export default Main;