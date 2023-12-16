import React from "react";

import "./blog.styles.scss";
import BlogGrid from "./blog-grid.component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const blogVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.7,
    delay: inView ? 0.4 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={blogVariants}
      transition={transition}
      className="blog-cont"
    >
      <div className="blog-text-cont">
        <p className="blog-title">Blog</p>
        <span className="blog-watermark">Our blog</span>
      </div>
      <BlogGrid />
    </motion.div>
  );
};

export default Blog;
