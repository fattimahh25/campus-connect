import React from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/home-images/banner-img1.jpg";
import img2 from "../assets/images/home-images/banner-img2.jpg";
import img3 from "../assets/images/home-images/banner-img3.jpg";
import img4 from "../assets/images/home-images/home-img1.jpg";
import img6 from "../assets/images/home-images/home-img2.jpg";
import img5 from "../assets/images/home-images/home-img3.jpg";

import slidedata from "../data/slider.json";
import video from "../assets/video/campus.mp4";

import WelcomeModal from "../components/welcomemodal";
import Card from "../components/Card";

function Home() {
  const navigate = useNavigate();

  const imageMap = {
    img1: img1,
    img2: img2,
    img3: img3,
  };

  return (
    <>
      <WelcomeModal />

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          {slidedata.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {slidedata.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={imageMap[slide.image]}
                className="d-block w-100"
                alt={slide.image}
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>{slide.text}</h1>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="homepage">
        <div className="content">
          <h1>
            Dive into campus life — discover events, connect with peers, and stay
            in the action!
          </h1>
          <p>
            CampusConnect is your one-stop destination to explore upcoming events,
            cultural festivals, academic sessions, and exciting student activities.
            Stay connected, get involved, and never miss out on the vibrant
            happenings at Campus Connect.
          </p>
        </div>
        <div className="banner">
          <img src={img4} alt="Campus Event Banner" />
        </div>
      </section>

      <section className="homepage">
        <div className="banner">
          <img src={img6} alt="Campus Event Banner" />
        </div>
        <div className="content">
          <h1>Dive into campus life — discover, connect, belong.</h1>
          <p>
            CampusConnect is your all-in-one hub to discover events, festivals,
            workshops, and student activities. Stay engaged, connect with peers,
            and be part of every vibrant campus moment.
          </p>
        </div>
      </section>

      <section className="homepage">
        <div className="content">
          <h1>
            From academics to activities, our campus is where opportunities and
            experiences meet!
          </h1>
          <p>
            Our campus is a vibrant community where learning, creativity, and
            friendships thrive. With modern facilities, green spaces, and exciting
            events, it’s the perfect place to grow, connect, and create lasting
            memories.
          </p>
        </div>
        <div className="banner">
          <img src={img5} alt="Campus Event Banner" />
        </div>
      </section>

      <h1 className="upc-heading">Upcoming Events</h1>
      <Card />

      <section className="video-section">
        <video className="campus-video" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-overlay">
          <h2>Step Into the Campus Vibe</h2>
          <button
            className="video-btn"
            onClick={() => navigate("/sign-in")}
          >
            Join the Community
          </button>
        </div>
      </section>

      <section className="stats-section">
        <h2 className="stats-heading">Ratings and Events</h2>
        <div className="stats-container">
          <div className="stat-card">
            <h2>4.8/5</h2>
            <p>Student Rating</p>
          </div>
          <div className="stat-card">
            <h2>120+</h2>
            <p>Events Organized</p>
          </div>
          <div className="stat-card">
            <h2>15+</h2>
            <p>Annual Tech Festivals</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
