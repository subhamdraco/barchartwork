import React, { useState } from 'react'
import './Register.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdTravelExplore } from "react-icons/md";
import { Button , Form } from 'react-bootstrap';
import axios from "axios";

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
        confirm_password: '',
    })
    const [errors, seterrors] = useState({})

    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setformData({
            ...formData,
            [name] : value
        })

        if (!!errors.name){
            seterrors({
                [name] : null
            })
        }

        if (name==='mobile'){setuserplaceholder(e.target.value)};
    };

    const validateForm = () => {

        const  {first_name,
        last_name,
        mobile,
        email,
        whatsapp,
        ag_nam,
        ag_ad,
        ag_country,
        ag_state,
        ag_city,
        ag_pincode,
        usernam,
        password,
        confirm_password} = formData

        const newErrors = {}
        if (!first_name || first_name === '') newErrors.first_name = 'Please provide a valid First Name'

        return newErrors

    }
    

    const formsubmit = async  (e) =>{
        e.preventDefault();
        const finaldata = {
            ...formData,
            username: formData.mobile
        }

        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0){seterrors(formErrors); return}
        else{
            console.log(finaldata);
        }

        console.log(finaldata);
        // e.preventDefault();
        // const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }
        // setValidated(true)
        // else{
        //     setValidated(true)
        //     const finaldata = {
        //     ...formData,
        //     username: formData.mobile
        // }
        // if (finaldata.password !== finaldata.confirm_password)
        //     {e.stopPropagation(); alert('Passwords Do Not Match! ');}
        // else{
        //     try{
        //         const {data} = await axios.post('http://localhost:8000/register/',  finaldata , {'Content-Type': 'application/json'})
        //         if (form.checkValidity() === true) {alert(data.message); window.location.href = '/'}
        //         else{alert('Errors in Form Submit !')}
        //     }
        //     catch(e){
        //         if (e.response.status === 409){alert(e.response.data);}
        //     }}
        // }
    };

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
                        <Form.Control className='place h-100' type="text" name="first_name" onChange={onInputChange} placeholder="First Name * " required isInvalid={!!errors.first_name}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.first_name}
                        </Form.Control.Feedback> 
                    </Form.Group>
                </div>
                <div className="col-lg-6">
                    <Form.Group className="mb-3 mt-3 w-75 h-100 shadow" controlId="last_name">
                        <Form.Control className='place h-100' type="text" name="last_name" onChange={onInputChange} placeholder="Last Name *  " required isInvalid={!!errors.last_name}/>
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid Last Name.
                        </Form.Control.Feedback> 
                    </Form.Group>
                </div>
            </div>
            <div className="row mt-5 mb-3 sub-row">
                <div className="col-lg-4">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="mobile">
                        <Form.Control className='place h-100' type="tel" name='mobile' onChange={onInputChange} pattern='[1-9]{1}[0-9]{9}' placeholder="Mobile *" required
                        isInvalid={errors.mobile}/>
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid Mobile Number.
                        </Form.Control.Feedback> 
                    </Form.Group>
                </div>
                <div className="col-lg-4">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="email">
                        <Form.Control className='place h-100' isInvalid={!!errors.email} name='email' onChange={onInputChange} type='email' placeholder="Email *" required/>
                        <Form.Control.Feedback type="invalid">
                             Please provide a valid Email.
                        </Form.Control.Feedback> 
                    </Form.Group>
                </div>
                <div className="col-lg-4">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="whats_app">
                        <Form.Control className='place h-100' isInvalid={!!errors.whats_app} onChange={onInputChange} type='tel' name='whatsapp' pattern='[1-9]{1}[0-9]{9}' placeholder="WhatsApp *" required/>
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
                        <Form.Control className='place h-100' isInvalid={!!errors.ag_name}  name="ag_name" onChange={onInputChange}  type="text" placeholder="Agency Name" />
                    </Form.Group>
                </div>
                <div className="col-lg-6">
                    <Form.Group className="mb-3 mt-3 w-75 h-100 shadow" controlId="agency_address">
                        <Form.Control className='place h-100' isInvalid={!!errors.ag_add} name="ag_add" onChange={onInputChange}  type="text" placeholder="Agency Address" />
                    </Form.Group>
                </div>
            </div>
            <div className="row mt-5 mb-3 sub-row">
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="country">
                        <Form.Control className='place h-100' isInvalid={!!errors.ag_country} name="ag_country" onChange={onInputChange} type="text" placeholder="Country"/>
                    </Form.Group>
                </div>
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="state">
                        <Form.Control className='place h-100' isInvalid={!!errors.ag_state} name="ag_state" onChange={onInputChange} type="text" placeholder="State"/>
                    </Form.Group>
                </div>
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="city">
                        <Form.Control className='place h-100' isInvalid={!!errors.ag_city} name="ag_city" onChange={onInputChange} type="text" placeholder="City"/>
                    </Form.Group>
                </div>
                <div className="col-lg-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow" controlId="pin">
                        <Form.Control className='place h-100' isInvalid={!!errors.ag_city} name="ag_pincode" onChange={onInputChange} type="number" placeholder="Pincode"/>
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
                        <Form.Control className='place h-100' 
                        isInvalid={!!errors.password}
                        name="password" 
                        onChange={onInputChange} 
                        type="password" 
                        placeholder="Password *"  
                        required
                        />
                        <Form.Control.Feedback type="invalid">
                            Error: Password should have at least one uppercase character , at least one lowercase character 
                            , at least one digit/number , at least one special character, minimum 8 characters
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="col-lg-3 mb-3">
                    <Form.Group className="mb-3 w-75 h-100 shadow mb-4" controlId="current_password">
                        <Form.Control className='place h-100'  name="confirm_password" isInvalid={!!errors.confirm_password}
                        
                            onChange={onInputChange} type="password" placeholder="Current Password *" autoComplete="off" required/>
                        <Form.Control.Feedback type="invalid">
                            Passwords Do not Match
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
