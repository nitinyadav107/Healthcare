import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
import BookAppointment from './components/bookappointment';
import Facilities from './components/facilities';
import Footer from './components/footer';
import Login from './pages/login';
import Signup from './pages/signup';
import SpecialisedDoctor from './pages/specialiseddoctor';
import Appointment from './pages/appointmentsection';
import DiagnosisService from './pages/diagonisisservice';
import MedicineDelivery from './pages/medicinedeliverysection';
import Contact from './pages/contact';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={
          <>
            <Slider />
            <BookAppointment />
            <Facilities />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/specialiseddoctor" element={<SpecialisedDoctor />} />
        <Route path="/appointmentsection" element={< Appointment />} />
        <Route path="/diagonisisservices" element={< DiagnosisService />} />
        <Route path="/medicinedeliverysection" element={< MedicineDelivery />} />
        <Route path="/contact" element={< Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
