import React from 'react';
import teamMemberImage from '../assets/imgs/team/team-single.jpg';
import breadcrumbBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import breadcrumbBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const TeamMemberDetails = () => {
  return (
    <main>
      {/* Breadcrumb area start */}
      <div className="breadcrumb__area theme-bg-1 p-relative pt-160 pb-160">
        <div className="breadcrumb__thumb" style={{ backgroundImage: `url(${breadcrumbBg1})` }}></div>
        <div className="breadcrumb__thumb_2" style={{ backgroundImage: `url(${breadcrumbBg2})` }}></div>
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
          <div className="team-member-info mb-40" style={{ maxWidth: '480px', margin: 'auto' }}>
            <div className="row">
              <div className="col-xxl-5">
                <div className="team-member-info-image-area p-relative" style={{ width: '80px', height: '80px', overflow: 'hidden', borderRadius: '10px' }}>
                  <figure className="w-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                    <img src={teamMemberImage} alt="Kristin Watson" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </figure>
                  <ul className="team-member-socials-icon">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-7 pl-10">
                <h5 style={{ fontSize: '14px', marginBottom: '2px' }}>Kristin Watson</h5>
                <h6 style={{ margin: '0', fontSize: '12px', color: '#777' }}>Senior QA Engineer</h6>
                <hr />
                <p className="mt-5 mb-15" style={{ fontSize: '12px', lineHeight: '1.3' }}>
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

          <div className="team-member-info-details pt-40 pb-40">
            <h5 className="mb-20">Education Background</h5>
            <hr />
            <EducationInfo title="Bachelor's in Computer Science" yearRange="2012 - 2016" />
            <p className="mb-40" style={{ fontSize: '12px' }}>
              An extensive understanding of software development principles, 
              which laid the groundwork for a successful career in quality assurance.
            </p>

            <EducationInfo title="Certification in Software Testing" yearRange="2017" />
            <p style={{ fontSize: '12px' }}>
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
  <div className="team-details-progress-bar p-relative mb-20">
    <h6 style={{ fontSize: '12px' }}>{title}</h6>
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
    <span className="progress-count" style={{ fontSize: '12px' }}>{value}%</span>
  </div>
);

// EducationInfo component
const EducationInfo = ({ title, yearRange }) => (
  <div className="edu-info mb-20 mt-20">
    <h6 style={{ fontSize: '12px' }}>{title}</h6>
    <span style={{ fontSize: '12px' }}>{yearRange}</span>
  </div>
);

export default TeamMemberDetails;
