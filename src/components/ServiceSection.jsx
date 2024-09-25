import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SiIcomoon } from "react-icons/si";
import service1 from '../assets/imgs/service/service-4.jpg';
import service2 from '../assets/imgs/service/service-5.jpg';
import service3 from '../assets/imgs/service/service-6.jpg';
import service4 from '../assets/imgs/service/service-7.jpg';
import icon1 from '../assets/imgs/icon/icon.png';
import icon2 from '../assets/imgs/icon/icon-2.png';
import icon3 from '../assets/imgs/icon/icon-3.png';
import aiIcon from '../assets/imgs/icon/icon-2.png'; // AI & ML icon
import iotIcon from '../assets/imgs/icon/icon-3.png'; // IoT icon
import teamIcon from '../assets/imgs/icon/icon.png'; // Dedicated team icon

const services = [
    {
        img: service1,
        icon: icon1,
        title: 'Database Security',
        description: 'Comprehensive solutions to safeguard your data and ensure compliance. We offer encryption, access controls, and regular audits to protect sensitive information.',
        link: 'service-details.html',
    },
    {
        img: service2,
        icon: icon2,
        title: 'IT Consultancy',
        description: 'Tailored guidance to enhance your IT strategy and operations. Our consultancy aligns technology with business goals, helping you make informed IT decisions.',
        link: 'service-details.html',
    },
    {
        img: service3,
        icon: icon3,
        title: 'App Development',
        description: 'Custom applications designed to meet specific business needs. Our services cover everything from ideation and design to development and deployment.',
        link: 'service-details.html',
    },
    {
        img: service4,
        icon: icon1,
        title: 'Technology Consultancy',
        description: 'Expert advice for technology investments that drive growth. We provide insights on tech trends and how to leverage them to improve business efficiency.',
        link: 'service-details.html',
    },
    {
        img: service1,
        icon: aiIcon,
        title: 'AI & ML Solutions',
        description: 'Utilize artificial intelligence and machine learning to enhance business processes. Our solutions enable predictive analytics and automate repetitive tasks effectively.',
        link: 'service-details.html',
    },
    {
        img: service2,
        icon: iotIcon,
        title: 'IoT Development',
        description: 'Connect devices to create intelligent solutions for operations. Our IoT services integrate with your business for real-time data and improved decision-making.',
        link: 'service-details.html',
    },
    {
        img: service3,
        icon: teamIcon,
        title: 'Dedicated Development Team',
        description: 'A dedicated team that collaborates seamlessly with you. Our teams provide specialized skills and work as an extension of your in-house staff for project success.',
        link: 'service-details.html',
    },
];
const ServiceSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="service-section-three p-relative section-space-bottom bg-color-1 fix">
            <div className="shape-1" style={{ backgroundImage: 'url(assets/imgs/shapes/shape-46.png)' }}></div>
            <div className="shape-2" style={{ backgroundImage: 'url(assets/imgs/shapes/shape-47.png)' }}></div>
            <div className="shape-3" style={{ backgroundImage: 'url(assets/imgs/shapes/shape-48.png)' }}></div>

            <div className="small-container">
                <div className="service-3-title-box mb-50">
                    <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title no-border">
                            <SiIcomoon style={{ color: '#3c72fc' }} /> SERVICES WE’RE OFFERING
                        </span>
                        <h3 className="section-title mt-10">Our Exclusive Services</h3>
                    </div>
                    {/* <div className="service_1_navigation__wrapprer position-relative z-1">
                        <div className="common-slider-navigation">
                            <button className="service-active-2-button-prev" aria-label="Previous slide">
                                <i className="icon-arrow-left-angle"></i>
                            </button>
                            <button className="service-active-2-button-next" aria-label="Next slide">
                                <i className="icon-arrow-right-angle"></i>
                            </button>
                        </div>
                    </div> */}
                </div>

                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className="service-3-box-area p-relative">
                            <a className="image w-img" href={service.link}>
                                <img src={service.img} alt={service.title} />
                            </a>
                            <div className="inner text-center">
                                <div className="content-box">
                                    <div className="icon-box">
                                        <img src={service.icon} alt="icon" />
                                    </div>
                                    <h4>
                                        <a className="linked" href={service.link}>{service.title}</a>
                                    </h4>
                                    <p className="mb-25">{service.description}</p>
                                </div>
                                <div className="btn-area">
                                    <a className='linked' href={service.link}>Service details <i className="icon-arrow-right-double"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ServiceSection;