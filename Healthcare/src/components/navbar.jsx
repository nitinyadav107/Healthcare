import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0 logo_container">
        <img className='logo' src={logo} alt="Logo" />
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <NavLink to="/" className="nav-link px-2 link-secondary" activeClassName="active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link px-2" activeClassName="active">
            ABOUT US
          </NavLink>
        </li>

        <li className="dropdown">
          <NavLink
            to="/departments"
            className="nav-link px-2 "
            activeClassName="active"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            DEPARTMENTS
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><NavLink className="dropdown-item" to="/departments/cardiology">Cardiology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/neurology">Neurology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/oncology">Oncology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/pediatrics">Pediatrics</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/orthopedics">Orthopedics</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/dermatology">Dermatology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/gastroenterology">Gastroenterology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/gynecology">Gynecology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/urology">Urology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/emergency-medicine">Emergency Medicine</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/radiology">Radiology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/anesthesiology">Anesthesiology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/pathology">Pathology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/nephrology">Nephrology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/pulmonology">Pulmonology</NavLink></li>
            <li><NavLink className="dropdown-item" to="/departments/psychiatry">Psychiatry</NavLink></li>
          </ul>
        </li>

        <li>
          <NavLink to="/insurance" className="nav-link px-2" activeClassName="active">
            INSURANCE
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link px-2" activeClassName="active">
            CONTACT
          </NavLink>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <NavLink to="/login" className="btn btn-outline-primary me-2">
          Login
        </NavLink>
        <NavLink to="/signup" className="btn btn-primary">
          Sign-up
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
