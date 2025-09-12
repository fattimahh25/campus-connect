import React from "react";
import "../css/feedback.css";

function feedback() {
  return (
    <section className="feedback-section">
      <div className="container">
        <h1 className="page-title">Event Feedback</h1>
        <p className="page-subtitle">
          We value your thoughts! Please share your feedback about our recent campus events.
        </p>

        <form className="feedback-form">
          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email Address" required />

          <select required>
            <option value="">Select User Type</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="staff">Staff</option>
          </select>

          <select required>
            <option value="">Select Event Attended</option>
            <option value="techfest">TechFest 2025</option>
            <option value="coding">Coding Challenge</option>
            <option value="quiz">Tech Quiz</option>
            <option value="robotics">Robotics Workshop</option>
          </select>

          <div className="rating-group">
            <label>Rate Your Experience:</label>
            <div className="rating-options">
              <label><input type="radio" name="rating" value="1" /> 1</label>
              <label><input type="radio" name="rating" value="2" /> 2</label>
              <label><input type="radio" name="rating" value="3" /> 3</label>
              <label><input type="radio" name="rating" value="4" /> 4</label>
              <label><input type="radio" name="rating" value="5" /> 5</label>
            </div>
          </div>

          <textarea rows="5" placeholder="Your Comments"></textarea>

          <button type="button" className="send-btn">
            Submit Feedback
          </button>
          <p className="note">
            ⚠ This is a demo form — no data will be submitted.
          </p>
        </form>
      </div>
    </section>
  );
}

export default feedback;
