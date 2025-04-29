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
        <Home/>
        <Routes>
          {/* Route for Login */}
          <Route path="/login" element={<Login />} />
          {/* Redirect any unknown route to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
