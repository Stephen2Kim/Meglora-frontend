// src/components/CreateAppointment.js
import React, { useState } from 'react';
import './CreateAppointment.css';

const CreateAppointment = () => {
  const [service, setService] = useState('');
  const [doctor, setDoctor] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  const [doctorsList, setDoctorsList] = useState([]);
  
  // Sample doctor data for each service
  const doctorsData = {
    Gynaecology: ['Dr. Anna Smith', 'Dr. Olivia Johnson'],
    Oncology: ['Dr. John Doe', 'Dr. Sarah Lee'],
    Dental: ['Dr. James Brown', 'Dr. Lily Green'],
    ENT: ['Dr. Harry White', 'Dr. Grace Black'],
  };
  
  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setService(selectedService);
    setDoctorsList(doctorsData[selectedService] || []);
    setDoctor(''); // Reset doctor selection
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment Scheduled!');
    // Here, you can send the form data to the server to save the appointment.
  };

  return (
    <div className="create-appointment-container">
      <h1>Create Appointment</h1>
      <form onSubmit={handleSubmit} className="appointment-form">
        {/* Service Dropdown */}
        <div className="form-group">
          <label htmlFor="service">Select Service</label>
          <select 
            id="service"
            value={service}
            onChange={handleServiceChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Gynaecology">Gynaecology</option>
            <option value="Oncology">Oncology</option>
            <option value="Dental">Dental</option>
            <option value="ENT">ENT</option>
          </select>
        </div>
        
        {/* Doctor Dropdown */}
        {service && (
          <div className="form-group">
            <label htmlFor="doctor">Select Doctor</label>
            <select 
              id="doctor"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              required
            >
              <option value="">Select a Doctor</option>
              {doctorsList.map((doc, index) => (
                <option key={index} value={doc}>{doc}</option>
              ))}
            </select>
          </div>
        )}
        
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        {/* Address Input */}
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* Date Input */}
        <div className="form-group">
          <label htmlFor="date">Appointment Date</label>
          <input 
            type="date" 
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        
        {/* Time Input */}
        <div className="form-group">
          <label htmlFor="time">Appointment Time</label>
          <input 
            type="time" 
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default CreateAppointment;
