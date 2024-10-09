import React from 'react';
import { Link } from 'react-router-dom';
import { MdMiscellaneousServices } from "react-icons/md";
import { MdSecurity } from 'react-icons/md'; // Safety and Reliability
import { MdAnnouncement } from 'react-icons/md'; // Mission Statement
import aboutImage1 from '../assets/imgs/resources/page-title-bg-1.png';
import aboutImage2 from '../assets/imgs/resources/page-title-bg-2.png';
import aboutImage3 from '../assets/imgs/bg/bg-shape-1.png';
import aboutImage4 from '../assets/imgs/shapes/shape-6.png';
import aboutImage5 from '../assets/imgs/about/about-1.jpg';
import aboutImage6 from '../assets/imgs/about/about-2.jpg';
import aboutImage7 from '../assets/imgs/about/about-three-icon1.png';
import aboutImage8 from '../assets/imgs/about/about-three-icon2.png';
import chooseBg from '../assets/imgs/bg/choose-bg.png';
import chooseImg from '../assets/imgs/resources/choose-1.png';
import chooseBgImage from '../assets/imgs/bg/choose-bg.png';
import chooseShapeImage from '../assets/imgs/shapes/shape-15.png';
import processBg from '../assets/imgs/bg/process-bg.png';
import lineBg from '../assets/imgs/bg/line.png';
import icon1 from '../assets/imgs/icon/icon-4.png';
import icon2 from '../assets/imgs/icon/icon-5.png';
import icon3 from '../assets/imgs/icon/icon-6.png';
import chooseImage from '../assets/imgs/resources/choose-1.png';
import shape1 from '../assets/imgs/shapes/shape-13.png';
import shape2 from '../assets/imgs/shapes/shape-14.png';
import team1 from '../assets/imgs/team/team-1.jpg';
import team2 from '../assets/imgs/team/team-2.jpg';
import team3 from '../assets/imgs/team/team-3.jpg';

