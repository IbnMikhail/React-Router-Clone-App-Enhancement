import React from 'react';
import './App.css'
import Nav from './components/Nav';
import Header from './components/Header';
import Features from './components/Features';
import Row from './components/Row';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <Nav />
       <Header />
       <Features />
       <Row />
       <Faq />
       <Footer />
      
    </>
  )
}

export default App
