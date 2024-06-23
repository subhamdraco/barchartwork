import React, { useState } from 'react'
import './FlightSearchForm.css'
import { Form , Button, Modal  } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdFlightClass } from "react-icons/md";
import { MdFlightTakeoff } from "react-icons/md";
import Airports from '../../Assets/Airports';


export default function FlightSearchForm() {
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        infant: 0,
        class: 'Economy'
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

      const handleflightclass = (e) =>{
        const {name, value} = e.target;
        setOptions((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });
      };
    
    const [formdata, setformdata] = useState({
        trip : 'one',
        from : '',
        to: '',
        onward : '',
        return:'',
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
        <div className='wrapper-form'>
            <Form className='flight-form mx-auto p-4 mt-lg-0 z-2 rounded mt-sm-2 ' onSubmit={formsubmit}>
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
                <div className="row mt-2 row-cols-lg-5 row-cols-sm-1">
                    <div className="col">
                        <div className="mb-3" id="from">
                            <Form.Label><span>{<FaLocationDot />}</span> Depart Airport</Form.Label>
                            <Form.Select aria-label="from" name="from" onChange={onInputChange}>
                            {Airports.map(air => {return <option key={air.value} value={air.value}>{air.label}</option>})};
                            </Form.Select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3" id="to">
                            <Form.Label><span>{<FaLocationDot />}</span> Arrival Airport</Form.Label>
                            <Form.Select aria-label="to" name="to" onChange={onInputChange}>
                            {Airports.map(air => {return <option key={air.value} value={air.value}>{air.label}</option>})};
                            </Form.Select>
                        </div>
                    </div>
                    <div className="col">
                        <Form.Group className="mb-3" controlId="onward">
                            <Form.Label><span><BsCalendarDate /></span> Onward</Form.Label>
                            <Form.Control type="date" name="onward" value={formdata.onward} onChange={onInputChange} required/>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mb-3" controlId="return">
                            <Form.Label><span><BsCalendarDate /></span> Return</Form.Label>
                            <Form.Control type="date" name="return" value={formdata.return} onChange={onInputChange} disabled={formdata.trip === 'one'}/>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <div className="headerSearchItem">
                            <div className="theme">
                                <Form.Group className="mb-3" controlId="travel">
                                    <Form.Label><FaPeopleGroup /> Travellers | Class</Form.Label>
                                    <br/>
                                    <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult· ${options.children} children· ${options.infant} infant | ${options.class}`}</span>
                                    <Form.Control type="text" name="passengers" value= {formdata.passengers}  onChange={onInputChange}  className='hidden-value'/>
                                </Form.Group>
                            </div>
                        </div>
                        <Modal show={openOptions} onHide={() => setOpenOptions(!openOptions)} >
                            <Modal.Header closeButton>
                            <Modal.Title>Travellers | Class</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row mb-2">
                                    <div className="col-lg-6 col-sm-12">
                                        <span className='fw-semibold user-select-none'>Adults  </span>
                                        <button className="btn btn-secondary adder" onClick={(e) => {handleOption(e,"adult","i")}}>+</button>
                                        <span className='mx-2 fw-semibold user-select-none'>{options.adult}</span>
                                        <button className="btn btn-secondary" disabled= {options.adult <= 1 } onClick={(e) => {handleOption(e,"adult","d")}}>-</button>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <span className='fw-semibold user-select-none'>Children  </span>
                                        <button className="btn btn-secondary" onClick={(e) => {handleOption(e,"children","i")}}>+</button>
                                        <span className='mx-2 fw-semibold user-select-none'>{options.children}</span>
                                        <button className="btn btn-secondary" disabled= {options.children <= 0 } onClick={(e) => {handleOption(e,"children","d")}}>-</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <span className='fw-semibold user-select-none'>Infant </span>
                                        <button className="btn btn-secondary" onClick={(e) => {handleOption(e,"infant","i")}}>+</button>
                                        <span className='mx-2 fw-semibold user-select-none'>{options.infant}</span>
                                        <button className="btn btn-secondary" disabled= {options.infant <= 0 } onClick={(e) => {handleOption(e,"infant","d")}}>-</button>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <Form.Group className="mb-3 mt-2" controlId="class">
                                            <Form.Label><span>{<MdFlightClass />}</span> Select Class</Form.Label>
                                            <Form.Select aria-label="class-select" name='class' value={options.class} onChange={handleflightclass}>
                                                <option value="First">First</option>
                                                <option value="Business">Business</option>
                                                <option value="Economy">Economy</option>
                                                <option value="Premium Economy">Premium Economy</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="success" onClick={() => setOpenOptions(!openOptions)}>
                                Save
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <Button className="btn btn-dark"  type='submit'><MdFlightTakeoff className='btn-icon'/> Search</Button>
            </Form>
        </div>
  )
}
