import React from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";
import WelcomeModal from "../components/welcomemodal";
import Card from "../components/Card";

function Home() {
    const navigate = useNavigate();
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
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/src/assets/images/home-images/banner-img1.jpg"
              className="d-block w-100"
              alt="banner1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="carousel-caption">
                Welcome to Campus Connect Event Hub – Stay Updated, Stay
                Involved!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/src/assets/images/home-images/banner-img2.jpg"
              className="d-block w-100"
              alt="banner2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Join Sports Gala & Celebrate Spirit of Teamwork</h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/src/assets/images/home-images/banner-img3.jpg"
              className="d-block w-100"
              alt="banner3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Discover Upcoming Cultural & Technical Events</h1>
            </div>
          </div>
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
            Dive into campus life-discover events, connect with peers, and stay
            in the action!
          </h1>
          <p>
            CampusConnect is your one-stop destination to explore upcoming
            events, cultural festivals, academic sessions, and exciting student
            activities. Stay connected, get involved, and never miss out on the
            vibrant happenings at Campus Connect.
          </p>
        </div>
        <div className="banner">
          <img
            src="/src/assets/images/home-images/home-img1.jpg"
            alt="Campus Event Banner"
          />
        </div>
      </section>
      <section className="homepage">
        <div className="banner">
          <img
            src="/src/assets/images/home-images/home-img2.jpg"
            alt="Campus Event Banner"
          />
        </div>
        <div className="content">
          <h1>Dive into campus life—discover, connect, belong.</h1>
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
          From academics to activities, our campus is where opportunities and experiences meet!
          </h1>
          <p>
            Our campus is a vibrant community where learning, creativity, and
            friendships thrive. With modern facilities, green spaces, and
            exciting events, it’s the perfect place to grow, connect, and create
            lasting memories.
          </p>
        </div>
        <div className="banner">
          <img
            src="/src/assets/images/home-images/home-img3.jpg"
            alt="Campus Event Banner"
          />
        </div>
      </section>
      {/* Upcoming Events Slider */}
      <h1 className="upc-heading">Upcoming Events</h1>
      <Card />
      {/* Video Section */}
      <section className="video-section">
        <video
          className="campus-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/video/campus.mp4" type="video/mp4" />
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

      {/* 🔹 Rating & Total Events Section */}
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
