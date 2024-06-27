import React, { useState } from 'react'
import './Register.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdTravelExplore } from "react-icons/md";
import { Button , Form } from 'react-bootstrap';

export default function Register() {
    const [userplaceholder, setuserplaceholder] = useState('Username')
    const [validated, setValidated] = useState(false);
    const [formData , setformData] = useState({
        first_name:'',
        last_name: '',
        mobile: '',
        email: '',
        whatsapp: '',
        ag_name:'',
        ag_add:'',
        ag_country: '',
        ag_state: '',
        ag_city: '',
        ag_pincode: '',
        username:'',
        password: '',
    })

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setformData((prev) => { 
            return {
            ...prev,
            [name] : value
        };
    });
        setuserplaceholder(e.target.value)
    };

    const formsubmit = (e) =>{
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.stopPropagation();
        }
    
        setValidated(true);
        const finaldata = {
            ...formData,
            username: formData.mobile
        }

        console.log(finaldata); //finaldata to be stored in db
    }

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-end shadow">
            <Container>
                <Navbar.Brand href="/"><MdTravelExplore />  Book My Travel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="/"><Button variant='dark' size='md'>Login Page</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container>
            <h1 className='mt-4'>Get Started - Register</h1>
            <Form noValidate onSubmit={formsubmit} validated={validated}>
            <div className="row mt-5">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3><span className='shadow rounded'>Personal Details</span></h3>
                </div>
            </div>
            <div className="row head-row">
                <div className="col-lg-6">
                    <Form.Group className="mb-3 mt-3 w-75 h-100 shadow" controlId="first_name">
                        <Form.Control className='place h-100' type="text" name="first_name" onChange={onInputChange} placeholder="First Name * " required/>
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid First Name.
                        </Form.Control.Feedback> 
                    </Form.Group>
                </div>
                <div className="col-lg-6">
                    <Form.Group className="mb-3 mt-3 w-75 h-100 shadow" controlId="last_name">
                        <Form.Control className='place h-100' type="text" placeholder="Last Name *  " required/>
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid Last Name.
                        </Form.Control.Feedback> 
                    </Form.Group>
                </div>
            </div>
            <div className="row mt-5 mb-3 sub-row">
                <div className="col-lg-4">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="mobile">
                        <Form.Control className='place h-100' type="tel" name='mobile' onChange={onInputChange} pattern='[1-9]{1}[0-9]{9}' placeholder="Mobile *" required/>
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid Mobile Number.
                        </Form.Control.Feedback> 
                    </Form.Group>
                </div>
                <div className="col-lg-4">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="email">
                        <Form.Control className='place h-100' type='email' placeholder="Email *" required/>
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid Email.
                        </Form.Control.Feedback> 
                    </Form.Group>
                </div>
                <div className="col-lg-4">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="whats_app">
                        <Form.Control className='place h-100' type='tel'  name='tel' pattern='[1-9]{1}[0-9]{9}' placeholder="WhatsApp *" required/>
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid Mobile Number.
                        </Form.Control.Feedback> 
                    </Form.Group>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3><span className='shadow rounded'>Agency Details</span></h3>
                </div>
            </div>
            <div className="row head-row">
                <div className="col-lg-6">
                    <Form.Group className="mb-3 mt-3 w-75 h-100 shadow" controlId="agency_name">
                        <Form.Control className='place h-100' type="text" placeholder="Agency Name" />
                    </Form.Group>
                </div>
                <div className="col-lg-6">
                    <Form.Group className="mb-3 mt-3 w-75 h-100 shadow" controlId="agency_address">
                        <Form.Control className='place h-100' type="text" placeholder="Agency Address" />
                    </Form.Group>
                </div>
            </div>
            <div className="row mt-5 mb-3 sub-row">
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="country">
                        <Form.Control className='place h-100' type="text" placeholder="Country"/>
                    </Form.Group>
                </div>
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="state">
                        <Form.Control className='place h-100' type="text" placeholder="State"/>
                    </Form.Group>
                </div>
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="city">
                        <Form.Control className='place h-100' type="text" placeholder="City"/>
                    </Form.Group>
                </div>
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="pin">
                        <Form.Control className='place h-100' type="number" placeholder="Pincode"/>
                    </Form.Group>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12 mb-3">
                    <h3><span className='shadow rounded'>Authentication Information</span></h3>
                </div>
                <div className="col-lg-3 mb-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow mb-4" controlId="username">
                        <Form.Control className='place h-100' type="text" name="username" placeholder={userplaceholder} value={formData.mobile} onChange={onInputChange} disabled/>
                    </Form.Group>
                </div>
                <div className="col-lg-3 mb-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow mb-4" controlId="password">
                        <Form.Control className='place h-100' type="password" placeholder="Password *"  autoComplete="off" required/>
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid Password. Minimum 8 alphanumeric. 
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="col-lg-3 mb-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow mb-4" controlId="current_password">
                        <Form.Control className='place h-100' type="password" placeholder="Current Password *" autoComplete="off" required/>
                        <Form.Control.Feedback type="invalid">
                            Error Password Do Not Match.
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="col-lg-3 mb-3">
                    <Button className='mb-3 w-75 h-100 shadow mb-4' variant='success' type='submit' size="lg">Register</Button>
                </div>
            </div>
            </Form>
        </Container>
    </div>
  )
}
