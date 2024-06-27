import React, { useState } from 'react'
import './Register.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdTravelExplore } from "react-icons/md";
import { Button , Form } from 'react-bootstrap';
<<<<<<< HEAD

export default function Register() {
=======
import axios from "axios";

export default function Register() {

>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
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
<<<<<<< HEAD
=======
        confirm_password: '',
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
    })

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setformData((prev) => { 
            return {
            ...prev,
            [name] : value
        };
    });
<<<<<<< HEAD
        setuserplaceholder(e.target.value)
    };

    const formsubmit = (e) =>{
=======
        if (name==='mobile'){setuserplaceholder(e.target.value)};
    };

    const formsubmit = async  (e) =>{
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.stopPropagation();
        }
<<<<<<< HEAD
    
        setValidated(true);
=======
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
        const finaldata = {
            ...formData,
            username: formData.mobile
        }
<<<<<<< HEAD

        console.log(finaldata); //finaldata to be stored in db
=======
        if (finaldata.password !== finaldata.confirm_password){e.stopPropagation(); alert('Passwords Do Not Match! '); return}
        setValidated(true);
        try{
            const {data} = await axios.post('http://localhost:8000/register/',  finaldata , {'Content-Type': 'application/json'})
            if (form.checkValidity() === true) {alert(data.message); window.location.href = '/'}
            else{alert('Errors in Form Submit !')}
            
           
        }
        catch(e){
            console.log(e)
        }
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
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
<<<<<<< HEAD
                        <Form.Control className='place h-100' type="text" placeholder="Last Name *  " required/>
=======
                        <Form.Control className='place h-100' type="text" name="last_name" onChange={onInputChange} placeholder="Last Name *  " required/>
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
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
<<<<<<< HEAD
                        <Form.Control className='place h-100' type='email' placeholder="Email *" required/>
=======
                        <Form.Control className='place h-100' name='email' onChange={onInputChange} type='email' placeholder="Email *" required/>
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid Email.
                        </Form.Control.Feedback> 
                    </Form.Group>
                </div>
                <div className="col-lg-4">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="whats_app">
<<<<<<< HEAD
                        <Form.Control className='place h-100' type='tel'  name='tel' pattern='[1-9]{1}[0-9]{9}' placeholder="WhatsApp *" required/>
=======
                        <Form.Control className='place h-100' onChange={onInputChange} type='tel' name='whatsapp' pattern='[1-9]{1}[0-9]{9}' placeholder="WhatsApp *" required/>
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
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
<<<<<<< HEAD
                        <Form.Control className='place h-100' type="text" placeholder="Agency Name" />
=======
                        <Form.Control className='place h-100' name="ag_name" onChange={onInputChange}  type="text" placeholder="Agency Name" />
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
                    </Form.Group>
                </div>
                <div className="col-lg-6">
                    <Form.Group className="mb-3 mt-3 w-75 h-100 shadow" controlId="agency_address">
<<<<<<< HEAD
                        <Form.Control className='place h-100' type="text" placeholder="Agency Address" />
=======
                        <Form.Control className='place h-100' name="ag_add" onChange={onInputChange}  type="text" placeholder="Agency Address" />
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
                    </Form.Group>
                </div>
            </div>
            <div className="row mt-5 mb-3 sub-row">
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="country">
<<<<<<< HEAD
                        <Form.Control className='place h-100' type="text" placeholder="Country"/>
=======
                        <Form.Control className='place h-100' name="ag_country" onChange={onInputChange} type="text" placeholder="Country"/>
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
                    </Form.Group>
                </div>
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="state">
<<<<<<< HEAD
                        <Form.Control className='place h-100' type="text" placeholder="State"/>
=======
                        <Form.Control className='place h-100' name="ag_state" onChange={onInputChange} type="text" placeholder="State"/>
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
                    </Form.Group>
                </div>
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="city">
<<<<<<< HEAD
                        <Form.Control className='place h-100' type="text" placeholder="City"/>
=======
                        <Form.Control className='place h-100' name="ag_city" onChange={onInputChange} type="text" placeholder="City"/>
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
                    </Form.Group>
                </div>
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="pin">
<<<<<<< HEAD
                        <Form.Control className='place h-100' type="number" placeholder="Pincode"/>
=======
                        <Form.Control className='place h-100' name="ag_pincode" onChange={onInputChange} type="number" placeholder="Pincode"/>
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
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
<<<<<<< HEAD
                        <Form.Control className='place h-100' type="password" placeholder="Password *"  autoComplete="off" required/>
=======
                        <Form.Control className='place h-100' name="password" onChange={onInputChange} type="password" placeholder="Password *"  autoComplete="off" required/>
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid Password. Minimum 8 alphanumeric. 
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="col-lg-3 mb-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow mb-4" controlId="current_password">
<<<<<<< HEAD
                        <Form.Control className='place h-100' type="password" placeholder="Current Password *" autoComplete="off" required/>
=======
                        <Form.Control className='place h-100' name="confirm_password" onChange={onInputChange} type="password" placeholder="Current Password *" autoComplete="off" required/>
>>>>>>> 2ba50fccc99812fb3cd44a89cf4998fbae8cfcd8
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
