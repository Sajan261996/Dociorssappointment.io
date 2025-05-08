import React from "react";
import { useLocation } from "react-router-dom";
import DoctorsList from "../Screens/Doctorslist";
import "./Home.css";

const appointments = [
  { name: "Dr. Hermione Kelley", date: "2021-08-02", symptoms: "", history: "" },
  { name: "Dr. Alexis Rodriguez", date: "2021-08-02", symptoms: "", history: "" },
  { name: "Dr. Alexis Rodriguez", date: "2021-08-01", symptoms: "Cold", history: "NA" },
];

function Home() {
  const location = useLocation();
  const isDoctorPage = location.pathname === "/";

  return (
    <div className="home-container">
      {isDoctorPage ? (
        <DoctorsList />
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
