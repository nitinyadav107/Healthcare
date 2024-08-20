import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './slider.css'
import bn1 from '../assets/bn1.jpg';
import bn3 from '../assets/bn3.jpg';
import bn4 from '../assets/bn4.jpg';
import bn5 from '../assets/bn5.jpg';

function Slider(){
    return(
        <>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={bn1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={bn3} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={bn4} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={bn5} className="d-block w-100" alt="..."/>
            </div>
        </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
         </div>
        </>
    );
}
export default Slider;