import React, { useState } from 'react'
import './FlightSearchForm.css'
import { Container, Form , Button } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdFlightClass } from "react-icons/md";
import { MdFlightTakeoff } from "react-icons/md";


export default function FlightSearchForm() {

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        infant: 1,
      });
    const [openOptions, setOpenOptions] = useState(false);
    const handleOption = (e, name, operation) => {
        e.preventDefault();
        setOptions((prev) => {
            return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
      };
    
    const [formdata, setformdata] = useState({
        trip : 'one',
        from : '',
        to: '',
        onward : '',
        return:'',
        class:1
    })

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setformdata((prev) => { 
            return {
            ...prev,
            [name] : value
        };
    });
    };

    const formsubmit = (e) =>{
        e.preventDefault();
        const finaldata = {
            ...formdata,
            passengers: options
        }
        console.log(finaldata);
    }

    // const handleSearch = () => {
    //     navigate("/hotels", { state: { destination, date, options } });
    //   };
  return (
    <div className='position-relative'>
        <Container>
            <Form className='search-form  mx-auto p-4 mt-4 mt-lg-0 z-2 rounded' onSubmit={formsubmit}>
                <div className="row">
                    <div className="col d-flex justify-content-start">
                    <Form.Check
                    label={<span className={(formdata.trip === 'one') ? "active" : "inactive"}>One Way</span>}
                    name="trip"
                    type="radio"
                    id='radio-1'
                    value='one' 
                    onChange={onInputChange}
                />
                <Form.Check
                    label={<span className={(formdata.trip === 'round') ? "active" : "inactive"}>Round</span>}
                    name="trip"
                    type="radio"
                    id='radio-2'
                    value='round'
                    onChange={onInputChange}
                />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-3">
                        <Form.Group className="mb-3" controlId="to">
                            <Form.Label><span>{<FaLocationDot />}</span> Depart Airport</Form.Label>
                            <Form.Control type="text" name="to" value= {formdata.passengers} onChange={onInputChange} required/>
                        </Form.Group>
                    </div>
                    <div className="col-lg-3">
                        <Form.Group className="mb-3" controlId="from">
                            <Form.Label><span>{<FaLocationDot />}</span> Arrival Airport</Form.Label>
                            <Form.Control type="text" name="from" value= {formdata.passengers} onChange={onInputChange} required/>
                        </Form.Group>
                    </div>
                    <div className="col-lg-3">
                        <Form.Group className="mb-3" controlId="onward">
                            <Form.Label><span><BsCalendarDate /></span> Onward</Form.Label>
                            <Form.Control type="date" name="onward" value={formdata.onward} onChange={onInputChange} required/>
                        </Form.Group>
                    </div>
                    <div className="col-lg-3">
                        <Form.Group className="mb-3" controlId="return">
                            <Form.Label><span><BsCalendarDate /></span> Return</Form.Label>
                            <Form.Control type="date" name="return" value={formdata.return} onChange={onInputChange} disabled={formdata.trip === 'one'}/>
                        </Form.Group>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-6">
                        <div className="headerSearchItem">
                            <div className="theme">
                                <Form.Group className="mb-3" controlId="travel">
                                    <Form.Label><FaPeopleGroup /> Travellers</Form.Label>
                                    <br/>
                                    <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult· ${options.children} children· ${options.infant} infant`}</span>
                                    <Form.Control type="text" name="passengers" value= {formdata.passengers}  onChange={onInputChange}  className='hidden-value'/>
                                </Form.Group>
                            </div>
                        </div>
                        {openOptions && (
                            <div className="options">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-12">
                                        <span className='fw-semibold user-select-none'>Adults  </span>
                                        <button className="btn btn-secondary" onClick={(e) => {handleOption(e,"adult","i")}}>+</button>
                                        <span className='mx-2 fw-semibold user-select-none'>{options.adult}</span>
                                        <button className="btn btn-secondary" disabled= {options.adult <= 1 } onClick={(e) => {handleOption(e,"adult","d")}}>-</button>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <span className='fw-semibold user-select-none'>Children  </span>
                                        <button className="btn btn-secondary" onClick={(e) => {handleOption(e,"children","i")}}>+</button>
                                        <span className='mx-2 fw-semibold user-select-none'>{options.children}</span>
                                        <button className="btn btn-secondary" disabled= {options.children <= 0 } onClick={(e) => {handleOption(e,"children","d")}}>-</button>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <span className='fw-semibold user-select-none'>Infant </span>
                                        <button className="btn btn-secondary" onClick={(e) => {handleOption(e,"infant","i")}}>+</button>
                                        <span className='mx-2 fw-semibold user-select-none'>{options.infant}</span>
                                        <button className="btn btn-secondary" disabled= {options.infant <= 0 } onClick={(e) => {handleOption(e,"infant","d")}}>-</button>
                                    </div>
                                </div>
                                <div className="row  mt-3">
                                    <div className="col-lg-12 col-sm-12 d-flex justify-content-center">
                                        <Button className='btn-secondary' onClick={() => setOpenOptions(!openOptions)}>Close</Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-6">
                        <Form.Group className="mb-3" controlId="class">
                            <Form.Label><span>{<MdFlightClass />}</span> Select Class</Form.Label>
                            <Form.Select aria-label="class-select" name='class' value={formdata.class} onChange={onInputChange}>
                                <option value="1">First</option>
                                <option value="2">Business</option>
                                <option value="3">Economy</option>
                                <option value="4">Premium Economy</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
                <Button className="btn btn-dark"  type='submit'><MdFlightTakeoff className='btn-icon'/> Search</Button>
            </Form>
        </Container>
    </div>
  )
}
