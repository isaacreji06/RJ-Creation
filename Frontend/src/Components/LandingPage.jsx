import React from 'react'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import VisionsMissionsSection from './VisionsMissionSection'
import WhyChooseUs from './WhyChooseUs'
import CustomerCarousel from './CustomerCarousel'

function LandingPage() {
  return (
    <div>
        <HeroSection/>
        <AboutSection />
        <VisionsMissionsSection />
        <WhyChooseUs />
        <h1 className='font-orbitron font-bold text-4xl justify-self-center'>Our Clients</h1>
        <CustomerCarousel />
    </div>
  )
}

export default LandingPage