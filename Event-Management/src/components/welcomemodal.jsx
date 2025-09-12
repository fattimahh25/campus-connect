import React, { useState, useEffect } from "react";
import "../css/welcomemodal.css";

export default function WelcomeModal() {
  const [role, setRole] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showMsg, setShowMsg] = useState(false); // ✅ extra state for welcome msg

  // Check if user already selected role
  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) {
      setRole(savedRole);
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 2000); // hide after 2 sec
    } else {
      setShowModal(true);
    }
  }, []);

  const handleSelect = (selectedRole) => {
    setRole(selectedRole);
    localStorage.setItem("userRole", selectedRole); // save in localStorage
    setShowModal(false); // close modal
    setShowMsg(true); // show msg
    setTimeout(() => setShowMsg(false), 5000); // hide after 2 sec
  };

  return (
    <>
      {/* Modal only if role not chosen */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>👋 Welcome to CampusConnect</h2>
            <p>
              Hello <b>Students</b>, <b>Staff</b>, and <b>Users</b>!  
              Choose your role to get started.
            </p>

            <div className="modal-buttons">
              <button onClick={() => handleSelect("Student")} className="btn student">
                I'm a Student
              </button>
              <button onClick={() => handleSelect("Staff")} className="btn staff">
                I'm Staff
              </button>
              <button onClick={() => handleSelect("User")} className="btn user">
                I'm a User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Message after selection */}
      {showMsg && (
        <div className="welcome-msg">
          🎉 Welcome {role}! Glad to have you on CampusConnect 🚀
        </div>
      )}
    </>
  );
}
