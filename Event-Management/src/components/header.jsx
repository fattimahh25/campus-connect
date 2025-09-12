import React, { useState } from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="left-feature">
     <Link to="./event-calendar"><i className="fa-solid fa-calendar-days" /></Link> Events
      </div>

      <div className="logo">𝕮𝖆𝖒𝖕𝖚𝖘𝕮𝖔𝖓𝖓𝖊𝖈𝖙</div>
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <nav className={`navlinks ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="./about">About</Link>
        <Link to="./gallery">Gallery</Link>
        <Link to="./event-calendar">Event Calendar</Link>
        <Link to="./event-details">Event Details</Link>
        <Link to="./feedback">Feedback</Link>
        <Link to="./signin">Registration</Link>
        <Link to="./contact">Contact</Link>
      </nav>

      <div className="social-icons">
        <Link to="./gallery">
          <i className="fa-solid fa-trophy" />
        </Link>
        <Link to="./event-calendar">
          <i className="fa-solid fa-bell" />
        </Link>
        <Link to="./contact">
          <i className="fa-solid fa-map-pin" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
