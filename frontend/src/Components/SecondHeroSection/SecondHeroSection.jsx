import React from 'react'
import './SecondHeroSection.css'
import { Container } from 'react-bootstrap'

export default function SecondHeroSection(props) {
  return (
    <div className='second-hero-section'>
        <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
            <h1 className="text-capitalize">{props.HeroTitle}</h1>
        </Container>
    </div>
  )
}
