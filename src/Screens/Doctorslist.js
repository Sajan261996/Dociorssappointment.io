import React from 'react';
import '../Home/Home.css';

const doctors = [
    { id: 1, name: 'Ocean Garner', speciality: 'PULMONOLOGIST', rating: 5 },
    { id: 2, name: 'Kennan Hess', speciality: 'GENERAL_PHYSICIAN', rating: 4 },
    { id: 3, name: 'Blossom Valentine', speciality: 'PULMONOLOGIST', rating: 5 },
];

const DoctorsList = () => {
    return(
        <div className='home-container'>
            <div className='filter-section'>
                <label htmlFor='speciality'> Selected Speciality</label>
                <select id='speciality'>
                    <option value=''>---Select---</option>
                    <option value='PULMONOLOGIST'>PULMONOLOGIST</option>
                    <option value='GENRAL_PHYSICIAN'>GENRAL_PHYSICIAN</option>
                </select>
            </div>

            <div className='doctors-list'>
                {doctors.map((doc) => (
                    <div key={doc.id} className='doctors-card'>
                        <h3>Doctors Name : {doc.name}</h3>
                        <p>Speciality : {doc.speciality}</p>
                        <p>Rating :{' '}
                            {Array.from({ length: doc.rating }, (_, i) => (
                            <span key={i}>⭐</span>
                            ))}
                        </p>
                        <div className="button-group">
                            <button className="appointment-btn">Book Appointment</button>
                            <button className="details-btn">View Details</button>
                            </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default DoctorsList;
