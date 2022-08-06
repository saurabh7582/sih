import React from 'react'
import FeatureSection from '../Component/FeatureSection'
import Footer from '../Component/Footer'
import Head from '../Component/Head'
import Help from '../Component/Help'
import Hero from '../Component/Hero'
// import SimpleThreeColumns from '../Component/SimpleThreeColumns'

function LandingPage() {
  return (
    <>
      <Head />
      <Hero /> 
      <FeatureSection />
      <Help />
      {/* <SimpleThreeColumns />  */}
      <Footer />
    </>
  )
}

export default LandingPage