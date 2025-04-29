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
          {/* Correct routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />  
          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
