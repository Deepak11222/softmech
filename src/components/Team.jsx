import React from 'react';
import { Link } from 'react-router-dom';
import teamImg1 from '../assets/imgs/team/team-1.jpg';
import teamImg2 from '../assets/imgs/team/team-2.jpg';
import teamImg3 from '../assets/imgs/team/team-3.jpg';
import teamImg4 from '../assets/imgs/team/team-4.jpg';
import titleBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import titleBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const teamMembers = [
  {
    name: 'Shital Pratap Dubey',
    role: 'CEO',
    img: teamImg4,
  },
  {
    name: 'Abhishek Tiwari',
    role: 'CFO',
    img: teamImg4,
  },
  {
    name: 'Anshuk Gupta',
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
                <h2 className="breadcrumb__title">Our Team</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><Link className="links" to="/">Home</Link></span></li>
                      <i className="fa fa-arrow-right"></i><li><span>Our Team</span></li>
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
      <section className="team-experts-wrapper section-padding">
        <div className="container">
          <div className="col-12 col-xl-12 text-center">
            <div className="section-title" style={{ marginBottom: '30px' }}>
              <span style={{ display: 'inline-block', marginBottom: '30px' }}>Our Amazing Team</span>
            </div>
          </div>
          
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
              <div className="col-md-6 col-xl-3" key={index}>
                <div className="single-team-member" style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '12px', marginBottom: '15px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s', maxHeight: '350px', overflow: 'hidden' }}> {/* Reduced maxHeight */}
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    style={{ width: '100%', height: 'auto', maxHeight: '260px', objectFit: 'cover', marginBottom: '8px' }} /> {/* Reduced maxHeight of image */}
                  <div className="member-info" style={{ marginTop: '3px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>{member.name}</h4>
                    <p style={{ margin: '3px 0', color: '#777', fontSize: '14px' }}>{member.role}</p>
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