import React, { useState, useEffect } from "react"
import eventsData from "../data/event-details.json"
import img1 from "../assets/images/event-images/img1.png"
import img2 from "../assets/images/event-images/img2.png"
import img3 from "../assets/images/event-images/img3.png"
import img4 from "../assets/images/event-images/img4.png"
import img5 from "../assets/images/event-images/img5.png"
import img6 from "../assets/images/event-images/img6.png"
import img7 from "../assets/images/event-images/img7.png"
import img8 from "../assets/images/event-images/img8.png"
import img9 from "../assets/images/event-images/img9.png"
import img10 from "../assets/images/event-images/img10.png"
import img11 from "../assets/images/event-images/img11.png"
import img12 from "../assets/images/event-images/img12.png"
import img13 from "../assets/images/event-images/img13.png"
import img14 from "../assets/images/event-images/img14.png"
import img15 from "../assets/images/event-images/img15.png"
import img16 from "../assets/images/event-images/img16.png"
import img17 from "../assets/images/event-images/img17.png"
import img18 from "../assets/images/event-images/img18.png"
import img19 from "../assets/images/event-images/img19.png"
import img20 from "../assets/images/event-images/img20.png"
import img21 from "../assets/images/event-images/img21.png"
import img22 from "../assets/images/event-images/img22.png"
import img23 from "../assets/images/event-images/img23.png"
import img24 from "../assets/images/event-images/img24.png"
import img25 from "../assets/images/event-images/img25.png"

import "../css/event-details.css" 

import { Calendar, Clock, MapPin, Users, Search, Filter, SortAsc, Bookmark } from "lucide-react"


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
  img25
};

const categoryColors = {
  academic: "category-academic",
  cultural: "category-cultural",
  sports: "category-sports",
  departmental: "category-departmental",
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

const formatTime = (startTime, endTime) => {
  const formatTimeString = (time) => {
    const [hours, minutes] = time.split(":")
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? "PM" : "AM"
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  return `${formatTimeString(startTime)} – ${formatTimeString(endTime)}`
}

function EventCard({ event }) {
  const isUpcoming = event.status === "upcoming"
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <div className="event-card">
      {/* Event Image */}
      {event.image && (
        <div className="event-image">
          <img src={images[event.image]} alt={event.name} />
        </div>
      )}

      {/* Bookmark Button */}
      <button
        className={`bookmark-btn ${bookmarked ? "bookmarked" : ""}`}
        onClick={() => setBookmarked(!bookmarked)}
        aria-label="Bookmark event"
      >
        <Bookmark />
      </button>

      <div className="event-header">
        <h3>{event.name}</h3>
        <span className={`badge ${categoryColors[event.category]}`}>{event.category}</span>
      </div>

      <div className="event-info">
        <p><Calendar size={16} /> {formatDate(event.date)}</p>
        <p><Clock size={16} /> {formatTime(event.startTime, event.endTime)}</p>
        <p><MapPin size={16} /> {event.venue}</p>
        {event.registrationRequired && (
          <p><Users size={16} /> Registration Required</p>
        )}
      </div>

      <p className="event-description">{event.description}</p>

      <button
        className={`event-btn ${isUpcoming ? "btn-active" : "btn-disabled"}`}
        disabled={!isUpcoming}
      >
        {isUpcoming ? (event.registrationRequired ? "Register Now" : "Learn More") : "Event Completed"}
      </button>
    </div>
  )
}

function EventFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
  sortBy,
  onSortChange,
  onClearFilters,
}) {
  return (
    <div className="event-details">
      <div className="event-details-header">
        <Filter size={18} />
        <h3>Filter & Sort Events</h3>
      </div>

      <div className="event-gridd">
        <div className="event-search-box">
          <Search size={16} className="event-search-icon" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="academic">Academic</option>
          <option value="cultural">Cultural</option>
          <option value="sports">Sports</option>
          <option value="departmental">Departmental</option>
        </select>

        <select value={selectedStatus} onChange={(e) => onStatusChange(e.target.value)}>
          <option value="all">All Events</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>

        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="date-asc">Date (Upcoming First)</option>
          <option value="date-desc">Date (Recent First)</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="category">Category</option>
        </select>

        <button onClick={onClearFilters} className="clear-btn">Clear Filters</button>
      </div>
    </div>
  )
}

export default function EventPage() {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [sortBy, setSortBy] = useState("date-asc")

  useEffect(() => {
    setEvents(eventsData.events)
    setFilteredEvents(eventsData.events)
  }, [])

  useEffect(() => {
    let filtered = [...events]

    if (searchTerm) {
      filtered = filtered.filter(
        (e) =>
          e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.venue.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((e) => e.category === selectedCategory)
    }

    if (selectedStatus !== "all") {
      filtered = filtered.filter((e) => e.status === selectedStatus)
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-asc": return new Date(a.date) - new Date(b.date)
        case "date-desc": return new Date(b.date) - new Date(a.date)
        case "name-asc": return a.name.localeCompare(b.name)
        case "name-desc": return b.name.localeCompare(a.name)
        case "category": return a.category.localeCompare(b.category)
        default: return 0
      }
    })

    setFilteredEvents(filtered)
  }, [events, searchTerm, selectedCategory, selectedStatus, sortBy])

  const handleClearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedStatus("all")
    setSortBy("date-asc")
  }

  const upcomingEvents = filteredEvents.filter((e) => e.status === "upcoming" )
  const pastEvents = filteredEvents.filter((e) => e.status === "past")

  return (
    <div className="page-container">
      <EventFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onClearFilters={handleClearFilters}
      />

      <div className="results">
        <p>Showing {filteredEvents.length} of {events.length} events</p>
      </div>

      <div className="event-sections">
        {upcomingEvents.length > 0 && (
          <section>
            <h2 className="event-section-h2">Upcoming Events ({upcomingEvents.length})</h2>
            <div className="event-grid">
              {upcomingEvents.map((e) => <EventCard key={e.id} event={e} />)}
            </div>
          </section>
        )}

        {pastEvents.length > 0 && (
          <section>
            <h2 className="event-section-h2">Past Events ({pastEvents.length})</h2>
            <div className="event-grid">
              {pastEvents.map((e) => <EventCard key={e.id} event={e} />)}
            </div>
          </section>
        )}

        {filteredEvents.length === 0 && (
          <div className="no-events">
            <p>No events found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
