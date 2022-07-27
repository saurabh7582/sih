import React from 'react'
import FeatureSection from '../Component/FeatureSection'
import Footer from '../Component/Footer'
import Hero from '../Component/Hero'
import SimpleThreeColumns from '../Component/SimpleThreeColumns'

function LandingPage() {
  return (
    <>
      <Hero /> 
      <FeatureSection />
      <SimpleThreeColumns /> 
      <Footer />
    </>
  )
}

export default LandingPage