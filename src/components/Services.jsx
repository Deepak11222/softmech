import React from 'react';
import { Link } from 'react-router-dom';
import { MdMiscellaneousServices } from "react-icons/md";
import { MdSecurity } from 'react-icons/md'; // Safety and Reliability
import { MdAnnouncement } from 'react-icons/md'; // Mission Statement
import service1 from '../assets/imgs/service/service-1.jpg';
import service2 from '../assets/imgs/service/service-2.jpg';
import service3 from '../assets/imgs/service/service-3.jpg';
import service8 from '../assets/imgs/service/service-8.jpg';
import service9 from '../assets/imgs/service/service-9.jpg';
import service10 from '../assets/imgs/service/service-10.jpg';
import chooseBg from '../assets/imgs/bg/choose-bg.png';
import chooseImg from '../assets/imgs/resources/choose-1.png';
import icon7 from '../assets/imgs/icon/icon-7.png';
import icon2 from '../assets/imgs/icon/icon-2.png';
import icon4 from '../assets/imgs/icon/icon-4.png';
import icon5 from '../assets/imgs/icon/icon-5.png';
import icon6 from '../assets/imgs/icon/icon-6.png';
import titleBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import titleBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const Services = () => {
  return (
    <main>
      {/* Breadcrumb area start */}
      <div className="breadcrumb__area theme-bg-1 p-relative pt-160 pb-160">
        <div className="breadcrumb__thumb" style={{ backgroundImage: `url(${titleBg1})` }}></div>
        <div className="breadcrumb__thumb_2" style={{ backgroundImage: `url(${titleBg2})` }}></div>
        <div className="small-container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper p-relative">
                <h2 className="breadcrumb__title">Our Services</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link className='links' to="/">Home</Link></span></li>
                      <i className="fa fa-arrow-right"></i><li><span>Services</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area end */}

      {/* Service Slider area start */}
      <section className="service-page-section section-space">
        <div className="small-container">
          <div className="row g-4">
            {/* Service Item 1 */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 mb-15">
              <div className="service-slider-area p-relative">
                <figure className="image w-img">
                  <img src={service1} alt="IT Consultancy" />
                </figure>
                <div className="content">
                  <div className="icon-box">
                    <img src={icon2} alt="IT Consultancy" />
                  </div>
                  <h4 className="mb-15"><Link className='link' to="#">IT Consultancy</Link></h4>
                  <p className="mb-25">We provide expert IT consultancy services to help you navigate complex technology decisions and align IT strategy with your business goals.</p>
                  <Link to="#" className="linked" style={{fontSize:'20px'}}>Read More <i className="fa fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            {/* Service Item 2 */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 mb-15">
              <div className="service-slider-area p-relative">
                <figure className="image w-img">
                  <img src={service2} alt="App Development" />
                </figure>
                <div className="content">
                  <div className="icon-box">
                    <img src={icon4} alt="App Development" />
                  </div>
                  <h4 className="mb-15"><Link className='link' to="#">App Development</Link></h4>
                  <p className="mb-25">Our team develops high-quality, scalable mobile applications tailored to your business needs, ensuring optimal performance on all devices.</p>
                  <Link to="#" className="linked" style={{fontSize:'20px'}}>Read More <i className="fa fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            {/* Service Item 3 */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 mb-15">
              <div className="service-slider-area p-relative">
                <figure className="image w-img">
                  <img src={service3} alt="Database Security" />
                </figure>
                <div className="content">
                  <div className="icon-box">
                    <img src={icon5} alt="Database Security" />
                  </div>
                  <h4 className="mb-15"><Link className='link' to="#">Database Security</Link></h4>
                  <p className="mb-25">We implement robust security measures to protect your databases from unauthorized access and breaches, ensuring data integrity.</p>
                  <Link to="#" className="linked" style={{fontSize:'20px'}}>Read More <i className="fa fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            {/* Service Item 4 */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 mb-15">
              <div className="service-slider-area p-relative">
                <figure className="image w-img">
                  <img src={service8} alt="Cloud Services" />
                </figure>
                <div className="content">
                  <div className="icon-box">
                    <img src={icon6} alt="Cloud Services" />
                  </div>
                  <h4 className="mb-15"><Link className='link' to="#">Cloud Services</Link></h4>
                  <p className="mb-25">Our cloud solutions help businesses enhance flexibility, scalability, and efficiency while reducing infrastructure costs.</p>
                  <Link to="#" className="linked" style={{fontSize:'20px'}}>Read More <i className="fa fa-arrow-right"></i></Link>
                </div>
              </div> 
            </div>
            {/* Service Item 5 */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 mb-15">
              <div className="service-slider-area p-relative">
                <figure className="image w-img">
                  <img src={service9} alt="Network Security" />
                </figure>
                <div className="content">
                  <div className="icon-box">
                    <img src={icon2} alt="Network Security" />
                  </div>
                  <h4 className="mb-15"><Link className='link' to="#">Network Security</Link></h4>
                  <p className="mb-25">Protect your network from threats with our advanced security solutions designed to safeguard your data and infrastructure.</p>
                  <Link to="#" className="linked" style={{fontSize:'20px'}}>Read More <i className="fa fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            {/* Service Item 6 */}
            <div className="col-xxl-4 col-xl-4 col-lg-4 mb-15">
              <div className="service-slider-area p-relative">
                <figure className="image w-img">
                  <img src={service10} alt="IT Support" />
                </figure>
                <div className="content">
                  <div className="icon-box">
                    <img src={icon4} alt="IT Support" />
                  </div>
                  <h4 className="mb-15"><Link className='link' to="#">IT Support</Link></h4>
                  <p className="mb-25">Our dedicated IT support team ensures your systems run smoothly, providing 24/7 assistance and proactive maintenance.</p>
                  <Link to="#" className="linked" style={{fontSize:'20px'}}>Read More <i className="fa fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Slider area end */}

      {/* Choose area start */}
      <section className="choose-section bg-color-1 section-space-top p-relative">
        <div className="bg-image" style={{ backgroundImage: `url(${chooseBg})` }}></div>
        <div className="shape-image" style={{ backgroundImage: `url(assets/imgs/shapes/shape-15.png)` }}></div>
        <div className="small-container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 p-relative section-space-medium-bottom">
              <div className="title-box mb-50 wow fadeInLeft" data-wow-delay=".5s">
                <span className="section-sub-title">Why Choose Us</span>
                <h3 className="section-title mt-10">What Makes Us Different</h3>
              </div>
              {/* Block 1 */}
              <div className="choose-area-icon-box mb-15 wow fadeInRight" data-wow-delay=".5s">
                <div className="icon-box p-relative">
                  <MdMiscellaneousServices size={30} />
                </div>
                <div className="content">
                  <h5>
                    <Link className='link' to="#">Comprehensive Services</Link>
                  </h5>
                  <p>Our diverse range of services is tailored to meet the unique needs of each client, ensuring comprehensive support and solutions.</p>
                </div>
              </div>
              <hr />
              {/* Block 2 */}
              <div className="choose-area-icon-box mb-15 wow fadeInRight" data-wow-delay=".7s">
                <div className="icon-box p-relative">
                  <MdAnnouncement size={30} />
                </div>
                <div className="content">
                  <h5>
                    <Link className='link'  to="#">Our Mission</Link>
                  </h5>
                  <p>At SoftMech Solutions, we strive to deliver innovative technology solutions that empower businesses and drive success.</p>
                </div>
              </div>
              <hr />
              {/* Block 3 */}
              <div className="choose-area-icon-box mb-15 wow fadeInRight" data-wow-delay=".9s">
                <div className="icon-box p-relative">
                  <MdSecurity size={30} />
                </div>
                <div className="content">
                  <h5>
                    <Link className='link'  to="#">Safety and Reliability</Link>
                  </h5>
                  <p>We prioritize safety and reliability in all our solutions, ensuring peace of mind for our clients through robust security measures.</p>
                </div>
              </div>
              <hr />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="1.2s">
              <figure className="image m-img">
                <img src={chooseImg} alt="Choose Us" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* Choose area end */}

      {/* Icon box counter area start */}
      <section className="icon-box-counter-section section-space">
        <div className="small-container">
          <div className="row g-4">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="icon-box-counter-area">
                <div className="icon-box">
                  <img src={icon7} alt="Successfully Completed Projects" />
                </div>
                <div className="content">
                  <h3><span className="counter">300</span>+</h3>
                  <span className="text-1">Successfully Completed Projects</span>
                </div>
              </div>
            </div>
            {/* Block 2 */}
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="icon-box-counter-area">
                <div className="icon-box">
                  <img src={icon4} alt="Company Staff" />
                </div>
                <div className="content">
                  <h3><span className="counter">450</span>+</h3>
                  <span className="text-1">Dedicated Staff</span>
                </div>
              </div>
            </div>
            {/* Block 3 */}
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="icon-box-counter-area">
                <div className="icon-box">
                  <img src={icon5} alt="Products Delivered" />
                </div>
                <div className="content">
                  <h3><span className="counter">3,150</span>+</h3>
                  <span className="text-1">Products Delivered</span>
                </div>
              </div>
            </div>
            {/* Block 4 */}
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="icon-box-counter-area">
                <div className="icon-box">
                  <img src={icon6} alt="Satisfied Clients" />
                </div>
                <div className="content">
                  <h3><span className="counter">6,561</span>+</h3>
                  <span className="text-1">Satisfied Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Icon box counter area end */}
    </main>
  );
};

export default Services;
