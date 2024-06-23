import React from 'react'
import './NavBar.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AirplaneLogo from '../../Assets/Icons/airplane.svg'

export default function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className='postion-absolute w-100 z-2'>
        <Container>
            <Navbar.Brand className='text-light'>
                <Link to='/' className='text-decoration-none text-light d-flex'>
                    <img className="me-2" alt="logo"  src={AirplaneLogo}/>
                    Book My Travel
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='text-light'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto w-100 justify-content-center'>
                    <Link to='/' className='text-light nav-link'>
                        Home
                    </Link>
                    <Link to='/flights' className='text-light nav-link'>
                        Flights
                    </Link>
                    <Link to='/hotels' className='text-light text-capitalize nav-link'>
                        Hotels
                    </Link>
                    <Link to='/buses' className='text-light nav-link'>
                        Buses
                    </Link>
                    <Link to='/holidays' className='text-light nav-link'>
                        Holidays
                    </Link>
                </Nav>
                <Button variant='light'>
                    <Link to='/' className='text-decoration-none text-capitalize text-dark text-nowrap'>Sign in
                    </Link>
                </Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
