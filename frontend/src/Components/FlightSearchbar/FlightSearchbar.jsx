import React from 'react'
import './FlightSearchbar.css'

export default function FlightSearchbar() {
  return (
    <div className='headerSearch'>
        <div className="headerSearchItem">
            <i class="ri-flight-takeoff-line"></i>
            <input 
            type='text' 
            placeholder='From'
            className='headerSearchInput'/>
        </div>
    </div>
  )
}
