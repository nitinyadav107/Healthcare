import 'bootstrap/dist/css/bootstrap.min.css';
import './specialiseddoctor.css';
import bn4 from '../assets/bn4.jpg';
function SpecialisedDoctor() {
    return (
        <>
            <nav className="navbar  about">
                <div className="container-fluid aboutelement">
                    <a className="heading" href="#">About Us</a>
                </div>
            </nav>
            <div className='content'>
                <div className='writing'>
                    <img className='image'
                        src={bn4} alt="" />
                </div>

                <div className='writing'>
                    <h3>About the Medical Clinic</h3>
                    <p className='para'>

                        Welcome to AyurShakti, your trusted partner in healthcare. We understand that managing your health can sometimes be overwhelming, which is why we've made it our mission to simplify the process. Our goal is to ensure that you receive the care and medications you need, without the hassle.

                    </p>

                </div>


            </div>
        </>


    );
}
export default SpecialisedDoctor;