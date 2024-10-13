import React from 'react';
import shape1 from '../assets/imgs/shapes/shape-1.png';
import shape2 from '../assets/imgs/shapes/shape-2.png';
import shape3 from '../assets/imgs/shapes/shape-3.png';
import shape4 from '../assets/imgs/shapes/shape-4.png';
import shape5 from '../assets/imgs/shapes/shape-5.png';

const BannerSection = () => {
  return (
    <section className="banner-section p-relative fix">
      <div className="swiper banner-active">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide"> 
            <div className="banner-main" style={{ backgroundImage: 'url(assets/imgs/banner/banner-1.jpg)' }}>
              <div className="large-container">               
                <div className="banner-area p-relative z-3 wow img-custom-anim-left animated" data-wow-delay="1500ms">
                  <span className="p-relative banner-sub-title">TECHNOLOGY CONSULTANCY</span>
                  <h1 className="banner-title">Make The Easiest Solution For You</h1>
                  <p className="banner-text">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</p>
                  <div className="banner-btn-area">
                    <a className="primary-btn-1 btn-hover" href="services.html">
                      eXPLORE mORE &nbsp; | <i className="icon-right-arrow"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=eEzD-Y97ges" className="play-btn popup-video">
                      <div className="icon-1">
                        <i className="icon-play"></i>
                      </div>
                      <span>How It Works</span>
                    </a>
                  </div>
                </div>        
              </div>
            </div>
            <div className="banner-shape-area">
              <div className="shape-1" style={{ backgroundImage: `url(${shape1})` }}></div>
              <div className="shape-2" style={{ backgroundImage: `url(${shape2})` }}></div>
              <div className="shape-3" style={{ backgroundImage: `url(${shape3})` }}></div>
              <div className="shape-4" style={{ backgroundImage: `url(${shape4})` }}></div>
              <div className="shape-5" style={{ backgroundImage: `url(${shape5})` }}></div>
            </div> 
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide"> 
            <div className="banner-main" style={{ backgroundImage: 'url(assets/imgs/banner/banner-2.jpg)' }}>
              <div className="large-container">               
                <div className="banner-area p-relative z-3 wow img-custom-anim-left animated" data-wow-delay="2500ms">
                  <span className="p-relative banner-sub-title">TECHNOLOGY CONSULTANCY</span>
                  <h1 className="banner-title">Make The Easiest Solution For You</h1>
                  <p className="banner-text">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</p>
                  <div className="banner-btn-area">
                    <a className="primary-btn-1 btn-hover" href="services.html">
                      eXPLORE mORE &nbsp; | <i className="icon-right-arrow"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=eEzD-Y97ges" className="play-btn popup-video">
                      <div className="icon-1">
                        <i className="icon-play"></i>
                      </div>
                      <span>How It Works</span>
                    </a>
                  </div>
                </div>        
              </div>
            </div>
            <div className="banner-shape-area">
              <div className="shape-1" style={{ backgroundImage: `url(${shape1})` }}></div>
              <div className="shape-2" style={{ backgroundImage: `url(${shape2})` }}></div>
              <div className="shape-3" style={{ backgroundImage: `url(${shape3})` }}></div>
              <div className="shape-4" style={{ backgroundImage: `url(${shape4})` }}></div>
              <div className="shape-5" style={{ backgroundImage: `url(${shape5})` }}></div>
            </div> 
          </div> 

          {/* Slide 3 */}
          <div className="swiper-slide"> 
            <div className="banner-main" style={{ backgroundImage: 'url(assets/imgs/banner/banner-1.jpg)' }}>
              <div className="large-container">               
                <div className="banner-area p-relative z-3 wow img-custom-anim-left animated" data-wow-delay="3000ms">
                  <span className="p-relative banner-sub-title">TECHNOLOGY CONSULTANCY</span>
                  <h1 className="banner-title">Make The Easiest Solution For You</h1>
                  <p className="banner-text">We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</p>
                  <div className="banner-btn-area">
                    <a className="primary-btn-1 btn-hover" href="services.html">
                      eXPLORE mORE &nbsp; | <i className="icon-right-arrow"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=eEzD-Y97ges" className="play-btn popup-video">
                      <div className="icon-1">
                        <i className="icon-play"></i>
                      </div>
                      <span>How It Works</span>
                    </a>
                  </div>
                </div>        
              </div>
            </div>
            <div className="banner-shape-area">
              <div className="shape-1" style={{ backgroundImage: `url(${shape1})` }}></div>
              <div className="shape-2" style={{ backgroundImage: `url(${shape2})` }}></div>
              <div className="shape-3" style={{ backgroundImage: `url(${shape3})` }}></div>
              <div className="shape-4" style={{ backgroundImage: `url(${shape4})` }}></div>
              <div className="shape-5" style={{ backgroundImage: `url(${shape5})` }}></div>
            </div> 
          </div> 
        </div>
      </div>   

      {/* Pagination */}
      <div className="banner-dot-inner">
        <div className="banner-dot swiper-pagination"></div>
      </div>
    </section>
  );
};

export default BannerSection;