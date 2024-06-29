import React , {useEffect}  from 'react'
import './Buses.css'
import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
import host from '../../Assets/Host';
import axios from "axios";

export default function Buses() {
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
      <div className="bus-hero-section"><SecondHeroSection HeroTitle="The Road Awaits - Book Your Seat Today"/></div>
    </div>
  )
}
