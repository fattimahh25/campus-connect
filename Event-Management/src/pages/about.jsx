import React from "react";
import "../css/about.css";
import Card from "../components/Card"
import teamImg from "../assets/images/about/team.jpg"; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About Our Campus</h1>
        <p>Connecting Students, Faculty, and Guests through Events</p>
      </div>

      <div className="about-section">
        <div className="timeline-vertical">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>How Campus Connect Started</h3>
              <time>Jan 2020</time>
              <p>
                Founded by a group of students to help organize campus events
                more easily.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>First Major Fest</h3>
              <time>Aug 2021</time>
              <p>
                Organized a 2-day tech and culture fest with 2000+ attendees.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Partnerships with Clubs</h3>
              <time>May 2022</time>
              <p>Partnered with 12 student societies for recurring events.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Today’s Achievements</h3>
              <time>Dec 2024</time>
              <p>500+ events listed, 50K+ student interactions, and growing!</p>
            </div>
          </div>
        </div>
      </div>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          It all started with a simple passion for bringing students together
          and creating meaningful connections. Founded in 2020, Campus Connect
          grew from a small initiative into a vibrant platform where events
          aren’t just activities — they’re opportunities to learn, celebrate,
          and build lasting friendships.
        </p>
        <p>
          Over the years, we’ve perfected the balance between tradition and
          innovation. Every gathering is carefully planned with creativity,
          collaboration, and purpose, ensuring that each event leaves a positive
          impact on our campus community.
        </p>
      </section>
      <h1 className="upc-heading">Annual Events</h1>
<Card/>
      <section className="about-section offers">
        <h2>What We Offer</h2>
        <ul>
          <li>🎉 Event Planning tailored to your campus needs</li>
          <li>📅 Workshops, seminars, and cultural activities</li>
          <li>🌟 Seasonal and themed events to celebrate milestones</li>
          <li>🤝 Collaboration with student clubs and societies</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Promise</h2>
        <p>
          Quality is at the heart of everything we organize. We focus on
          meaningful planning, thoughtful collaboration, and creating
          opportunities that bring people together. Whether it’s a large
          festival or a small workshop, we make sure every event is
          well-designed, impactful, and memorable.
        </p>
      </section>

      <section className="about-team">
        <div className="team-text">
          <h2>Meet the Team</h2>
          <p>
            Behind every successful event is a team of talented organizers,
            planners, and innovators. Led by <strong>Sarah Khan</strong>, our
            team is dedicated to turning your ideas into memorable campus
            experiences — one workshop, one celebration, one connection at a
            time.
          </p>
        </div>
        <div className="team-image">
          <img src={teamImg} alt="Our Team" />
        </div>
      </section>

      <section className="about-cta">
        <h2>Join Our Sweet Journey</h2>
        <p>
          Thank you for choosing <strong>Campusconnect</strong> to be part of
          your celebrations. Follow us on social media, visit our store, or
          browse our gallery to discover designs that inspire.
        </p>
        <button className="about-btn">Explore Our Events</button>
      </section>
    </div>
  );
};

export default About;
