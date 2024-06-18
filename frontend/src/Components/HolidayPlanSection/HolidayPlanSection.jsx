import React from 'react'
import './HolidayPlanSection.css'
import { Container } from 'react-bootstrap'
import GreenBtn from '../GreenBtn/GreenBtn'

export default function HolidayPlanSection(props) {
  return (
    <div className='holiday-plan-section py-5'>
        <Container className='h-100 d-flex flex-column align-items-start justify-content-end'>
                <h3 className='text-start text-light text-capitalize fw-semibold'>{props.itemHolidayPlanTitle}</h3>
                <p className="text-start text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit officia dolorem, unde facere, ipsa quas distinctio omnis ut alias vitae incidunt magnam? Reiciendis odio, doloremque velit repellendus autem esse impedit?
                </p>
                <GreenBtn btnTitle="Check Summer Deals"/>
        </Container>
      
    </div>
  )
}
