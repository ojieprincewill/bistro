import React from "react";
import { SlCalender } from "react-icons/sl";
import { BLOG_CONTENT } from "../../assets/blogcontent/blog-content";

import "./blog-grid.styles.scss";
import { Link } from "react-router-dom";

const blogContent = BLOG_CONTENT;

const BlogGrid = () => {
  return (
    <div className="blog-content">
      {blogContent.map((blog) => (
        <div key={blog.id} className="blog-item">
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
            <Link to={`/blog/${blog.id}`} onClick={() => window.scrollTo(0, 0)}>
              <button className="blog-btn">Read more</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
