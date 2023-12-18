import React, { useState, useEffect, useCallback, useMemo } from "react";

import "./header.styles.scss";
import Navigation from "../Navigation/navigation.component";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showArrows, setShowArrows] = useState(false);

  const images = useMemo(
    () => [
      "https://preview.colorlib.com/theme/eatery/img/hero_2.jpg.webp",
      "https://preview.colorlib.com/theme/eatery/img/hero_1.jpg.webp",
    ],
    []
  );

  const headText = ["delicious food", "expert chefs"];

  const preloadImages = useCallback(() => {
    const imagePromises = images.map((imageSrc) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = resolve;
        image.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Failed to preload images:", error);
      });
  }, [images]);

  const startSlideshow = useCallback(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  const handleArrowClick = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "left"
        ? prevIndex === 0
          ? images.length - 1
          : prevIndex - 1
        : (prevIndex + 1) % images.length
    );

    clearInterval(startSlideshow());
    startSlideshow();
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    clearInterval(startSlideshow());
    startSlideshow();
  };

  useEffect(() => {
    preloadImages();

    if (imagesLoaded) {
      startSlideshow();
    }

    return () => clearInterval(startSlideshow());
  }, [images, imagesLoaded, startSlideshow, preloadImages]);

  const containerStyles = {
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 1s ease",
    position: "relative",
    width: "100%",
    height: "100vh",
  };

  const mobileBreakpoint = 600;

  const isPhoneScreen = window.innerWidth <= mobileBreakpoint;

  if (isPhoneScreen) {
    return (
      <>
        <Navigation />
        <div style={containerStyles}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
            className="header"
          >
            <p className="head-title">{headText[currentIndex]}</p>
            {showArrows && (
              <span
                className="arrow left"
                onClick={() => handleArrowClick("left")}
              >
                &#10094;
              </span>
            )}
            <p className="head-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {showArrows && (
              <span
                className="arrow right"
                onClick={() => handleArrowClick("right")}
              >
                &#10095;
              </span>
            )}
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="head-button"
            >
              Get started
            </Link>
          </motion.div>
          <div className="pagination-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={containerStyles}>
        <Navigation />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onMouseEnter={() => setShowArrows(true)}
          onMouseLeave={() => setShowArrows(false)}
          className="header"
        >
          <p className="head-title">{headText[currentIndex]}</p>
          {showArrows && (
            <span
              className="arrow left"
              onClick={() => handleArrowClick("left")}
            >
              &#10094;
            </span>
          )}
          <p className="head-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {showArrows && (
            <span
              className="arrow right"
              onClick={() => handleArrowClick("right")}
            >
              &#10095;
            </span>
          )}
          <button className="head-button">Get started</button>
        </motion.div>
        <div className="pagination-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
