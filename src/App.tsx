import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import {Router, Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Category from './Pages/Category';


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/category" element={<Category/>} />
    </Routes>
    
  
    </>
  )
}

export default App
