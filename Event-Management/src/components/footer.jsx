import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-hero">
        <div className="footer-hero-content">
          <h2>
            Stay Connected with <br /> Campus Events
          </h2>
          <p>Discover, manage, and join events happening across your campus.</p>
          <Link to="./event-details" className="footer-btn btnlink">Explore Events</Link>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-column">
        <div className="footer-brand">
          <img src={logo} alt="Campus Connect Logo" className="footer-logo-img" />
          <h2 className="footer-logo-text">𝕮𝖆𝖒𝖕𝖚𝖘𝕮𝖔𝖓𝖓𝖊𝖈𝖙</h2>
        </div>
          <p>Making college life more engaging.</p>
          <p>Find clubs, festivals, workshops, and meetups all in one place.</p>
          <div className="footer-contact">
            <p><strong>Contact Us</strong></p>
            <p>Email: support@campusconnect.com</p>
            <p>Phone: +92 300 1234567</p>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/event-calendar">Upcoming Events</Link></li>
            <li><Link to="/event-details">Event Guidelines</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Community Guidelines</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 CampusConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
