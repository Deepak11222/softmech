import React from "react";
import blogImage1 from "../assets/imgs/blog/blog-1.jpg";
import blogImage2 from "../assets/imgs/blog/blog-2.jpg";
import blogImage3 from "../assets/imgs/blog/blog-3.jpg";

const NewsSection = () => {
  const blogs = [
    {
      id: 1,
      image: blogImage1,
      title: "Necessity May Give us Best Virtual Court",
      date: "28 Nov, 2024",
      author: "Admin",
      link: "blog-details.html",
    },
    {
      id: 2,
      image: blogImage2,
      title: "Tackling the Changes of Retail Industry",
      date: "28 Nov, 2024",
      author: "Admin",
      link: "blog-details.html",
    },
    {
      id: 3,
      image: blogImage3,
      title: "Easy and Most Powerful Server and Platform",
      date: "28 Nov, 2024",
      author: "Admin",
      link: "blog-details.html",
    },
  ];

  return (
    <section className="blog-section-one section-space">
      <div className="small-container">
        <div className="blog-title-box mb-40">
          <div
            className="title-box wow fadeInLeft"
            data-wow-delay=".5s"
            style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeInLeft" }}
          >
            <span className="section-sub-title no-border">Blog &amp; news</span>
            <h3 className="section-title mt-10">Explore Blogs and News</h3>
          </div>
          <a className="primary-btn-1 btn-hover" href="blog-details.html">
            view all &nbsp; | <i className="icon-right-arrow"></i>
            <span style={{ top: "26px", left: "165.51px" }}></span>
          </a>
        </div>
        <div className="row g-4">
          {blogs.map((blog) => (
            <div className="col-xxl-4 col-xl-4 col-lg-6" key={blog.id}>
              <div className="blog-style-one">
                <a className="blog-image w-img" href={blog.link}>
                  <img src={blog.image} alt={blog.title} />
                </a>
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="p-relative">
                      <a href={blog.link}><i className="fal fa-user"></i> By {blog.author}</a>
                    </span>
                    <span className="p-relative">
                      <a href={blog.link}><i className="fal fa-calendar-alt"></i>{blog.date}</a>
                    </span>
                  </div>
                  <hr />
                  <h5 className="blog-title mb-30">
                    <a href={blog.link}>{blog.title}</a>
                  </h5>
                  <div className="blog-link">
                    <a className="primary-btn-5 btn-hover" href={blog.link}>
                      Read MORE &nbsp; | <i className="icon-right-arrow"></i>
                      <span style={{ top: "147.172px", left: "108.5px" }}></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;