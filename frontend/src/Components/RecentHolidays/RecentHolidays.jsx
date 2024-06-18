import React from 'react'
import './RecentHolidays.css'
import { Container } from 'react-bootstrap'
import RecentHolidaysCard from './RecentHolidaysCard'
import RecentHolidaysItems from '../../Assets/RecentHolidaysItems'

export default function RecentHolidays() {
  return (
    <div>
      <div className="recent-holidays my-4 my-sm-5">
        <Container>
            <h2 className="text-uppercase fw-semibold mb-4">
                Recent holidays
            </h2>
            <div className="row g-4">
                {RecentHolidaysItems.map((item) => <RecentHolidaysCard key={item.id} itemImage={item.itemImage} itemTitle={item.itemTitle} itemDescription={item.Description} itemNights={item.itemNights} itemPrice={item.itemPrice} />)}
            </div>
        </Container>
      </div>
    </div>
  )
}
