import React from 'react';
import "./GreenBtn.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function GreenBtn(props) {
  return (
    <div>
      <Button id='green-btn'>
        <Link to={props.btnLink} className='text-decoration-none text-light text-capitalize'>
        {props.btnTitle}
        </Link>
      </Button>
    </div>
  )
}
