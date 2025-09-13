import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/cards.css";

import cultural from "../assets/images/cards-images/culltural.jpg";
import techfest from "../assets/images/cards-images/techfest.jpg";
import sports from "../assets/images/cards-images/sports.jpg";
import science from "../assets/images/cards-images/science.jpg";
import lecture from "../assets/images/cards-images/lecture.jpg";
import hackathone from "../assets/images/cards-images/hackhathon.jpg";

import data from "../data/cards.json";

function Card() {
  const images = { cultural, techfest, sports, science, lecture, hackathone };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="card-slider">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="card-slide">
            <div className="card">
              <img
                src={images[item.image]}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <h5 className="card-counter">{item.counter}</h5>
                <a href={item.buttonLink} className="btn-learn">
                  {item.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card;
