// src/components/DoctorPortal.js
import React, { useState } from 'react';
import './DoctorPortal.css';
import { Link } from 'react-router-dom';

const DoctorPortal = () => {
  const [appointments] = useState([
    { id: 1, patientName: 'John Doe', appointmentDate: '2024-12-15', specialty: 'Gynaecology' },
    { id: 2, patientName: 'Jane Smith', appointmentDate: '2024-12-16', specialty: 'Oncology' },
    // Add more appointment data here
  ]);

  const [showDiagnosisForm, setShowDiagnosisForm] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [bp, setBp] = useState('');
  const [oxygen, setOxygen] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [prescription, setPrescription] = useState('');

  const handleDiagnosisSubmit = (e) => {
    e.preventDefault();
    alert('Diagnosis Saved!');
    // Here you would save the diagnosis to a server or database
  };

  const handleOfferDiagnosisClick = () => {
    setShowDiagnosisForm(!showDiagnosisForm); // Toggle form visibility
  };

  return (
    <div className="doctor-portal-container">
      <h1>Doctor's Portal</h1>

      {/* View Appointments */}
      <div className="card">
        <h2>View Appointments</h2>
        <p>Click to view scheduled appointments.</p>
        <Link to="/view-appointments" className="btn">View Appointments</Link>
      </div>

      {/* Offer Diagnosis */}
      <div className="card">
        <h2>Offer Diagnosis</h2>
        <p>Click to diagnose a patient.</p>
        <button className="btn" onClick={handleOfferDiagnosisClick}>
          Offer Diagnosis
        </button>

        {showDiagnosisForm && (
          <div>
            <h3>Diagnosis for {selectedPatient}</h3>
            <form onSubmit={handleDiagnosisSubmit}>
              <div className="form-group">
                <label htmlFor="patient">Select Patient</label>
                <select 
                  id="patient" 
                  value={selectedPatient} 
                  onChange={(e) => setSelectedPatient(e.target.value)}
                  required
                >
                  <option value="">Select Patient</option>
                  {appointments.map((appointment) => (
                    <option key={appointment.id} value={appointment.patientName}>
                      {appointment.patientName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Medical Data */}
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input 
                  type="number" 
                  id="age" 
                  value={age} 
                  onChange={(e) => setAge(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="height">Height (cm)</label>
                <input 
                  type="number" 
                  id="height" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="bp">Blood Pressure</label>
                <input 
                  type="text" 
                  id="bp" 
                  value={bp} 
                  onChange={(e) => setBp(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="oxygen">Oxygen Levels</label>
                <input 
                  type="text" 
                  id="oxygen" 
                  value={oxygen} 
                  onChange={(e) => setOxygen(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="symptoms">Symptoms</label>
                <textarea 
                  id="symptoms" 
                  value={symptoms} 
                  onChange={(e) => setSymptoms(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="diagnosis">Diagnosis</label>
                <textarea 
                  id="diagnosis" 
                  value={diagnosis} 
                  onChange={(e) => setDiagnosis(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="prescription">Prescription</label>
                <textarea 
                  id="prescription" 
                  value={prescription} 
                  onChange={(e) => setPrescription(e.target.value)} 
                  required 
                />
              </div>

              <button type="submit" className="btn">Save Diagnosis</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorPortal;
