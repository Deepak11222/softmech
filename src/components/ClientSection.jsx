import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import incomeTaxLogo from '../assets/imgs/clients/income-tax.png';
import rakshakLogo from '../assets/imgs/clients/rakshak.png'; 
import indianRailwaysLogo from '../assets/imgs/clients/indian-railway.png';
import customsLogo from '../assets/imgs/clients/Custom.jpeg'; 
import R from '../assets/imgs/clients/R.jpg'; 

const clients = [
  {
    name: 'Income Tax, GOI',
    img: incomeTaxLogo,
  },
  {
    name: 'Rakshak Securitas',
    img: rakshakLogo,
  },
  {
    name: 'Indian Railways',
    img: indianRailwaysLogo,
  },
  {
    name: 'Custom & Excise GOI',
    img: customsLogo,
  },
];

const TechSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section
      className="tech tech--bg pb-80 pt-80 parallaxie"
      style={{
        backgroundImage: `url(${R})`,
        marginBottom: "45px",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row" style={{marginBottom:"60px"}}>
          <div className="col-lg-10 offset-lg-1">
            <div className="section-software section-software__light text-center mb-20">
              <span className="title title--small section-software__title_small" style={{color:"white"}}>
                OUR CLIENTS
              </span>
              {/* Additional content can be uncommented if needed */}
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="d-flex justify-content-center">
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '50px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    style={{
                      maxHeight: '100px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      marginBottom: '10px',
                    }}
                  />
                  <h5 className="tech-software__heading" style={{ margin: 0 }}>
                    {client.name}
                  </h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TechSection;