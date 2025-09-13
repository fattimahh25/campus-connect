import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Users
} from "lucide-react";

import data from "../data/cards.json";

import cultural from "../assets/images/cards-images/culltural.jpg";
import techfest from "../assets/images/cards-images/techfest.jpg";
import sports from "../assets/images/cards-images/sports.jpg";
import science from "../assets/images/cards-images/science.jpg";
import lecture from "../assets/images/cards-images/lecture.jpg";
import hackathone from "../assets/images/cards-images/hackhathon.jpg";

import "../css/card-details.css";

function CardDetail() {
  const { id } = useParams();
  const images = { cultural, techfest, sports, science, lecture, hackathone };

  const event = data.find((item) => item.id === parseInt(id));

  if (!event) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Event not found</p>;
  }

  const formattedDate = new Date(event.counter).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = new Date(event.counter).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="event-detail-container">
      <div className="event-detail-card">
        {/* Image Left */}
        <div className="event-detail-image">
          <img src={images[event.image]} alt={event.title} />
        </div>

        {/* Details Right */}
        <div className="event-detail-info">
          <h2 className="event-detail-title">{event.title}</h2>
          <p className="event-detail-text">{event.text}</p>

          <div className="event-detail-meta">
            <p><Calendar size={18} /> {formattedDate}</p>
            <p><Clock size={18} /> {formattedTime}</p>
            <p><MapPin size={18} /> Main Campus Auditorium</p>
            <p><Users size={18} /> Open for All Students</p>
          </div>

          <Link to="/" className="btn-back">⬅ Back to Events</Link>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
