import React from 'react'
import './App.css'
import Smallnavbar from './Components/Task/Smallnavbar'
import Header from './Components/Task/Header'
import SectionPage from './Components/Task/SectionPage'
import AboutPage from './Components/Task/AboutPage'
import FeaturesPage from './Components/Task/FeaturesPage'
import PricingPage from './Components/Task/PricingPage'
import LocationsPage from './Components/Task/LocationsPage'
import SubscribePage from './Components/Task/SubscribePage'
import FooterPage from './Components/Task/FooterPage'

function App() {
  return (
    <div>
     <Smallnavbar/>
     <Header/>
     <SectionPage/>
     <AboutPage/>
     <FeaturesPage/>
     <PricingPage/>
     <LocationsPage/>
     <SubscribePage/>
     <FooterPage/>
    </div>
  )
}

export default App
