import React from 'react'
import Navbar from '../components/Navbar'
import './Portfolio.css'
import Footer from '../components/Footer'
import Port from '../components/Port'
function Portfolio() {
  return (
    <div className="App">
    <Navbar />
    <div className="Content">
      <Port/>
      
    </div>
  </div>
  )
}

export default Portfolio