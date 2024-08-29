import './facilities.css';
import insurance from '../assets/insurance.png';
import diagnosis from '../assets/diagnosis.png';
import delivery from '../assets/delivery.png';
import { NavLink } from 'react-router-dom';

function Facilities() {
  return (
    <div className="facilities-container">
      <h2 className="heading">Taking care of your health</h2>
      <div className="row text-center">
        <div className="col facility">
          <img className="icon-image" src={insurance} alt="insurance" />
          <h3 className="icon-heading">Specialist Doctors</h3>
          <p className="content">We pride ourselves on offering a comprehensive range of specialized services.</p>
          <NavLink to="/specialiseddoctor" className="read-more">Read More</NavLink>
        </div>
        <div className="col facility">
          <img className="icon-image" src={diagnosis} alt="diagnosis" />
          <h3 className="icon-heading">Diagnostic Services</h3>
          <p className="content">Accurate and timely diagnosis is the cornerstone of effective treatment.</p>
          <NavLink to="/diagonisisservices" className="read-more">Read More</NavLink>
        </div>
        <div className="col facility">
          <img className="icon-image" src={delivery} alt="delivery" />
          <h3 className="icon-heading">Medicine Delivery</h3>
          <p className="content">We understand the importance of timely access to medications.</p>
          <NavLink to="/medicinedeliverysection" className="read-more">Read More</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