const AboutPage = () => {
  return (
    <main>
   <div className="breadcrumb__area theme-bg-1 p-relative pt-160 pb-160">
        <div className="breadcrumb__thumb" style={{ backgroundImage: `url(${aboutImage1})` }}></div>
        <div className="breadcrumb__thumb_2" style={{ backgroundImage: `url(${aboutImage2})` }}></div>
        <div className="small-container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper p-relative">
                <h2 className="breadcrumb__title">About</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                    <li><span><Link className='links' to="#">Home</Link></span></li>
                    <i className="fa fa-arrow-right"></i><li><span>About</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area end */}

      {/* About us area start */}
      <section className="about-us-section section-space p-relative">
        <div className="shape-area">
          <div className="shape-1" style={{ backgroundImage: `url(${aboutImage3})` }}></div>
          <div className="shape-2 quote-animation" style={{ backgroundImage: 'url(assets/imgs/shapes/shape-7.png)' }}></div>
          <div className="shape-3 quote-animation" style={{ backgroundImage: 'url(assets/imgs/shapes/shape-8.png)' }}></div>
        </div>
        <div className="small-container">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              {/* Image area start */}
              <div className="about-us-image-area p-relative wow fadeInRight" data-wow-delay=".5s">
                <div className="border-shape" style={{ backgroundImage: `url(${aboutImage4})` }}></div>
                <figure className="image-1">
                  <img src={aboutImage5} alt="SoftMech Solutions Team" />
                </figure>
                <div className="image-2-area">
                  <div className="image-2 p-relative">
                    <img src={aboutImage6} alt="Innovative Solutions" />
                    
                  </div>
                </div>
                <div className="working-area float-bob-y">
                  <div className="inner p-relative">
                    <div className="icon-box">
                      <i className="icon-prize"></i>
                      <h4><span className="counter">5+</span> Years</h4>
                      <p>Experience in IT Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image area end */}
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              {/* Content start */}
              <div className="about-us-content-area p-relative z-1 pl-30">
                <div className="title-box mb-35 wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title">About Us</span>
                  <h3 className="section-title mt-10">Your Trusted IT Partner</h3>
                </div>
                <p className="mb-35 wow fadeInLeft" data-wow-delay=".5s">
                  At SoftMech Solutions, we pride ourselves on being a premier IT service provider dedicated to delivering innovative and efficient solutions tailored to our clients' needs. With over 5+ years of experience in the industry, our team of experts is equipped with the skills and knowledge to help your business thrive in the digital age.
                </p>
                <div className="icon-box mb-20 wow fadeInLeft" data-wow-delay=".8s">
                  <div className="icon">
                    <img src={aboutImage7} alt="Business Growth" />
                  </div>
                  <div className="content">
                    <h5><Link className='linked' to="#">Business Growth</Link></h5>
                    <p>We empower businesses to scale by leveraging the latest technologies and best practices in the IT sector.</p>
                  </div>
                </div>
                <div className="icon-box mb-20 wow fadeInLeft" data-wow-delay=".9s">
                  <div className="icon">
                    <img src={aboutImage8} alt="Technology Consultancy" />
                  </div>
                  <div className="content">
                    <h5><Link className='linked' to="#">Technology Consultancy</Link></h5>
                    <p>Our consultancy services guide you in making informed technology choices that align with your business goals.</p>
                  </div>
                </div>
              </div>
              {/* Content end */}
            </div>
          </div>
        </div>
      </section>
      {/* About us area end */}

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
                    <Link className='link' to="#">Commercial Service</Link>
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
                    <Link className='link'  to="#">Mission Statement</Link>
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

      {/* Work process area start */}
      <section 
        className="work-process-section section-space p-relative" 
        style={{ backgroundImage: `url(${processBg})` }}
      >
        <div 
          className="shape-1" 
          style={{ backgroundImage: `url(${lineBg})` }}
        ></div>
        <div className="small-container">
          <div className="title-box text-center mb-60 wow fadeInLeft" data-wow-delay=".5s">
            <span className="section-sub-title">Working Process</span>
            <h3 className="section-title mt-10">Our Development Process</h3>
          </div>
          <div className="row g-4">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="work-process-box text-center">
                <div className="icon-box p-relative">
                  <img src={icon1} alt="Define Requirements" />
                  <span>1</span>
                </div>
                <div className="content">
                  <h4 className="pt-25 pb-25">Define Requirements</h4>
                  <p>We engage with you to understand your needs, ensuring we deliver the most effective solutions.</p>
                </div>
              </div>
            </div>
            {/* block */}
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="work-process-box text-center">
                <div className="icon-box p-relative">
                  <img src={icon2} alt="Design & Prototyping" />
                  <span>2</span>
                </div>
                <div className="content">
                  <h4 className="pt-25 pb-25">Design &amp; Prototyping</h4>
                  <p>We create detailed prototypes to visualize the end product and refine based on your feedback.</p>
                </div>
              </div>
            </div>
            {/* block */}
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="work-process-box text-center">
                <div className="icon-box p-relative">
                  <img src={icon3} alt="Final Solution" />
                  <span>3</span>
                </div>
                <div className="content">
                  <h4 className="pt-25 pb-25">Final Solution</h4>
                  <p>We deliver the final product, ensuring it meets all quality standards and your business requirements.</p>
                </div>
              </div>
            </div>
            {/* block */}
          </div>
        </div>
      </section>

      <section className="team-section p-relative section-space">
  <div className="shape-1" style={{ backgroundImage: `url(${shape1})` }}></div>
  <div className="shape-2 float-bob-y" style={{ backgroundImage: `url(${shape2})` }}></div>
  <div className="small-container">
    <div className="title-box text-center mb-50 wow fadeInLeft" data-wow-delay=".5s">
      <span className="section-sub-title">OUR team</span>
      <h3 className="section-title mt-10">Our Leadership Team</h3>
    </div>
    <div className="row g-4">
      {/* Team Member 1 */}
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
        <div className="team-area-box p-relative mb-60 wow fadeInLeft" data-wow-delay=".7s">
          <figure className="image w-img p-relative">
            <img src={team2} alt="Kristin Watson" />
          </figure>
          <div className="content text-center">
            <div className="author-info">
              <h5 className="mb-5"><Link className='link' to="#">Shital Dubey</Link></h5>
              <span>CEO</span>
            </div>
          </div>
        </div>
      </div>
      {/* Team Member 2 */}
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
        <div className="team-area-box p-relative mb-60 wow fadeInDown" data-wow-delay=".9s">
          <figure className="image w-img p-relative">
            <img src={team2} alt="Annette Black" />
          </figure>
          <div className="content text-center">
            <div className="author-info">
              <h5 className="mb-5"><Link className='link' to="#">Anshuk</Link></h5>
              <span>COO</span>
            </div>
          </div>
        </div>
      </div>
      {/* Team Member 3 */}
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
        <div className="team-area-box p-relative mb-60 wow fadeInRight" data-wow-delay="1s">
          <figure className="image w-img p-relative">
            <img src={team3} alt="Ralph Edwards" />
          </figure>
          <div className="content text-center">
            <div className="author-info">
              <h5 className="mb-5"><Link className='link' to="#">Sunil Sharma</Link></h5>
              <span>App Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Work process area end */}
    </main>
  );
};

export default AboutPage;