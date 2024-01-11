import React from "react";

import "./about.styles.scss";
import Navigation from "../Navigation/navigation.component";
import { motion } from "framer-motion";

const About = () => {
  const mobileBreakpoint = 600;

  const isPhoneScreen = window.innerWidth <= mobileBreakpoint;

  if (isPhoneScreen) {
    return (
      <>
        <Navigation />
        <div className="about">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="about-header-cont"
          >
            <p className="about-header">About us</p>
          </motion.div>
        </div>
        <div className="about-grid">
          <div className="about-image-flex">
            <div className="about-image-cont">
              <img
                src="https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939437_1280.jpg"
                alt="cooking"
                className="about-image"
              />
            </div>
            <div className="about-image-cont">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/10/14/09/restaurant-2623071_1280.jpg"
                alt="cooking"
                className="about-image"
              />
            </div>
          </div>
          <div className="about-text-cont">
            <p className="about-title">History</p>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est
              soluta blanditiis velit doloremque corrupti aliquid ducimus
              consectetur ea nobis dolorem, id quibusdam praesentium
              consequuntur modi eligendi, sunt suscipit ullam iure nesciunt
              tempore. Itaque placeat, libero aliquam odio ex voluptas.
            </p>
            <p className="about-text">
              Vel vitae, assumenda blanditiis nemo in vero reprehenderit
              asperiores distinctio exercitationem aliquid, quam velit explicabo
              neque. Sapiente provident sequi omnis itaque eaque voluptatum vel.
              Accusamus deserunt atque eligendi mollitia voluptates eum libero,
              ratione id labore. Magnam porro dolorem aspernatur, dolor?
            </p>
            <p className="about-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="about">
        <Navigation />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="about-header-cont"
        >
          <p className="about-header">About us</p>
        </motion.div>
      </div>
      <div className="about-grid">
        <div className="about-image-flex">
          <div className="about-image-cont">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939437_1280.jpg"
              alt="cooking"
              className="about-image"
            />
          </div>
          <div className="about-image-cont">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/10/14/09/restaurant-2623071_1280.jpg"
              alt="cooking"
              className="about-image"
            />
          </div>
        </div>
        <div className="about-text-cont">
          <p className="about-title">History</p>
          <p className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est
            soluta blanditiis velit doloremque corrupti aliquid ducimus
            consectetur ea nobis dolorem, id quibusdam praesentium consequuntur
            modi eligendi, sunt suscipit ullam iure nesciunt tempore. Itaque
            placeat, libero aliquam odio ex voluptas.
          </p>
          <p className="about-text">
            Vel vitae, assumenda blanditiis nemo in vero reprehenderit
            asperiores distinctio exercitationem aliquid, quam velit explicabo
            neque. Sapiente provident sequi omnis itaque eaque voluptatum vel.
            Accusamus deserunt atque eligendi mollitia voluptates eum libero,
            ratione id labore. Magnam porro dolorem aspernatur, dolor?
          </p>
          <p className="about-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
