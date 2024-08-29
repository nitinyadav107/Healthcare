import 'bootstrap/dist/css/bootstrap.min.css';
import './diagnosisservice.css';
import diagnosisImage from '../assets/diagnosis.jpg'; // Replace with your actual image path

function DiagnosisService() {
    return (
        <>
            <nav className="navbar diagnosis">
                <div className="container-fluid diagnosiselement">
                    <a className="head" href="#">Diagnosis Service</a>
                </div>
            </nav>
            <div className='content'>
                <div className='writing'>
                    <img className='image'
                        src={diagnosisImage} alt="Diagnosis" />
                </div>

                <div className='writing'>
                    <h3 className='About'>About Our Diagnosis Services</h3>
                    <p className='para'>
                        At AyurShakti, we offer comprehensive diagnosis services to help identify and address your health concerns. Our state-of-the-art facilities and experienced professionals ensure accurate and timely diagnosis, so you can take the next steps toward your health and wellness.
                    </p>
                </div>
            </div>
        </>
    );
}

export default DiagnosisService;
