import React from 'react';
import blogImage1 from '../assets/imgs/blog/blog-8.jpg';
import blogImage2 from '../assets/imgs/blog/blog-9.jpg';
import blogImage3 from '../assets/imgs/blog/blog-10.jpg';
import sidebarImage1 from '../assets/imgs/blog/blog-sidebar-1.jpg';
import sidebarImage2 from '../assets/imgs/blog/blog-sidebar-2.jpg';
import sidebarImage3 from '../assets/imgs/blog/blog-sidebar-3.jpg';
import serviceImage from '../assets/imgs/service/service-widget-1.jpg';
import bgImage1 from '../assets/imgs/resources/page-title-bg-1.png';
import bgImage2 from '../assets/imgs/resources/page-title-bg-2.png';

const BlogPage = () => {
  return (
    <main>
      {/* Breadcrumb area start */}
      <div className="breadcrumb__area theme-bg-1 p-relative pt-160 pb-160">
        <div className="breadcrumb__thumb" style={{ backgroundImage: `url(${bgImage1})` }}></div>
        <div className="breadcrumb__thumb_2" style={{ backgroundImage: `url(${bgImage2})` }}></div>
        <div className="small-container">
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper p-relative">
                <h2 className="breadcrumb__title">Blog Standard</h2>
                <div className="breadcrumb__menu">
                  <nav>
                    <ul>
                      <li><span><a href="index.html">Home</a></span></li>
                      <li><span>Blog Standard</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area end */}

      <section className="blog-standard-page section-space">
        <div className="small-container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              {blogPosts.map((post, index) => (
                <div className="blog-style-one mb-30" key={index}>
                  <a className="blog-image w-img" href="blog-details.html">
                    <img src={post.image} alt={post.title} />
                  </a>
                  <div className="blog-content">
                    <div className="post-meta">
                      <span className="p-relative"><a href="blog-details.html"><i className="fal fa-user"></i> By Admin</a></span>
                      <span className="p-relative"><a href="blog-details.html"><i className="fal fa-calendar-alt"></i> {post.date}</a></span>
                    </div>
                    <hr />
                    <h5 className="blog-title mb-30"><a href="blog-details.html">{post.title}</a></h5>
                    <p className="mb-35">{post.description}</p>
                    <div className="blog-link">
                      <a className="primary-btn-5 btn-hover" href="blog-details.html">
                        Read MORE &nbsp; | <i className="icon-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="row">
                <div className="col-xxl-12">
                  <div className="pagination__wrapper mt-50">
                    <div className="bd-basic__pagination d-flex align-items-center justify-content-center">
                      <nav>
                        <ul>
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li className="current"><a href="#">3</a></li>
                          <li><a href="#"><i className="far fa-arrow-right"></i></a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="blog-sidebar">
                <aside>
                  <SearchWidget />
                  <CategoryWidget />
                  <RecentPostsWidget />
                  <TagsWidget />
                  <ServiceWidget />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// Blog Posts Data
const blogPosts = [
  {
    title: "Keep Your Business Safe & Ensure High Availability.",
    image: blogImage1,
    date: "28 Nov, 2024",
    description: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus.",
  },
  {
    title: "Tackling the Changes of Retail Industry",
    image: blogImage2,
    date: "28 Nov, 2024",
    description: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus.",
  },
  {
    title: "What’s the Holding Back the It Solution",
    image: blogImage3,
    date: "28 Nov, 2024",
    description: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac platea habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus.",
  },
];

// Widgets as Separate Components
const SearchWidget = () => (
  <div className="blog-widget-1 mb-30">
    <h5 className="blog-widget-title p-relative mb-45">Search</h5>
    <div className="search-form p-relative">
      <form action="#">
        <input type="text" placeholder="Search here" />
        <button type="submit"><i className="icon-search"></i></button>
      </form>
    </div>
  </div>
);

const CategoryWidget = () => (
  <div className="blog-widget-2 mb-30">
    <h5 className="blog-widget-title p-relative mb-45">Category</h5>
    <ul className="blog-categories-list">
      {categories.map((category, index) => (
        <li key={index}>
          <a href="#">
            <span>{category.name}</span>
            <span>({category.count})</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const RecentPostsWidget = () => (
  <div className="blog-widget-3 mb-30">
    <h5 className="blog-widget-title p-relative mb-45">Recent Post</h5>
    <div className="blog-post-sidebar-area">
      {recentPosts.map((post, index) => (
        <div className="blog-post-sidebar" key={index}>
          <a className="w-img blog-sidebar-thumb" href={post.link}>
            <img src={post.image} alt="" />
          </a>
          <div className="content">
            <span><i className="fal fa-calendar-alt"></i> {post.date}</span>
            <h6 className="blog-sidebar-post-title mt-10">
              <a href={post.link}>{post.title}</a>
            </h6>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TagsWidget = () => (
  <div className="blog-widget-4 mb-30">
    <h5 className="blog-widget-title p-relative mb-45">Tags</h5>
    <div className="tagcloud">
      {tags.map((tag, index) => (
        <a href="#" key={index}>{tag}</a>
      ))}
    </div>
  </div>
);

const ServiceWidget = () => (
  <div className="service-widget-2 mb-30">
    <figure className="w-img">
      <img src={serviceImage} alt="" />
    </figure>
    <div className="content bg-color-1 text-center">
      <div className="icon-box p-relative">
        <i className="fal fa-phone-volume"></i>
      </div>
      <h5>Need Help? Call Here</h5>
      <a className="pt-25 pb-25 phone" href="tel:2085550112">+208-555-0112</a>
      <div className="btn-box">
        <a className="primary-btn-1 btn-hover" href="contact.html">
          GET A QUOTE &nbsp; | <i className="icon-right-arrow"></i>
        </a>
      </div>
    </div>
  </div>
);

// Sample Data for Widgets
const categories = [
  { name: "Database Security", count: 1 },
  { name: "IT Consultancy", count: 4 },
  { name: "App Development", count: 10 },
  { name: "UI/UX Design", count: 9 },
  { name: "Cyber Security", count: 11 },
];

const recentPosts = [
  {
    title: "Keep Your Business Safe & Endure High Availability",
    date: "05 Dec, 2024",
    link: "blog-details-2.html",
    image: sidebarImage1,
  },
  {
    title: "Tacking the Changes of Retail Industry",
    date: "05 Dec, 2024",
    link: "blog-details-2.html",
    image: sidebarImage2,
  },
  {
    title: "What’s the Holding Back the It Solution",
    date: "05 Dec, 2024",
    link: "blog-details-2.html",
    image: sidebarImage3,
  },
];

const tags = ["business", "marketing", "solution", "SMM", "startup", "strategy", "SEO", "services"];

export default BlogPage;