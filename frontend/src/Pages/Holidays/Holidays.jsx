import React  , {useEffect} from 'react'
import './Holidays.css';
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import host from '../../Assets/Host';
import axios from "axios";

export default function Holidays() {
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
      <div className="holiday-hero-section"><SecondHeroSection HeroTitle="Discover Your Perfect Getaway"/></div>
    </div>
  )
}
