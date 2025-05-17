import React, { useEffect, useState } from "react";
import "./dashboard.css";

interface AdoptionRequest {
  dogName: string;
  status: string;
}

interface Appointment {
  date: string;
  service: string;
}

const Dashboard = () => {
  const [userName, setUserName] = useState("User");
  const [adoptionRequests, setAdoptionRequests] = useState<AdoptionRequest[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Fetch user dashboard data
  useEffect(() => {
    // Simulating API call
    setUserName("John Doe");
    setAdoptionRequests([
      { dogName: "Bella", status: "Pending" },
      { dogName: "Max", status: "Approved" },
    ]);
    setAppointments([
      { date: "2024-12-25", service: "Grooming for Bella" },
      { date: "2025-01-10", service: "Vet visit for Max" },
    ]);
  }, []);

  return (
    <div className="dashboard">
      <h1>Welcome, {userName}!</h1>

      <section className="adoption-section">
        <h2>Adoption Requests</h2>
        <ul>
          {adoptionRequests.map((req, index) => (
            <li key={index}>
              <strong>{req.dogName}</strong> - {req.status}
            </li>
          ))}
        </ul>
      </section>

      <section className="appointments-section">
        <h2>Upcoming Appointments</h2>
        <ul>
          {appointments.map((apt, index) => (
            <li key={index}>
              {apt.date} - {apt.service}
            </li>
          ))}
        </ul>
      </section>

      <section className="quick-links">
        <h2>Quick Links</h2>
        <button>View Adoptable Dogs</button>
        <button>Book Grooming</button>
        <button>Update Profile</button>
      </section>
    </div>
  );
};

export default Dashboard;
