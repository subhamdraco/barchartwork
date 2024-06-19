import React from 'react'
import './NeedInspiration.css'
import { Container } from 'react-bootstrap'


export default function NeedInspiration() {
  return (
    <div className='need-inspiration-section py-5 position-relative'>
        <div className="bg-shape position-absolute"></div>
        <Container>
            <div className="row">
                <div className="col-md-4 z-2">
                    <h2 className='text-start text-light fw-semibold'>Need Inspiration?</h2>
                    <p className="text-start text-light">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugit natus, enim et autem expedita tempore inventore magnam ea nesciunt est perferendis nisi corporis. Odio aut in esse illum sapiente.
                    </p>
                    <div className="d-flex">
                        <h5 className="text-light text-capitalize fw-semibold text-nowrap">
                            Call us:
                        </h5>
                        <a href="/" className="text-lightmx-2 text-decoration-none h5 fw-semibold">
                        89109999867</a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}
