import React from "react";

import "./blog-list.styles.scss";
import Navigation from "../Navigation/navigation.component";
import BlogGrid from "./blog-grid.component";

const BlogList = () => {
  return (
    <>
      <div className="blog-list">
        <Navigation />
        <div className="blog-list-header-cont">
          <p className="blog-list-header">Blogs/news</p>
        </div>
      </div>
      <div className="blog-list-cont">
        <BlogGrid />
        <BlogGrid />
        <BlogGrid />
      </div>
    </>
  );
};

export default BlogList;
