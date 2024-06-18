import React from 'react'
import './Home.css';
import Herosection from '../../Components/Herosection/Herosection';
import SearchFrom from '../../Components/SearchFrom/SearchFrom';
import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';

export default function Home() {
  return (
    <div className='home-page'>
        <Herosection/>
        <SearchFrom/>
        <LastHolidaysSection/>
    </div>
  )
}
