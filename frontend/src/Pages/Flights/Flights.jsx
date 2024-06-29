import React  , {useEffect} from 'react'
import './Flights.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import FlightSearchForm from '../../Components/FlightSearchForm/FlightSearchForm';
import Quicklinks from '../../Components/Quicklinks/Quicklinks';
import host from '../../Assets/Host';
import axios from "axios";


export default function Flights() {
  useEffect(() => {
    if(localStorage.getItem('access_token') === null){                   
        window.location.href = '/'
    }
    else{
     (async () => {
       try {
         const Authorization = localStorage.getItem('access_token')
         await axios.get(   
                        `${host}/login/` ,{
                          withCredentials: true,
                         headers: {
                              Authorization : "Bearer " + Authorization,
                            'Content-Type': 'application/json'
                         }}
                       );
      } catch (e) {
        window.location.href = '/'
      }
     })()};
 }, []);
  return (
    <div>
      <div className="flight-section"><SecondHeroSection HeroTitle="Where Every Journey Takes Flight"/></div>
      <FlightSearchForm/>
      <Quicklinks/>
    </div>
  )
}  
