import React from 'react'
import './Recommendation.css'
import { Container } from 'react-bootstrap'

function Recommendation(props) {
  return (
    <div className='recommended-section'>
       <Container className='position-relative py-5 rounded'>
        <div className="bg-shape position-absolute"></div>
            <div className="row justify-content-end">
                <div className="col-md-6 col-lg-3 z-2">
                    <h3 className="text-light text-capitalize fw-semibold">
                        {props.itemRecommendedTitle}
                    </h3>
                    <p className="text-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae facere fugiat porro laboriosam cupiditate ducimus! Dicta quasi ratione iusto porro quae sapiente esse hic aspernatur, aperiam odio vero accusamus voluptatibus!
                    </p>
                    <a href="/" className="text-light text-capitalize text-decoration-none fw-semibold">Book Now</a>
                </div>
            </div>
       </Container>
    </div>
  )
}

export default Recommendation
