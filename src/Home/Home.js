import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

const doctors = [
    { id: 1, name: 'Ocean Garner', speciality: 'PULMONOLOGIST', rating: 5 },
    { id: 2, name: 'Kennan Hess', speciality: 'GENERAL_PHYSICIAN', rating: 4 },
    { id: 3, name: 'Blossom Valentine', speciality: 'PULMONOLOGIST', rating: 5 },
];

const appointments = [
    { name: "Dr. Hermione Kelley", date: "2021-08-02", symptoms: "", history: "" },
    { name: "Dr. Alexis Rodriguez", date: "2021-08-02", symptoms: "", history: "" },
    { name: "Dr. Alexis Rodriguez", date: "2021-08-01", symptoms: "Cold", history: "NA" },
];

const specialities = ['All', 'PULMONOLOGIST', 'GENERAL_PHYSICIAN'];

function Home() {
    const location = useLocation();
    const isDoctorPage = location.pathname === '/';

    const [selectedSpeciality, setSelectedSpeciality] = useState('All');

    const handleSpecialityChange = (e) => {
        setSelectedSpeciality(e.target.value);
    };

    const filteredDoctors = selectedSpeciality === 'All'
        ? doctors
        : doctors.filter(doc => doc.speciality === selectedSpeciality);

    return (
        <div className="home-container">
            {isDoctorPage ? (
                <>
                    <div className="filter-section">
                        <label htmlFor="speciality">Select Speciality:</label>
                        <select id="speciality" value={selectedSpeciality} onChange={handleSpecialityChange}>
                            {specialities.map((spec, index) => (
                                <option key={index} value={spec}>{spec.replace('_', ' ')}</option>
                            ))}
                        </select>
                    </div>

                    <div className="doctors-list">
                        {filteredDoctors.map(doctor => (
                            <div key={doctor.id} className="card-box">
                                <div className="doctor-card">
                                    <h3>Doctor Name: {doctor.name}</h3>
                                    <p><strong>Speciality:</strong> {doctor.speciality}</p>
                                    <p><strong>Rating:</strong> {'⭐'.repeat(doctor.rating)}</p>
                                    <div className="button-group">
                                        <button className="appointment-btn">Book Appointment</button>
                                        <button className="details-btn">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="appointments-list">
                    {appointments.map((appt, index) => (
                        <div key={index} className="appointmentcard-box">
                            <div className="doctor-card">
                                <h3>{appt.name}</h3>
                                <p><strong>Date:</strong> {appt.date}</p>
                                <p><strong>Symptoms:</strong> {appt.symptoms || "N/A"}</p>
                                <p><strong>Prior Medical History:</strong> {appt.history || "N/A"}</p>
                                <button className="Rate-button">RATE APPOINTMENT</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
