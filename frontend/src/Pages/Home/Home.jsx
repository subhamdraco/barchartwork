import React from 'react'
import './Home.css';
import Herosection from '../../Components/Herosection/Herosection';
import SearchFrom from '../../Components/SearchFrom/SearchFrom';

export default function Home() {
  return (
    <div className='home-page'>
        <Herosection/>
        <SearchFrom/>
    </div>
  )
}
