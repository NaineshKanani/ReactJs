import React from 'react'
import NavBar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import CardSection from './Components/CardSection'
import FooterSection from './Components/FooterSection'
import './App.css';

function App() {
  return (
    <div>
        <NavBar />
        <FeatureSection />
        <HeroSection />
        <CardSection />
        <FooterSection />

    </div>
  )
}

export default App;
