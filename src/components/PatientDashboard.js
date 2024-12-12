// src/components/PatientDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PatientDashboard.css';  // You can add styles in this file for layout and design

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard-container">
      <h1>Patient Dashboard</h1>
      <div className="dashboard-cards">
        {/* Create Appointment */}
        <div className="card">
          <h2>Create Appointment</h2>
          <p>Book a new appointment with a doctor.</p>
          <Link to="/create-appointment" className="btn">
            Create Appointment
          </Link>
        </div>

        {/* Manage Appointment */}
        <div className="card">
          <h2>Manage Appointment</h2>
          <p>Edit or cancel your existing appointments.</p>
          <Link to="/manage-appointment" className="btn">
            Manage Appointment
          </Link>
        </div>

        {/* View My Records */}
        <div className="card">
          <h2>View My Records</h2>
          <p>View your medical history and appointment records.</p>
          <Link to="/view-records" className="btn">
            View Records
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
