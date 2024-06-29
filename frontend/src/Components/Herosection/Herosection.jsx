import React from 'react'
import './Herosection.css';
import { Carousel } from 'react-bootstrap';
import GreenBtn from '../GreenBtn/GreenBtn';

export default function Herosection() {
  return (
    <div className='hero-section'>
        <Carousel className='car bg-dark'>
            <Carousel.Item className='carousel-item1 vh-100 rounded-0 border-0'>
                <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-top'>
                    <div className="row h-100">
                        <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                            <h1 className="text-capitalize text-start">
                                Find Your Perfect holiday
                            </h1>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur perferendis vel, corrupti quibusdam aliquam? Consequatur sapiente eius, explicabo doloribus earum, modi ipsum assumenda facere, dolorem optio omnis deleniti neque!
                                <GreenBtn btnTitle="Check Our Holidays" btnLink="/holidays"/>
                            </p>
                        </div> 
                        <div className='col-lg-6 d-none d-lg-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item2 vh-100 rounded-0 border-0'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                            <h1 className="text-capitalize text-start">
                                Do You want to book a flight?
                            </h1>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur perferendis vel, corrupti quibusdam aliquam? Consequatur sapiente eius, explicabo doloribus earum, modi ipsum assumenda facere, dolorem optio omnis deleniti neque!
                                <GreenBtn btnTitle="Book A Flight Now" btnLink="/flights"/>
                            </p>
                        </div> 
                        <div className='col-lg-6 d-none d-lg-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item3 vh-100 rounded-0 border-0'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                    <div className='col-lg-6 d-none d-lg-block'></div>
                        <div className="col-lg-6 d-flex flex-column align-items-end justify-content-center">
                            <h1 className="text-capitalize text-start">
                                Travel Anywhere
                            </h1>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur perferendis vel, corrupti quibusdam aliquam? Consequatur sapiente eius, explicabo doloribus earum, modi ipsum assumenda facere, dolorem optio omnis deleniti neque!
                                <GreenBtn btnTitle="Check All Hotels" btnLink="/hotels" />
                            </p>
                        </div> 
                       
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carousel-item4 vh-100 rounded-0 border-0'>
                <Carousel.Caption className='h-100'>
                    <div className="row h-100">
                        <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                            <h1 className="text-capitalize text-start">
                                The Road Awaits – Book Your Seat Today
                            </h1>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequatur perferendis vel, corrupti quibusdam aliquam? Consequatur sapiente eius, explicabo doloribus earum, modi ipsum assumenda facere, dolorem optio omnis deleniti neque!
                                <GreenBtn btnTitle="Book A Bus Now" btnLink="/buses"/>
                            </p>
                        </div> 
                        <div className='col-lg-6 d-none d-lg-block'></div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}
