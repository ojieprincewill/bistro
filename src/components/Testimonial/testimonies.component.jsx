import React from "react";

import "./testimonies.styles.scss";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const persons = [
  {
    name: "Megumi West",
    image: "https://preview.colorlib.com/theme/eatery/img/person_3.jpg",
    occupation: "Owner, Bistro",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.",
  },
  {
    name: "Mike Grant ",
    image: "https://preview.colorlib.com/theme/eatery/img/person_1.jpg",
    occupation: "Head Chef, Bistro",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.",
  },
  {
    name: "Jacob Danielson",
    image: "https://preview.colorlib.com/theme/eatery/img/person_2.jpg",
    occupation: "Sous Chef, Bistro",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequi atque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fuga sunt.",
  },
];

const Testimonies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const testimonyVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.7,
    delay: inView ? 0.3 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={testimonyVariants}
      transition={transition}
      className="testimonies"
    >
      {persons.map((person) => (
        <div>
          <p className="review">"{person.review}"</p>
          <div className="person-cont">
            <div className="person-image-cont">
              <img
                src={person.image}
                alt={person.title}
                className="person-image"
              />
            </div>
            <div className="person-details">
              <p className="person-name">{person.name}</p>
              <p className="person-occupation">{person.occupation}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Testimonies;
