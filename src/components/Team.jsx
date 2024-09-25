import React from 'react';
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
    name: 'Kristin Watson',
    role: 'Customer support',
    img: teamImg1,
  },
  {
    name: 'Ralph Edwards',
    role: 'Web Designer',
    img: teamImg2,
  },
  {
    name: 'Annette Black',
    role: 'UI/UX Designer',
    img: teamImg3,
  },
  {
    name: 'Albert Flores',
    role: 'Software engineer',
    img: teamImg4,
  },
  {
    name: 'Dianne Russell',
    role: 'Marketing manager',
    img: teamImg5,
  },
  {
    name: 'Eleanor Pena',
    role: 'Programmer',
    img: teamImg6,
  },
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
                    <li><span><a className='links' href="index.html">Home</a></span></li>
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
                        <a href="team-details.html">{member.name}</a>
                      </h5>
                      <span>{member.role}</span>
                    </div>
                    <div className="social-links p-relative">
                      <span><i className="icon-share"></i></span>
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
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