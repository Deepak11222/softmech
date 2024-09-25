import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa'; // Example for phone icon
import serviceImg1 from '../assets/imgs/service/service-details-1.jpg';
import serviceImg2 from '../assets/imgs/service/service-details-2.jpg';
import serviceImg3 from '../assets/imgs/service/service-details-3.jpg';
import serviceImg4 from '../assets/imgs/service/service-details-4.jpg';
import widgetImg from '../assets/imgs/service/service-widget-1.jpg';
import titleBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import titleBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const ServiceDetails = () => {
  return (
    <main>
      {/* Breadcrumb area start */}
      <div className="breadcrumb__area theme-bg-1 p-relative pt-160 pb-160">
        <div 
          className="breadcrumb__thumb" 
          style={{ backgroundImage: `url(${titleBg1})` }} 
        ></div>
        <div 
          className="breadcrumb__thumb_2" 
          style={{ backgroundImage: `url(${titleBg2})` }}
        ></div>
        <div className="small-container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper p-relative">
                <h2 className="breadcrumb__title">Service Details</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><a href="index.html">Home</a></span></li>
                      <li><span>Service Details</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area end */}

      <section className="service-details-page section-space">
        <div className="small-container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="service-details-page-content">
                <figure className="w-img">
                  <img src={serviceImg1} alt="Service Detail" />
                </figure>
                <h3 className="service-details-title mt-45 mb-25">IT Management</h3>
                <p className="mb-25">The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.</p>
                <p className="mb-35">lacus sed pretium pretium justo. Integer is vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat semper vel id turpis In a malesuada arcu ac hendrerit.</p>
                <div className="row">
                  <div className="col-lg-6">
                    <figure className="w-img">
                      <img src={serviceImg2} alt="Service Detail" />
                    </figure>
                  </div>
                  <div className="col-lg-6">
                    <figure className="w-img">
                      <img src={serviceImg3} alt="Service Detail" />
                    </figure>
                  </div>
                </div>
                <p className="mt-25 mb-35">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.</p>

                <h4>Choose Your Services</h4>

                <p className="mt-25 mb-35">lacus sed pretium pretium justo. Integer vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat is semper vel id turpis In a malesuada arcu ac hendrerit metus.</p>
                <div className="row">
                  <div className="col-lg-7">
                    <figure className="w-img">
                      <img src={serviceImg4} alt="Service Detail" />
                    </figure>
                  </div>
                  <div className="col-lg-5">
                    <ul className="service-details-page-list pt-20 pb-10">
                      <li>Technology Consultancy</li>
                      <li>Maintenance And Support</li>
                      <li>We Provide best services</li>
                      <li>Requirements Gathering</li>
                      <li>Business Growth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <aside>
                  <div className="service-widget-1 mb-30">
                    <h5>Main Services</h5>
                    <ul>
                      <li><a href="#"><span>Database Security</span><span><i className="icon-arrow-right-double"></i></span></a></li>
                      <li><a href="#"><span>IT Consultancy</span><span><i className="icon-arrow-right-double"></i></span></a></li>
                      <li><a className="active" href="#"><span>App Development</span><span><i className="icon-arrow-right-double"></i></span></a></li>
                      <li><a href="#"><span>UI/UX Design</span><span><i className="icon-arrow-right-double"></i></span></a></li>
                      <li><a href="#"><span>Cyber Security</span><span><i className="icon-arrow-right-double"></i></span></a></li>
                    </ul>
                  </div>
                  <div className="service-widget-2 mb-30">
                    <figure className="w-img">
                      <img src={widgetImg} alt="Widget" />
                    </figure>
                    <div className="content bg-color-1 text-center">
                      <div className="icon-box p-relative">
                        <FaPhoneVolume size={30} />
                      </div>
                      <h5>Need Help? Call Here</h5>
                      <a className="pt-25 pb-25 phone" href="tel:2085550112">+208-555-0112</a>
                      <div className="btn-box">
                        <a className="primary-btn-1 btn-hover" href="contact.html">
                          GET A QUOTE &nbsp; | <i className="icon-right-arrow"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="service-widget-3">
                    <div className="company-file">
                      <h6>Company File</h6>
                      <div className="file-size">
                        <span>(1.5MB)</span>
                        <span><a href="#"><i className="far fa-arrow-down-to-bracket"></i></a></span>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;