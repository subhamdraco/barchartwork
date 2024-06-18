import React from 'react'
import './LastHolidaysSection.css';
import { Container } from 'react-bootstrap';
import LastHolidayCard from './LastHolidayCard';
import LasHolidaysItems from '../../Assets/LastMinuteHolidayItems'

export default function LastHolidaysSection() {
  return (
    <div className='last-holidays-section my-4 my-sm-5'>
      <Container>
        <h2 className="text-uppercase fw-semibold my-4 my-sm-5 pt-lg-4">
            Last Minute Holidays
        </h2>
        <div className="row g-4">
            {
                LasHolidaysItems.map((item) => <LastHolidayCard key={item.id} itemImage={item.itemImage} itemTitle= {item.itemTitle} itemDescription={item.itemDescription}/>)
            }
        </div>
      </Container>
    </div>
  )
}
