import './App.css';
import Header from './commons/Header';
import Home from './Home/Home';
import Login from './login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Route for Doctors (default) */}
          <Route path="/" element={<Home />} />
          
          {/* Route for Appointments using same Home component */}
          <Route path="/Appointment" element={<Home />} />

          {/* Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Redirect all unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
