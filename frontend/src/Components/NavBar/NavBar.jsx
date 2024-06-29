import React, { useState } from 'react'
import './NavBar.css';
import { Navbar, Nav, Container, Alert, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeLogo from '../../Assets/Icons/Home.png';
import FlightLogo from '../../Assets/Icons/Plane.png';
import HotelLogo from '../../Assets/Icons/Hotel.png';
import BusLogo from '../../Assets/Icons/Bus.png';
import HolidayLogo from '../../Assets/Icons/Holiday.png';
import MapLogo from '../../Assets/Icons/map.png';
import axios from 'axios';
import host from '../../Assets/Host';

export default function NavBar() {
    const [logoutSuccess, setlogoutSuccess] = useState(true)
    const [errorMessage, seterrorMessage] = useState('')
    let user = localStorage.getItem('user')
    const Logout = async () => {
          try {
            const refresh_token = localStorage.getItem('refresh_token')
            const auth_token = localStorage.getItem('access_token')
            await axios.post(`${host}/logout/`,{refresh_token: refresh_token} ,{headers: {Authorization: `Bearer ${auth_token}`}});
            localStorage.clear();
            axios.defaults.headers.common['Authorization'] = null;
            window.location.href = '/'
            } catch (e) {
                setlogoutSuccess(false);
                if (e.request) {
                    // Request was made but no response was received
                    seterrorMessage('Network Error: No response from server.');
                  }
                else {
                    // Something else happened in setting up the request
                    seterrorMessage(`Error: ${e.message}`);
                  }
            }
          ;
     }

  return (
    <div>
      <Navbar expand="lg" className='postion-absolute w-100 z-2'>
        <Container>
            {logoutSuccess === false && <Alert key='danger' variant='danger' dismissible>
            {errorMessage}
            </Alert>}
            <Navbar.Brand className='text-light'>
                <Link to='/home' className='text-decoration-none text-light d-flex'>
                    <img className="me-2" alt="logo"  src={MapLogo}/>
                    Book My Travel
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='text-light'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-2 w-75 justify-content-center h5'>
                    <Link to='/home' className='text-light nav-link'>
                    <img className="me-2" alt="logo"  src={HomeLogo} />Home
                    </Link>
                </Nav>
                <Nav className='ms-2 w-75 justify-content-center h5'>
                    <Link to='/flights' className='text-light nav-link'>
                        <img className="me-2" alt="logo"  src={FlightLogo}/>
                        Flights
                    </Link>
                </Nav>
                <Nav className='ms-2 w-75 justify-content-center h5'>
                    <Link to='/hotels' className='text-light text-capitalize nav-link'>
                        <img className="me-2" alt="logo"  src={HotelLogo}/>
                        Hotels
                    </Link>
                </Nav>
                <Nav className='ms-2 w-75 justify-content-center h5'>
                    <Link to='/buses' className='text-light nav-link'>
                        <img className="me-2" alt="logo"  src={BusLogo}/>
                        Buses
                    </Link>
                </Nav>
                <Nav className='ms-2 w-75 justify-content-center h5'>
                    <Link to='/holidays' className='text-light nav-link'>
                        <img className="me-2" alt="logo"  src={HolidayLogo}/>
                        Holidays
                    </Link>
                </Nav>
                <Nav className='ms-2 w-75 justify-content-center'>
                    <NavDropdown className='nav-user text-uppercase fw-semibold' title={user} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">
                            Account Details
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={Logout} className=''>
                            Log Out
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
