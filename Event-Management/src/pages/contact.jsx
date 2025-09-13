import React, { useState, useEffect } from "react";
import coordinatorsData from "../data/contact.json";
import ImageSlider from "../components/imageSlider.jsx";
import "../css/contact.css";

function Contact() {
  const [formMessage, setFormMessage] = useState("");
  const [coordinators, setCoordinators] = useState([]);

  useEffect(() => {
    setCoordinators(coordinatorsData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("✅ Thank you! Your message has been sent.");
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Any questions or remarks? Just write us a message!
          </p>
        </div>

        <div className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Enter a valid email address"
              required
            />
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              required
            />
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="send-btn">
              Submit
            </button>
            {formMessage && (
              <p style={{ color: "green", marginTop: "0.5rem" }}>
                {formMessage}
              </p>
            )}
          </form>
        </div>

        <div className="coordinators-section">
          <h2 className="section-title">Faculty & Student Coordinators</h2>
          <div className="coordinator-grid">
            {coordinators.map((person, index) => (
              <div className="coordinator-card" key={index}>
                <h3>{person.name}</h3>
                <p>
                  <strong>{person.designation}</strong>
                </p>
                <p>{person.department}</p>
                <p>📞 {person.phone}</p>
                <p>
                  📧 <a href={`mailto:${person.email}`}>{person.email}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
        <h2 className="section-title">Campus Event Highlights</h2>
        <ImageSlider />
        <div className="inffo-grid">
          <div className="inffo-card">
            <div className="inffo-icon">📍</div>
            <h3 className="inffo-title">Campus Location</h3>
            <p className="inffo-text">
              Campus Connect is based at our college campus, serving as the hub
              for all student activities, cultural events, and academic
              functions.
            </p>
          </div>

          <div className="inffo-card purple-card">
            <div className="inffo-icon">📧</div>
            <h3 className="inffo-title">Email Us</h3>
            <p className="inffo-text">
              Have event-related queries or want to collaborate? Write to us at{" "}
              <strong> support@campusconnect.edu</strong>.
            </p>
          </div>

          <div className="inffo-card">
            <div className="inffo-icon">📞</div>
            <h3 className="inffo-title">Call Us</h3>
            <p className="inffo-text">
              Reach out to our event coordination team for assistance. Call us
              at <strong>+92 300 9876543</strong>.
            </p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.313992521675!2d67.14924997393602!3d24.887269144187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1757702721739!5m2!1sen!2s"
            width="100%"
            height="400"
         style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Google"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
