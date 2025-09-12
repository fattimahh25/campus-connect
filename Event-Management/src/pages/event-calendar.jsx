import React, { useState, useMemo } from "react";
import { Calendar, Clock, MapPin, Users, Search } from "lucide-react";
import eventsFile from "../data/event-calender.json";
import img1 from "../assets/images/event-details/img1.jpg";
import img2 from "../assets/images/event-details/img2.jpg";
import img3 from "../assets/images/event-details/img3.jpg";
import img4 from "../assets/images/event-details/img4.jpg";
import img5 from "../assets/images/event-details/img5.jpg";
import img6 from "../assets/images/event-details/img6.jpg";
import img7 from "../assets/images/event-details/img7.jpg";
import img8 from "../assets/images/event-details/img8.jpg";
import img9 from "../assets/images/event-details/img9.jpg";
import img10 from "../assets/images/event-details/img10.jpg";
import img11 from "../assets/images/event-details/img11.jpg";
import img12 from "../assets/images/event-details/img12.jpg";
import img13 from "../assets/images/event-details/img13.jpg";
import img14 from "../assets/images/event-details/img14.jpg";
import img15 from "../assets/images/event-details/img15.jpg";
import img16 from "../assets/images/event-details/img16.jpg";
import img17 from "../assets/images/event-details/img17.jpg";
import img18 from "../assets/images/event-details/img18.jpg";
import img19 from "../assets/images/event-details/img19.jpg";
import img20 from "../assets/images/event-details/img20.jpg";
import img21 from "../assets/images/event-details/img21.jpg";
import img22 from "../assets/images/event-details/img22.jpg";
import img23 from "../assets/images/event-details/img23.jpg";
import img24 from "../assets/images/event-details/img24.jpg";

import "../css/event-calender.css";


const eventsData = eventsFile;

const images = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
};
const categories = ["All", "Academic", "Cultural", "Sports", "Networking"];

export default function EventCalendar() 
{
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("date");

  const filteredEvents = useMemo(() => {
    return eventsData
      .filter((e) => {
        const inCategory = category === "All" || e.category === category;
        const inSearch =
          e.title.toLowerCase().includes(search.toLowerCase()) ||
          e.description.toLowerCase().includes(search.toLowerCase());
        return inCategory && inSearch;
      })
      .sort((a, b) => {
        if (sort === "date") return new Date(a.date) - new Date(b.date);
        if (sort === "title") return a.title.localeCompare(b.title);
        if (sort === "attendees") return b.attendees - a.attendees;
        return 0;
      });
  }, [search, category, sort]);

  return (
    <div className="event-page">
      <div className="filters">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "All" ? "All Categories" : c}
            </option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
          <option value="attendees">Sort by Popularity</option>
        </select>
      </div>

      <div className="event-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="event-card" key={event.id} >
              {event.image && (
                <img src={images[event.image]} alt={event.title} />
              )}
              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="category">{event.category}</p>
                <p className="desc">{event.description}</p>

                <div className="event-info">
                  <p>
                    <Calendar size={16} /> {event.date}
                  </p>
                  <p>
                    <Clock size={16} /> {event.time}
                  </p>
                  <p>
                    <MapPin size={16} /> {event.location}
                  </p>
                  <p>
                    <Users size={16} /> {event.attendees} Attendees
                  </p>
                </div>

                <button className="event-btn">Learn More</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-events">No events found.</p>
        )}
      </div>
    </div>
  );
}
