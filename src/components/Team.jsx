import React from 'react';
import { Link } from 'react-router-dom';
import teamImg1 from '../assets/imgs/team/team-1.jpg';
import teamImg2 from '../assets/imgs/team/team-2.jpg';
import teamImg3 from '../assets/imgs/team/team-3.jpg';
import teamImg4 from '../assets/imgs/team/team-4.jpg';
import teamImg5 from '../assets/imgs/team/team-5.jpg';
import teamImg6 from '../assets/imgs/team/team-6.jpg';
import titleBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import titleBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const teamMembers = [
  {
    name: 'Shital Dubey',
    role: 'CEO',
    img: teamImg4,
  },
  {
    name: 'Abhishek Tiwari',
    role: 'CFO',
    img: teamImg4,
  },
  {
    name: 'Anshuk',
    role: 'BDO',
    img: teamImg4,
  },
  {
    name: 'Sunil Sharma',
    role: 'App Developer',
    img: teamImg2,
  },
  {
    name: 'Deepak Pal',
    role: 'Web Developer',
    img: teamImg3,
  },
  {
    name: 'Vijay',
    role: 'Web Developer',
    img: teamImg4,
  }
];

const TeamSection = () => {
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
                <h2 className="breadcrumb__title">Team</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link className="links" to="/">Home</Link></span></li>
                      <i className="fa fa-arrow-right"></i><li><span>Team</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area end */}

      {/* Team area start */}
      <section className="team-section p-relative section-space">
        <div className="small-container">
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-15" key={index}>
                <div className="team-area-box p-relative mb-60 wow fadeInLeft" data-wow-delay=".7s">
                  <figure className="image w-img p-relative">
                    <img src={member.img} alt={member.name} />
                  </figure>
                  <div className="content">
                    <div className="author-info">
                      <h5 className="mb-5">
                        <Link to="/team-details">{member.name}</Link>
                      </h5>
                      <span>{member.role}</span>
                    </div>
                    {/* <div className="social-links p-relative">
                      <span><i className="icon-share"></i></span>
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team area end */}
    </main>
  );
};

export default TeamSection;