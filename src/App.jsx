import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Study from './Study/Study';
import Job from './Study/Job/Job';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/study' element={<Study />} />
          <Route path='/job' element={<Job />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
