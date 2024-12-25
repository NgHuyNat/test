import './App.css';
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Pages/Home';
import Login from './Component/Login/Login'
import Restaurants from './Component/Pages/Restaurants';
import Signup from './Component/Login/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CartProvider from "./Component/Context/CartContext";
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <CartProvider>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className='page-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Restaurants' element={<Restaurants />} />
            <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/Signup' element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
