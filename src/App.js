import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IllnessCards from './components/IllnessCards';
import Cancer from './pages/Cancer';
import Aids from './pages/Aids';
import Diabetes from './pages/Diabetes';
import Pregnancy from './pages/Pregnancy';
import DentalHealth from './pages/DentalHealth';
import Optician from './pages/Optician';
import ENT from './pages/ENT';
import SexualHealth from './pages/SexualHealth';
import Psychology from './pages/Psychology';
import PatientDashboard from './components/PatientDashboard';
import CreateAppointment from './components/CreateAppointment';  // Create Appointment Component
import ManageAppointment from './components/ManageAppointment';  // Manage Appointment Component
import ViewRecords from './components/ViewRecords';  // View Records Component
import DoctorPortal from './components/DoctorPortal';
import LoginPage from './pages/LoginPage'; // Import LoginPage
import SignupPage from './pages/SignupPage'; // Import SignupPage
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

function App() {
  return (
    <AuthProvider>  {/* Wrap the app with AuthProvider */}
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            {/* Home page with illness cards */}
            <Route path="/" element={<IllnessCards />} />
            
            {/* Illness pages */}
            <Route path="/cancer" element={<Cancer />} />
            <Route path="/aids" element={<Aids />} />
            <Route path="/diabetes" element={<Diabetes />} />
            <Route path="/pregnancy" element={<Pregnancy />} />
            <Route path="/dental-health" element={<DentalHealth />} />
            <Route path="/optician" element={<Optician />} />
            <Route path="/ent" element={<ENT />} />
            <Route path="/sexual-health" element={<SexualHealth />} />
            <Route path="/psychology" element={<Psychology />} />
            
            {/* Login and Signup */}
            <Route path="/doctor-login" element={<LoginPage role="doctor" />} />
            <Route path="/patient-login" element={<LoginPage role="patient" />} />
            <Route path="/doctor-signup" element={<SignupPage role="doctor" />} />
            <Route path="/patient-signup" element={<SignupPage role="patient" />} />

            {/* Protected Routes */}
            <Route path="/doctor-portal" element={<ProtectedRoute component={DoctorPortal} role="doctor" />} />
            <Route path="/patient-dashboard" element={<ProtectedRoute component={PatientDashboard} role="patient" />} />

            {/* Appointment management */}
            <Route path="/create-appointment" element={<CreateAppointment />} />
            <Route path="/manage-appointment" element={<ManageAppointment />} />
            <Route path="/view-records" element={<ViewRecords />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
