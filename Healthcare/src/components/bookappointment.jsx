import './bookappointment.css'
import { NavLink } from 'react-router-dom';
function BookAppointment() {
    return (
        <div className="book-appointment">
            <h2>Schedule your appointment online</h2>
            {/* <button type="button" className="btn btn-outline-light">Book Appointment</button> */}
            <NavLink to="/appointmentsection" className="read-more btn btn-outline-light btn-light">Book Appointment</NavLink>

        </div>
    );
}
export default BookAppointment;