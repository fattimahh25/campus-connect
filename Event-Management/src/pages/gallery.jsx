import React, { useState } from "react";
import data from "../data/gallery.json";
import techfest from "../assets/images/gallery-images/techfest.jpg";
import annualsport from "../assets/images/gallery-images/annaulsports.jpg";
import cultural from "../assets/images/gallery-images/cultural.jpg";
import science from "../assets/images/gallery-images/scienc-exhibition.jpg";
import music from "../assets/images/gallery-images/music.jpg";
import entrepreneurship from "../assets/images/gallery-images/entrepreneurship.jpg";
import hackathone from "../assets/images/gallery-images/hackathone.jpg";
import InterCollege from "../assets/images/gallery-images/inter-College.jpg";
import Drama from "../assets/images/gallery-images/drama.jpg";
import Robotics from "../assets/images/gallery-images/robotics.jpg";
import Art from "../assets/images/gallery-images/art.jpg";
import business from "../assets/images/gallery-images/business.jpg";
import coding from "../assets/images/gallery-images/coding.jpg";
import athletics from "../assets/images/gallery-images/athletics.jpg";
import foodfest from "../assets/images/gallery-images/foodfest.jpg";
import aiworkshop from "../assets/images/gallery-images/aiworkshop.jpg";
import photography from "../assets/images/gallery-images/photography.jpg";
import cricket from "../assets/images/gallery-images/cricket.jpg";
import startup from "../assets/images/gallery-images/startup.jpg";
import webbootcamp from "../assets/images/gallery-images/webbootcamp.jpg";
import dance from "../assets/images/gallery-images/dance.jpg";
import techquiz from "../assets/images/gallery-images/techquiz.jpg";
import painting from "../assets/images/gallery-images/painting.jpg";
import digitalmarketing from "../assets/images/gallery-images/digitalmarketing.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/gallery.css";

const Gallery = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const images = {
    techfest,
    annualsport,
    cultural,
    science,
    music,
    entrepreneurship,
    hackathone,
    InterCollege,
    Drama,
    Robotics,
    Art,
    business,
    coding,
    athletics,
    foodfest,
    aiworkshop,
    photography,
    startup,
    cricket,
    webbootcamp,
    dance,
    techquiz,
    painting,
    digitalmarketing,
  };

  const [filterType, setFilterType] = useState("year");
  const [selectedValue, setSelectedValue] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const uniqueValues = ["All", ...new Set(data.map((item) => item[filterType]))];

  const filteredData =
    selectedValue === "All"
      ? data
      : data.filter((item) => item[filterType] === selectedValue);

  return (
    <div className="gallery-container">
      <div className="main">
        <h1 className="gallery-title">
          FROM CAMERA ROLL <br /> TO A CURATED GALLERY
        </h1>
      </div>

      <div className="filter-controls">
        <div className="filter-group">
          <label className="filter-label">Group by:</label>
          <select
            className="filter-select"
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setSelectedValue("All");
            }}
          >
            <option value="year" className="option">
              Academic Year
            </option>
            <option value="category" className="option">
              Category
            </option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">
            {filterType === "year" ? "Select Year:" : "Select Category:"}
          </label>
          <select
            className="filter-select"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            {uniqueValues.map((val, idx) => (
              <option key={idx} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="gallery-grid">
        {filteredData.map((item) => (
          <div
            className="gallery-card"
            key={item.id}
            data-aos="fade-up"
            onClick={() => setLightboxImage(images[item.image])}
          >
            <img
              src={images[item.image]}
              alt={item.title}
              className="gallery-img"
            />
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>
                {item.year} | {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Enlarged" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
