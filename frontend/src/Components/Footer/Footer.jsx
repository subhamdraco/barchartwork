import React from 'react'
import './Footer.css'
import Copyright from '../../Assets/Icons/c-circle.svg';

export default function Footer() {
  return (
    <div className='py-3'>
       <p className="mb-0">
        Copyright
        <img src={Copyright} className="mx-1" alt="copyright" />
          Book My Travel 2024
       </p>
    </div>
  )
}
