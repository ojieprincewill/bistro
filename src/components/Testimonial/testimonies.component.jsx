import React from "react";

import "./testimonies.styles.scss";

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
  return (
    <div className="testimonies">
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
    </div>
  );
};

export default Testimonies;
