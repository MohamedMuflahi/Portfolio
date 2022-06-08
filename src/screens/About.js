import React from 'react'
import Navbar from '../components/Navbar'
import AboutMe from '../components/AboutMe'
function About() {
  return (
    <div className="App">
    <Navbar />
    <div className="Content">
      <AboutMe/>
    </div>
  </div>
  )
}

export default About