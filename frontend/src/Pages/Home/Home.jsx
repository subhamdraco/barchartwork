import React from 'react'
import './Home.css';
import Herosection from '../../Components/Herosection/Herosection';
import SearchFrom from '../../Components/SearchFrom/SearchFrom';
import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
import Recommendation from '../../Components/RecommendationSection/Recommendation';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import FavouritesSection from '../../Components/FavouritesSection/FavouritesSection';
import RecentHolidays from '../../Components/RecentHolidays/RecentHolidays';
import NeedInspiration from '../../Components/NeedInspiration/NeedInspiration';

export default function Home() {
  return (
    <div className='home-page'>
        <Herosection/>
        <SearchFrom/>
        <LastHolidaysSection/>
        <div className="my-4 my-sm-5">
          <Recommendation itemRecommendedTitle="Recommended For You"/>
        </div>
        <HolidayPlanSection itemHolidayPlanTitle="Plan Your Summer Holidays"/>
        <FavouritesSection />
        <RecentHolidays />
        <NeedInspiration/>
    </div>
  )
}
