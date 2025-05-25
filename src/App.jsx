import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import FoodDetail from './pages/FoodDetail';
import Menu from './pages/Menu';
import About from './pages/About';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Help from './pages/Help';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './index.css';


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food/:foodId" element={<FoodDetail />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} /> 
        
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;