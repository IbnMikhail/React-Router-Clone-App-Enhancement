import { useState } from 'react'
import React from 'react';
import './App.css'
import Nav from './components/Nav';
import Header from './components/Header';
import Features from './components/Features';
import Row from './components/Row';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { Outlet, Link } from 'react-router-dom';

function App() {
  

  return (
    <>
    <div>
       <Nav />
       <Header />
       <Row />
       <Faq />
       <Footer />
    </div>
    <div>
      <Outlet />
    </div>
    </>
      
  
  )
}

export default App
