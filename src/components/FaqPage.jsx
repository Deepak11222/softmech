import React from 'react';
import faqImage from '../assets/imgs/resources/faq-2.jpg';
import breadcrumbBg1 from '../assets/imgs/resources/page-title-bg-1.png';
import breadcrumbBg2 from '../assets/imgs/resources/page-title-bg-2.png';

const FaqPage = () => {
  return (
    <main>
      {/* Breadcrumb area start */}
      <div className="breadcrumb__area theme-bg-1 p-relative pt-160 pb-160">
        <div 
          className="breadcrumb__thumb" 
          style={{ backgroundImage: `url(${breadcrumbBg1})` }}
        ></div>
        <div 
          className="breadcrumb__thumb_2" 
          style={{ backgroundImage: `url(${breadcrumbBg2})` }}
        ></div>
        <div className="small-container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper p-relative">
                <h2 className="breadcrumb__title">FAQ</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><a href="index.html">Home</a></span></li>
                      <li><span>FAQ</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area end */}

      <section className="faq-page-section section-space">
        <div className="small-container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-7">
              <div className="faq-wrapper pr-80">
                <div className="title-box mb-25 wow fadeInLeft" data-wow-delay=".5s">
                  <span className="section-sub-title no-border">FAQ</span>
                  <h3 className="section-title mt-10">Frequently Asked Questions?</h3>
                </div>
                <div className="bd-faq">
                  <div className="accordion" id="accordionExample-st-2">
                    {faqItems.map((item, index) => (
                      <div className="bd-faq-group" key={index}>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id={`heading${index + 1}-st-2`}>
                            <button 
                              className={`accordion-button ${item.isOpen ? '' : 'collapsed'}`} 
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target={`#collapse${index + 1}-st-2`} 
                              aria-expanded={item.isOpen} 
                              aria-controls={`collapse${index + 1}-st-2`}
                            >
                              {item.question}
                            </button>
                          </h2>
                          <div 
                            id={`collapse${index + 1}-st-2`} 
                            className={`accordion-collapse collapse ${item.isOpen ? 'show' : ''}`} 
                            aria-labelledby={`heading${index + 1}-st-2`} 
                            data-bs-parent="#accordionExample-st-2"
                          >
                            <div className="accordion-body">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5">
              <figure className="w-img pt-15">
                <img src={faqImage} alt="FAQ Illustration" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Sample FAQ data
const faqItems = [
  {
    question: "Where should I incorporate my business?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
    isOpen: false,
  },
  {
    question: "How can I safely use files?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
    isOpen: false,
  },
  {
    question: "What is included in your services?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
    isOpen: true,
  },
  {
    question: "What type of company is measured?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.",
    isOpen: false,
  },
];

export default FaqPage;