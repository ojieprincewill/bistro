import React from "react";

import "./blog-list.styles.scss";
import Navigation from "../Navigation/navigation.component";
import BlogGrid from "./blog-grid.component";
import { motion } from "framer-motion";

const BlogList = () => {
  return (
    <>
      <div className="blog-list">
        <Navigation />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="blog-list-header-cont"
        >
          <p className="blog-list-header">Blogs/news</p>
        </motion.div>
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
