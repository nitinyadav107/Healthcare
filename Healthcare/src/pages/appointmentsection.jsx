import 'bootstrap/dist/css/bootstrap.min.css';
import './Appointmentsection.css';
import bn3 from '../assets/bn5.jpg';
import { useState } from 'react';

const hospitalData = [
    {
        id: '1',
        name: 'Kailash Hospital',
        location: 'Greater Noida',
        departments: [
            {
                name: 'Cardiology',
                doctors: [
                    { name: 'Dr. S K Aggarwal', available: true },
                    { name: 'Dr. Rohit Rai', available: true },
                ],
            },
            {
                name: 'Neurology',
                doctors: [{ name: 'Dr. Manish Kr. Sinha', available: true }],
            },
        ],
    },
    {
        id: '2',
        name: 'Navin Hospital',
        location: 'Greater Noida',
        departments: [
            {
                name: 'Dental Surgery',
                doctors: [{ name: 'Dr. N. K. Garg', available: true }],
            },
            {
                name: 'Chest Physician',
                doctors: [
                    { name: 'Dr. Shekhar Singh', available: true },
                    { name: 'Dr. Sumeet Kumar', available: true },
                ],
            },
        ],
    },
    {
        id: '3',
        name: 'Yatharth Hospital',
        location: 'Greater Noida',
        departments: [
            {
                name: 'Dental Surgery',
                doctors: [{ name: 'Dr. Neema Garg', available: true }],
            },
            {
                name: 'Chest Physician',
                doctors: [
                    { name: 'Dr. Nitin Singh', available: true },
                    { name: 'Dr. Amit Kumar', available: true },
                ],
            },
        ],
    },
];

const Appointment = () => {
    const [location, setLocation] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [filteredHospitals, setFilteredHospitals] = useState([]);

    const handleSearch = () => {
        // Filter hospitals based on location and specialization
        const filtered = hospitalData
            .filter(
                (hospital) =>
                    hospital.location.toLowerCase() === location.toLowerCase() &&
                    hospital.departments.some((dept) =>
                        dept.name.toLowerCase().includes(specialization.toLowerCase())
                    )
            )
            .map((hospital) => ({
                ...hospital,
                departments: hospital.departments.filter((dept) =>
                    dept.name.toLowerCase().includes(specialization.toLowerCase())
                ),
            }));

        setFilteredHospitals(filtered);
    };

    return (
        <div className="container">
            {/* Banner Image */}
            <div className="banner">
                <img src={bn3} alt="Banner" className="img-fluid" />
            </div>

            {/* Location and Specialization Input Container */}
            <div className="location-container mt-4 p-4 rounded shadow">
                <h3 className="text-center">Find Doctors Near You</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="location">Enter Your Location</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-geo-alt"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="location"
                                    placeholder="Enter your location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="specialization">Specialization</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="specialization"
                                    placeholder="Enter specialization"
                                    value={specialization}
                                    onChange={(e) => setSpecialization(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Button */}
                <div className="text-center mt-4">
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Search <i className="bi bi-search ms-2"></i>
                    </button>
                </div>
            </div>

            {/* Nearby Hospitals List */}
            <div className="hospitals-container mt-5 p-4 rounded shadow">
                <h4 className="text-center mb-4">Nearby Hospitals</h4>
                <div className="hospital-list">
                    {filteredHospitals.length > 0 ? (
                        filteredHospitals.map((hospital) => (
                            <div key={hospital.id} className="hospital-item mb-3 p-3 rounded shadow">
                                <h5>{hospital.name}</h5>
                                <p className="text-muted">Location: {hospital.location}</p>
                                {hospital.departments.map((dept) => (
                                    <div key={dept.name} className="dept-section mt-3">
                                        <h6 className="dept-name">{dept.name}</h6>
                                        {dept.doctors.map((doctor) => (
                                            <div key={doctor.name} className="doctor-info d-flex justify-content-between align-items-center">
                                                <div className="doctor-details">
                                                    <strong>{doctor.name}</strong>
                                                </div>
                                                <button
                                                    className={`btn btn-sm ${doctor.available ? 'btn-primary' : 'btn-secondary'}`}
                                                    disabled={!doctor.available}
                                                >
                                                    {doctor.available ? 'Book Appointment' : 'Not Available'}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No hospitals found for the given location and specialization.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Appointment;
