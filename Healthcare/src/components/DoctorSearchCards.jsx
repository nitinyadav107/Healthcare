import 'bootstrap/dist/css/bootstrap.min.css';
import './DoctorSearchCards.css';
import mental from '../assets/mental.jpg';
import physician from '../assets/physician.jpg';
import knee from '../assets/knee.jpg';

const DoctorSearchCards = () => {
    const cards = [
        {
            title: 'Top rated Primary Care physicians',
            image: physician,
        },
        {
            title: 'Orthopedic Surgeons for Knee & Leg Surgery',
            image: knee,
        },
        {
            title: 'Mental Health Professionals with virtual appointments',
            image: mental,
        },
    ];

    return (
        <div className="custom-container text-center my-5">
            <h2 className="heading mb-3">
                Search by a <span className="highlight">specific need</span>
            </h2>
            <p className="subtitle mb-4">
                Find more than a good doctor. Find the right doctor for you.
            </p>
            <div className="d-flex justify-content-center flex-nowrap gap-3">
                {cards.map((card, index) => (
                    <div key={index} className="card-wrapper">
                        <div className="card custom-card">
                            <img src={card.image} className="card-img-top" alt={card.title} />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorSearchCards;
