import React, { useState } from "react";
import "../css/feedback.css";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    event: "",
    rating: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.userType) newErrors.userType = "Please select a user type";
    if (!formData.event) newErrors.event = "Please select an event";
    if (!formData.rating) newErrors.rating = "Please give a rating";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("✅ Thank you! This is just a demo — no data will be submitted.");
      setFormData({
        name: "",
        email: "",
        userType: "",
        event: "",
        rating: "",
        comments: "",
      });
    }
  };

  return (
    <section className="feedback-section">
      <div className="container">
        <h1 className="page-title">Event Feedback</h1>
        <p className="page-subtitle">
          We value your thoughts! Please share your feedback about our recent campus events.
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <select name="userType" value={formData.userType} onChange={handleChange}>
            <option value="">Select User Type</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="staff">Staff</option>
          </select>
          {errors.userType && <span className="error">{errors.userType}</span>}

          <select name="event" value={formData.event} onChange={handleChange}>
            <option value="">Select Event Attended</option>
            <option value="techfest">TechFest 2025</option>
            <option value="coding">Coding Challenge</option>
            <option value="quiz">Tech Quiz</option>
            <option value="robotics">Robotics Workshop</option>
          </select>
          {errors.event && <span className="error">{errors.event}</span>}

          <div className="rating-group">
            <label>Rate Your Experience:</label>
            <div className="rating-options">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                  <input
                    type="radio"
                    name="rating"
                    value={num}
                    checked={formData.rating === String(num)}
                    onChange={handleChange}
                  />{" "}
                  {num}
                </label>
              ))}
            </div>
            {errors.rating && <span className="error">{errors.rating}</span>}
          </div>

          <textarea
            rows="5"
            name="comments"
            placeholder="Your Comments"
            value={formData.comments}
            onChange={handleChange}
          />

          <button type="submit" className="send-btn">
            Submit Feedback
          </button>
          <p className="note">⚠ This is a demo form — no data will be submitted.</p>
        </form>
      </div>
    </section>
  );
}

export default Feedback;
