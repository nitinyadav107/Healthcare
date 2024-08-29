import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
    return (
        <>
            <div className="contact-container mt-4 p-4 rounded shadow">
                <h2 className="text-center mb-4">Contact Us</h2>

                <div className="row">
                    <div className="col-md-6">
                        <h4>Contact Information</h4>
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaPhone className="contact-icon color" />
                                <span className="contact-text">+1 (123) 456-7890</span>
                            </div>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span className="contact-text">info@ayurshakti.com</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span className="contact-text">123 Wellness St, Health City, HC 45678</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h4>Get in Touch</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 color">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
