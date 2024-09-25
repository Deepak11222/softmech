import React from 'react';
import "./spacing.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1 from '../assets/imgs/project/project-1.jpg';
import project2 from '../assets/imgs/project/project-2.jpg';
import project3 from '../assets/imgs/project/project-3.jpg';
import project4 from '../assets/imgs/project/project-4.jpg';

const ProjectSliderSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <div className="slick-arrow project-1-button-next"><i className="icon-arrow-right-angle"></i></div>,
        prevArrow: <div className="slick-arrow project-1-button-prev"><i className="icon-arrow-left-angle"></i></div>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 slide on smaller screens
                }
            }
        ]
    };
    

    const projects = [
        { src: project1, title: 'Platform Integration', subtitle: 'Technology', link: 'project-details.html' },
        { src: project2, title: 'IT Management', subtitle: 'Technology', link: 'project-details.html' },
        { src: project3, title: 'Web Development', subtitle: 'Solution', link: 'project-details.html' },
        { src: project4, title: 'Network', subtitle: 'Security', link: 'project-details.html' },
    ];

    return (
        <section className="project-slider-section section-space fix">
            <div className="small-container">
                <div className="row">
                    <div className="col-xxl-6">
                        <div className="title-box mb-50 wow fadeInLeft" data-wow-delay=".5s">
                            <span className="section-sub-title no-border">PROJECTS</span>
                            <h3 className="section-title mt-10">Explore Our Recent Projects</h3>
                        </div>
                    </div>
                    <div className="col-xxl-6 text-end">
                        <div className="project_1_navigation__wrapprer position-relative z-1 mt-30">
                            {/* Navigation handled in settings */}
                        </div>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="swiper-slide">
                        <div className="project-slider-area p-relative">
                            <figure className="image m-img">
                                <img src={project.src} alt={project.title} />
                            </figure>
                            <div className="content-area">
                                <div className="title-area">
                                    <h6 className="mb-5">{project.subtitle}</h6>
                                    <h5><a href={project.link}>{project.title}</a></h5>
                                </div>
                                <div className="icon-area">
                                    <a href={project.link}><i className="icon-arrow-up"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default ProjectSliderSection;