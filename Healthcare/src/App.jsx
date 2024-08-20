import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import Slider from './components/slider';
import BookAppointment from './components/bookappointment';
import Facilities from './components/facilities';
import Footer from './components/footer';
import Login from './pages/login';
import Signup from './pages/signup';
// import SpecialisedDoctor from './pages/specialiseddoctor';

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
        {/* <Route path="/specialiseddoctor" element={<SpecialisedDoctor />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
