import React, { useState } from 'react'
import './FlightSearchForm.css'
import { Container, Form } from 'react-bootstrap'
// import { DateRange } from "react-date-range";

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
                <div className="row row-cols-4">
                    <div className="col">
                    </div>
                    <div className="col">
                        <Form.Group className="mb-3" controlId="onward">
                            <Form.Label>Onward</Form.Label>
                            <Form.Control type="date" name="onward" value={formdata.onward} onChange={onInputChange}/>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mb-3" controlId="return">
                            <Form.Label>Return</Form.Label>
                            <Form.Control type="date" name="return" value={formdata.return} onChange={onInputChange}/>
                        </Form.Group>
                    </div>
                    
                    <div className="col">
                        Return
                    </div>
                </div>
                <div className="row row-cols-4">
                    <div className="col">
                        <div className="headerSearchItem">
                        <div className="theme">
                            <Form.Group className="mb-3" controlId="travel">
                                <Form.Label>Travellers</Form.Label>
                                <br/>
                                <span onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult· ${options.children} children· ${options.infant} infant`}</span>
                                <Form.Control type="text" name="passengers" value= {formdata.passengers}  onChange={onInputChange}  className='hidden-value'/>
                            </Form.Group>
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
                        </div>
                    )}
                        </div>
                    </div>
                </div>
                <button className="btn" type='submit'>Search</button>
            </Form>
        </Container>
    </div>
  )
}
