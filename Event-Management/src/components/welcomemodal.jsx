import React, { useState, useEffect } from "react";
import "../css/welcomemodal.css";

export default function WelcomeModal() {
  const [role, setRole] = useState(sessionStorage.getItem("userRole"));
  const [showModal, setShowModal] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    // Modal sirf tab show hoga jab session me role save na ho
    if (!role) {
      setShowModal(true);
    }
  }, [role]);

  const handleSelect = (selectedRole) => {
    setRole(selectedRole);
    sessionStorage.setItem("userRole", selectedRole);
    setShowModal(false);
    setShowMsg(true);

    // 5 sec ke baad welcome message hide
    setTimeout(() => setShowMsg(false), 5000);
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>👋 Welcome to CampusConnect</h2>
            <p>
              Hello <b>Students</b>, <b>Staff</b>, and <b>Users</b>!  
              Choose your role to get started.
            </p>

            <div className="modal-buttons">
              <button
                onClick={() => handleSelect("Student")}
                className="btn student"
              >
                I'm a Student
              </button>
              <button
                onClick={() => handleSelect("Staff")}
                className="btn staff"
              >
                I'm Staff
              </button>
              <button
                onClick={() => handleSelect("User")}
                className="btn user"
              >
                I'm a User
              </button>
            </div>
          </div>
        </div>
      )}

      {showMsg && (
        <div className="welcome-msg">
          🎉 Welcome {role}! Glad to have you on CampusConnect 🚀
        </div>
      )}
    </>
  );
}
