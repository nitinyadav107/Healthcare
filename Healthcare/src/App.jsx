import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar'
import Slider from './components/slider';
import BookAppointment from './components/bookappointment';
import Facilities from './components/facilities';
import Footer from './components/footer';


function App() {
  return (
    <>
      <Navbar />
      <Slider></Slider>
      <BookAppointment></BookAppointment>
      <Facilities></Facilities>
      <Footer></Footer>

    </>
  );
}

export default App;