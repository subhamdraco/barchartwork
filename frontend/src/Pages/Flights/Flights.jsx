import React from 'react'
import './Flights.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import FlightSearchForm from '../../Components/FlightSearchForm/FlightSearchForm';

export default function Flights() {
  return (
    <div>
      <div className="flight-section"><SecondHeroSection FlightHeroTitle="Where Every Journey Takes Flight"/></div>
      <FlightSearchForm/>
    </div>
  )
}  
