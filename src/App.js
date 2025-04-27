import './App.css';
import Header from './commons/Header';
import Login from './login/Login';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
