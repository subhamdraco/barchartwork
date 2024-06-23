import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Quicklinks.css';
import { BsBank } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

export default function Quicklinks() {
  return (
    <div className='quick-links-section'>
      <Container className='h-100 mt-5'>
          <h1 className='mb-3'>Quick links</h1>
          <div className="row">
            <div className="col-lg-3">
              <Button variant="success" size="lg" ><BsBank/><br/>Bank Details</Button>
            </div>
            <div className="col-lg-3">
              <Button variant="success" size="lg"><MdOutlineWorkHistory/><br/>Recent Booking History</Button>
            </div>
            <div className="col-lg-3">
              <Button variant="success" size="lg"><GrStatusGood/><br/>Check Flight Status</Button>
            </div>
            <div className="col-lg-3">
              <Button variant="success" size="lg"><BiSupport/><br/>Customer Support</Button>
            </div>
          </div>
      </Container>
      
    </div>
  )
}
