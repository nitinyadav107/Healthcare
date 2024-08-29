import 'bootstrap/dist/css/bootstrap.min.css';
import './medicinedeliverysection.css';
import medicineImage from '../assets/medicine.jpg'; // Replace with your actual image path

function MedicineDelivery() {
    return (
        <>
            <nav className="navbar medicine">
                <div className="container-fluid medicineelement">
                    <a className="head" href="#">Medicine Delivery</a>
                </div>
            </nav>
            <div className='content'>
                <div className='writing'>
                    <img className='image'
                        src={medicineImage} alt="Medicine Delivery" />
                </div>

                <div className='writing'>
                    <h3 className='About'>About Our Medicine Delivery</h3>
                    <p className='para'>
                        At AyurShakti, we bring healthcare to your doorstep with our reliable and fast medicine delivery service. Whether you need a regular refill or urgent medication, our delivery system ensures you get your medicines on time, every time.
                    </p>
                </div>
            </div>
        </>
    );
}

export default MedicineDelivery;
