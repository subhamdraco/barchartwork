import React from 'react'
import './NavBar.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AirplaneLogo from '../../Assets/Icons/airplane.svg'
import axios from 'axios';

export default function NavBar() {

    const Logout = async () => {
          try {
            await axios.post('http://localhost:8000/logout/',{
                  refresh_token:localStorage.getItem('refresh_token')
                  } ,{headers: {'Content-Type': 'application/json'}},  
                  {withCredentials: true});
            localStorage.clear();
            axios.defaults.headers.common['Authorization'] = null;
            window.location.href = '/'
            } catch (e) {
              console.log('logout not working', e)
            }
          ;
     }

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
                <Nav className='ms-2 w-75 justify-content-center h5'>
                    <Link to='/home' className='text-light nav-link'>
                        Home
                    </Link>
                </Nav>
                <Nav className='ms-2 w-75 justify-content-center h5'>
                    <Link to='/flights' className='text-light nav-link'>
                        Flights
                    </Link>
                </Nav>
                <Nav className='ms-2 w-75 justify-content-center h5'>
                    <Link to='/hotels' className='text-light text-capitalize nav-link'>
                        Hotels
                    </Link>
                </Nav>
                <Nav className='ms-2 w-75 justify-content-center h5'>
                    <Link to='/buses' className='text-light nav-link'>
                        Buses
                    </Link>
                </Nav>
                <Nav className='ms-2 w-75 justify-content-center h5'>
                    <Link to='/holidays' className='text-light nav-link'>
                        Holidays
                    </Link>
                </Nav>
                <Nav className='ms-2 w-75 justify-content-center'>
                    <Button variant='light'>
                        <Link to='/' className='text-decoration-none text-capitalize text-dark text-nowrap' onClick={Logout}>Log Out
                        </Link>
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
