import './App.css';
import Login from './Components/Login'
import Signup from './Components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Accounts from './Components/Accounts';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Accounts />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
