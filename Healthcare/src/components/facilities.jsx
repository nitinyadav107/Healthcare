import './facilities.css';
import insurance from '../assets/insurance.png';
import diagnosis from '../assets/diagnosis.png';
import delivery from '../assets/delivery.png';

function Facilities() {
  return (
    <div className="container_box">
      <div className="heading">Taking care of your health</div>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <div className="icons">
              <img className="icon_image" src={insurance} alt="insurance" />
            </div>
            <p className='icon_heading'>Specialist 
            Doctors</p>
            <p className='content'>we pride ourselves on offering a comprehensive range of specialized </p>
            <span ><a className='read_more' href="#">Read More</a></span>
          </div>
          <div className="col">
            <div className="icons">
              <img className="icon_image" src={diagnosis} alt="diagnosis" />
            </div>
            <p className='icon_heading'>Diagnostic Services</p>
            <p className='content'>we understand that accurate and timely diagnosis is the cornerstone of effective</p>
            <span ><a className='read_more' href="#">Read More</a></span>
          </div>
          <div className="col">
            <div className="icons">
              <img className="icon_image" src={delivery} alt="delivery" />
            </div>
            <p className='icon_heading'>Medicine Delivery</p>
            <p className='content'>we understand the importance of timely access to medications, especially when </p>
            <span ><a className='read_more' href="#">Read More</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;