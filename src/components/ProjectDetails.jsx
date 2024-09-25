import React from 'react';
import projectDetailImg1 from '../assets/imgs/project/project-details-1.jpg';
import projectDetailImg2 from '../assets/imgs/project/project-details-2.jpg';
import projectDetailImg3 from '../assets/imgs/project/project-details-3.jpg';
import serviceWidgetImg from '../assets/imgs/service/service-widget-1.jpg';
import titleBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import titleBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const ProjectDetails = () => {
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
                <h2 className="breadcrumb__title">Project Details</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><a className='links' href="index.html">Home</a></span></li>
                      <i className="fa fa-arrow-right"></i>
                      <li><span>Project Details</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area end */}

      <section className="project-details-page section-space">
        <div className="small-container">
          <figure className="w-img">
            <img src={projectDetailImg1} alt="Project Overview" />
          </figure>
          <div className="row mt-50">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="project-details-page-content">
                <div className="project-info mb-50">
                  <h6><span>Year:</span> 2022-2024</h6>
                  <h6><span>Client:</span> Robert Fox</h6>
                  <h6><span>Category:</span> Wotech</h6>
                  <h6><span>Location:</span> Fort Kde, USA</h6>
                </div>
                <h5 className="project-details-page-title">Project Overview</h5>

                <p className="mt-30 mb-30">
                  This project involves a comprehensive approach to improving our client's operational efficiency through innovative IT solutions tailored to their needs. 
                </p>
                <p>
                  Our methodology emphasizes strategic planning, execution, and continuous support, ensuring the client achieves sustainable growth and success in their market.
                </p>

                <h4 className="mt-35 mb-25">The Challenge</h4>

                <p>
                  The project posed several challenges, including integrating diverse technologies and ensuring seamless collaboration across teams. Our team effectively navigated these challenges through diligent planning and robust communication.
                </p>

                <div className="row">
                  <div className="col-lg-7">
                    <figure className="w-img">
                      <img src={projectDetailImg2} alt="Project Details" />
                    </figure>
                  </div>
                  <div className="col-lg-5">
                    <ul className="service-details-page-list pt-20 pb-10">
                      <li>Technology Consultancy</li>
                      <li>Maintenance and Support</li>
                      <li>Custom IT Solutions</li>
                      <li>Requirements Gathering</li>
                      <li>Performance Optimization</li>
                      <li>Cybersecurity Services</li>
                    </ul>
                  </div>
                </div>

                <h4 className="mt-35 mb-25">Final Project Insights</h4>
                <p className="mb-30">
                  Our collaborative efforts culminated in a highly successful project that exceeded client expectations and positioned them for future success.
                </p>

                <div className="project-details-video p-relative">
                  <figure className="image w-img">
                    <img src={projectDetailImg3} alt="Project Video Thumbnail" />
                  </figure>
                  <div className="play-btn">
                    <div className="video_player_btn">
                      <a href="https://www.youtube.com/watch?v=eEzD-Y97ges" className="popup-video">
                        <i className="icon-play"></i>
                      </a>
                    </div>
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
                      <li>
                        <a className='link' href="#">
                          <span>Database Security</span>
                          <span><i className="icon-arrow-right-double"></i></span>
                        </a>
                      </li>
                      <li>
                        <a className='link' href="#">
                          <span>IT Consultancy</span>
                          <span><i className="icon-arrow-right-double"></i></span>
                        </a>
                      </li>
                      <li>
                        <a className='link' href="#">
                          <span>App Development</span>
                          <span><i className="icon-arrow-right-double"></i></span>
                        </a>
                      </li>
                      <li>
                        <a className='link' href="#">
                          <span>UI/UX Design</span>
                          <span><i className="icon-arrow-right-double"></i></span>
                        </a>
                      </li>
                      <li>
                        <a className='link' href="#">
                          <span>Cybersecurity</span>
                          <span><i className="icon-arrow-right-double"></i></span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="service-widget-2 mb-30">
                    <figure className="w-img">
                      <img src={serviceWidgetImg} alt="Service Widget" />
                    </figure>
                    <div className="content bg-color-1 text-center">
                      <div className="icon-box p-relative">
                        <i className="fal fa-phone-volume"></i>
                      </div>
                      <h5>Need Help? Call Here</h5>
                      <a className="pt-25 pb-25 phone" href="tel:2085550112">+208-555-0112</a>
                      <div className="btn-box">
                        <a className="primary-btn-1 btn-hover" href="contact.html">
                          GET A QUOTE &nbsp; | <i className="icon-right-arrow"></i>
                          <span style={{ top: '147.172px', left: '108.5px' }}></span>
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

export default ProjectDetails;
