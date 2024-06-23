import React from 'react'
import './Flights.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import FlightSearchForm from '../../Components/FlightSearchForm/FlightSearchForm';
import Quicklinks from '../../Components/Quicklinks/Quicklinks';

export default function Flights() {
  return (
    <div>
      <div className="flight-section"><SecondHeroSection HeroTitle="Where Every Journey Takes Flight"/></div>
      <FlightSearchForm/>
      <Quicklinks/>
    </div>
  )
}  
