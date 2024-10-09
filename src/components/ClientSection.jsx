import React from 'react';
import '../App.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SiIcomoon } from "react-icons/si";
import incomeTaxLogo from '../assets/imgs/clients/income-tax.png';
import rakshakLogo from '../assets/imgs/clients/rakshak.png'; 
import indianRailwaysLogo from '../assets/imgs/clients/indian-railway.png';
import customsLogo from '../assets/imgs/clients/Custom.jpeg'; 
import RImage from '../assets/imgs/clients/R.jpg'; // Background image

// List of clients, including the new ones
const clients = [
    {
        img: incomeTaxLogo,
        title: 'Income Tax, GOI',
        description: 'A key government organization managing tax collection and enforcement.',
        link: 'client-details.html',
    },
    {
        img: rakshakLogo,
        title: 'Rakshak Securitas',
        description: 'A leading security services provider ensuring safety and security.',
        link: 'client-details.html',
    },
    {
        img: indianRailwaysLogo,
        title: 'Indian Railways',
        description: 'One of the largest railway networks in the world, connecting millions.',
        link: 'client-details.html',
    },
    {
        img: customsLogo,
        title: 'Custom & Excise GOI',
        description: 'Regulatory body managing customs and excise duties in India.',
        link: 'client-details.html',
    },
    {
        img: null, // No image available
        title: 'Impression Services Pvt Ltd',
        description: 'A service provider specializing in printing and media solutions.',
        link: 'client-details.html',
    },
    {
        img: null, // No image available
        title: 'Dynamic Enterprises Ratlam',
        description: 'A leading enterprise offering dynamic solutions for various industries.',
        link: 'client-details.html',
    },
    {
        img: null, // No image available
        title: 'Young Bengal Co Operative Labour Contract Society Limited',
        description: 'Providing labor contract services with a focus on quality and efficiency.',
        link: 'client-details.html',
    },
    {
        img: null, // No image available
        title: 'Nishant Facility Management Pvt Ltd',
        description: 'A facility management company offering comprehensive services.',
        link: 'client-details.html',
    },
];

const ClientSection = () => {
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
        <section 
            className="client-section p-relative section-space-bottom fix"
            style={{ backgroundImage: `url(${RImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="small-container">
                <div className="client-title-box mb-50">
                    <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
                        <span className="section-sub-title no-border" style={{color:'white'}}>
                            <SiIcomoon style={{ color: 'White' }} /> OUR ESTEEMED CLIENTS
                        </span>
                        <h3 className="section-title mt-10" style={{color:'white'}}>Our Clients</h3>
                    </div>
                </div>

                <Slider {...settings}>
    {clients.map((client, index) => (
        <div key={index} className="d-flex justify-content-center" style={{ width: '100%', display: 'inline-block' }}>
            <div style={{
                backgroundColor: 'white', 
                padding: '20px', 
                borderRadius: '8px', 
                textAlign: 'center', 
                height: '250px', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 5px'
            }}>
                {client.img ? (
                    <img 
                        src={client.img} 
                        alt={client.title} 
                        style={{ maxHeight: '80px', maxWidth: '100%', objectFit: 'contain', marginBottom: '10px' }} 
                    />
                ) : (
                    <div 
                        style={{
                            height: '80px', 
                            width: '100%', 
                            backgroundColor: '#f0f0f0', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            marginBottom: '10px', 
                            borderRadius: '4px'
                        }}
                    >
                        <span style={{ color: '#333', fontSize: '16px', fontWeight: 'bold' }}>
                            {client.title}
                        </span>
                    </div>
                )}
                <h5 className="tech-software__heading" style={{ margin: '0px' }}>
                    {client.title}
                </h5>
                <p style={{ marginTop: '5px' }}>{client.description}</p>
            </div>
        </div>
    ))}
</Slider>

            </div>
        </section>
    );
};

export default ClientSection;