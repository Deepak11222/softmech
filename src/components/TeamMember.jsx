import React from 'react';
import teamMemberImage from '../assets/imgs/team/team-single.jpg';
import breadcrumbBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import breadcrumbBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const TeamMemberDetails = () => {
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
                <h2 className="breadcrumb__title">Our Team</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><a className='links' href="index.html">Home</a></span></li>
                      <i className="fa fa-arrow-right"></i>
                      <li><span>Team Details</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area end */}

      <section className="team-details-page section-space-top">
        <div className="small-container">
          <div className="team-member-info mb-80">
            <div className="row">
              <div className="col-xxl-5">
                <div className="team-member-info-image-area p-relative">
                  <figure className="w-img">
                    <img src={teamMemberImage} alt="Kristin Watson" />
                  </figure>
                  <ul className="team-member-socials-icon">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-7 pl-20">
                <h5 className="pt-20">Kristin Watson</h5>
                <h6 className="mb-25 mt-20 designation">Senior QA Engineer</h6>
                <hr />
                <p className="mt-40 mb-40">
                  Kristin is dedicated to ensuring quality at every stage of development. 
                  With a keen eye for detail and a commitment to excellence, she thrives in fast-paced environments.
                </p>

                {/* Progress Bars */}
                <ProgressBar title="Quality Assurance" value={95} />
                <ProgressBar title="Test Automation" value={85} />
                <ProgressBar title="Problem Solving" value={98} />
              </div>
            </div>
          </div>

          <div className="team-member-info-details pt-60 pb-60">
            <h5 className="mb-30">Education Background</h5>
            <hr />
            <EducationInfo title="Bachelor's in Computer Science" yearRange="2012 - 2016" />
            <p className="mb-50">
              An extensive understanding of software development principles, 
              which laid the groundwork for a successful career in quality assurance.
            </p>

            <EducationInfo title="Certification in Software Testing" yearRange="2017" />
            <p>
              Specialized training in testing methodologies and best practices 
              to enhance the quality of software products.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

// ProgressBar component
const ProgressBar = ({ title, value }) => (
  <div className="team-details-progress-bar p-relative mb-30">
    <h6>{title}</h6>
    <div className="progress">
      <div 
        className="progress-bar wow slideInLeft" 
        role="progressbar" 
        style={{ width: `${value}%` }}
        aria-valuenow={value} 
        aria-valuemin="0" 
        aria-valuemax="100"
      ></div>
    </div>
    <span className="progress-count">{value}%</span>
  </div>
);

// EducationInfo component
const EducationInfo = ({ title, yearRange }) => (
  <div className="edu-info mb-30 mt-30">
    <h6>{title}</h6>
    <span>{yearRange}</span>
  </div>
);

export default TeamMemberDetails;
