import React from "react";

import "./blog.styles.scss";
import BlogGrid from "./blog-grid.component";

const Blog = () => {
  return (
    <div className="blog-cont">
      <div className="blog-text-cont">
        <p className="blog-title">Blog</p>
        <span className="blog-watermark">Our blog</span>
      </div>
      <BlogGrid />
    </div>
  );
};

export default Blog;
