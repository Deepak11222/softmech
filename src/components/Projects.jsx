import React from 'react';
import projectImg1 from '../assets/imgs/project/project-1.jpg';
import projectImg2 from '../assets/imgs/project/project-2.jpg';
import projectImg3 from '../assets/imgs/project/project-3.jpg';
import projectImg4 from '../assets/imgs/project/project-4.jpg';
import projectImg9 from '../assets/imgs/project/project-9.jpg';
import projectImg10 from '../assets/imgs/project/project-10.jpg';
import titleBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import titleBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const Projects = () => {
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
                <h2 className="breadcrumb__title">Projects</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                    <li><span><a className='links' href="index.html">Home</a></span></li>
                    <i className="fa fa-arrow-right"></i><li><span>Project</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area end */}

      {/* Project slider two area start */}
      <section className="project-page-section section-space p-relative fix">
        <div className="small-container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
              <div className="project-slider-area p-relative">
                <figure className="image m-img">
                  <img src={projectImg1} alt="Platform Integration" />
                </figure>
                <div className="content-area">
                  <div className="title-area">
                    <h6 className="mb-5">Technology</h6>
                    <h5><a href="project-details.html">Platform Integration</a></h5>
                  </div>
                  <div className="icon-area">
                    <a href="project-details.html"><i className="icon-arrow-up"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
              <div className="project-slider-area p-relative">
                <figure className="image m-img">
                  <img src={projectImg2} alt="IT Management" />
                </figure>
                <div className="content-area">
                  <div className="title-area">
                    <h6 className="mb-5">Technology</h6>
                    <h5><a href="project-details.html">IT Management</a></h5>
                  </div>
                  <div className="icon-area">
                    <a href="project-details.html"><i className="icon-arrow-up"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
              <div className="project-slider-area p-relative">
                <figure className="image m-img">
                  <img src={projectImg3} alt="Web Development" />
                </figure>
                <div className="content-area">
                  <div className="title-area">
                    <h6 className="mb-5">Solution</h6>
                    <h5><a href="project-details.html">Web Development</a></h5>
                  </div>
                  <div className="icon-area">
                    <a href="project-details.html"><i className="icon-arrow-up"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
              <div className="project-slider-area p-relative">
                <figure className="image m-img">
                  <img src={projectImg4} alt="Network Security" />
                </figure>
                <div className="content-area">
                  <div className="title-area">
                    <h6 className="mb-5">Security</h6>
                    <h5><a href="project-details.html">Network Security</a></h5>
                  </div>
                  <div className="icon-area">
                    <a href="project-details.html"><i className="icon-arrow-up"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
              <div className="project-slider-area p-relative">
                <figure className="image m-img">
                  <img src={projectImg9} alt="Product Design" />
                </figure>
                <div className="content-area">
                  <div className="title-area">
                    <h6 className="mb-5">DEVELOPMENT</h6>
                    <h5><a href="project-details.html">Product Design</a></h5>
                  </div>
                  <div className="icon-area">
                    <a href="project-details.html"><i className="icon-arrow-up"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-15">
              <div className="project-slider-area p-relative">
                <figure className="image m-img">
                  <img src={projectImg10} alt="UI/UX Design" />
                </figure>
                <div className="content-area">
                  <div className="title-area">
                    <h6 className="mb-5">Design</h6>
                    <h5><a href="project-details.html">UI/UX Design</a></h5>
                  </div>
                  <div className="icon-area">
                    <a href="project-details.html"><i className="icon-arrow-up"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project slider two area end */}
    </main>
  );
};

export default Projects;