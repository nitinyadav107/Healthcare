import 'bootstrap/dist/css/bootstrap.min.css';
import './Appointmentsection.css';
import bn3 from '../assets/bn5.jpg';

const Appointment = () => {
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
                                <input type="text" className="form-control" id="location" placeholder="Enter your location" />
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
                                <input type="text" className="form-control" id="specialization" placeholder="Enter specialization" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Button */}
                <div className="text-center mt-4">
                    <button className="btn btn-primary">
                        Search <i className="bi bi-search ms-2"></i>
                    </button>
                </div>
            </div>



            {/* Nearby Hospitals List */}
            <div className="hospitals-container mt-5 p-4 rounded shadow">
                <h4 className="text-center mb-4">Nearby Hospitals</h4>
                <div className="hospital-list">
                    {/* Example Hospital Item */}
                    <div className="hospital-item mb-3 p-3 rounded shadow">
                        <h5>Hospital Name</h5>
                        <p>Location: XYZ Street, City</p>
                        <div className="doctor-info">
                            <div className="doctor-name">Dr. John Doe</div>
                            <div className="doctor-options">
                                <button className="btn btn-primary btn-sm me-2">Onsite Checkup</button>
                                <button className="btn btn-secondary btn-sm">Online Checkup</button>
                            </div>
                            <div className="doctor-fees mt-2">Fees: $100</div>
                        </div>
                    </div>
                    {/* Repeat for other hospitals */}
                </div>
            </div>
        </div>
    );
};

export default Appointment;
