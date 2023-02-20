import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import {Router, Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Category from './Pages/Category';
import Footer from './Components/Footer';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import About from './Pages/About';


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/category" element={<Category/>} />
  <Route path="/cart" element={<Cart/>} />
  <Route path="/check" element={<Checkout/>} />
  <Route path="/about" element={<About/>} />

    </Routes>
    <Footer/>
  
    </>
  )
}

export default App
