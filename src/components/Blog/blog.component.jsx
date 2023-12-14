import React from "react";
import { SlCalender } from "react-icons/sl";

import "./blog.styles.scss";

const blogContent = [
  {
    image: "	https://preview.colorlib.com/theme/eatery/img/dishes_2.jpg",
    title: "How to cook tom yi sauce",
    date: "Dec 22, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
  },

  {
    image: "https://preview.colorlib.com/theme/eatery/img/dishes_1.jpg",
    title: "How to cook ceaser salad",
    date: "Dec 22, 2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
  },
];

const Blog = () => {
  return (
    <div className="blog-cont">
      <div className="blog-text-cont">
        <p className="blog-title">Blog</p>
        <span className="blog-watermark">Our blog</span>
      </div>
      <div className="blog-content">
        {blogContent.map((blog) => (
          <div className="blog-item">
            <div className="blog-image-cont">
              <img src={blog.image} alt={blog.title} className="blog-img" />
            </div>
            <div className="blog-info">
              <p className="blog-title">{blog.title}</p>
              <p className="blog-date">
                <span>
                  <SlCalender />
                </span>
                {blog.date}
              </p>
              <p className="blog-desc">{blog.description}</p>
              <button className="blog-btn">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
