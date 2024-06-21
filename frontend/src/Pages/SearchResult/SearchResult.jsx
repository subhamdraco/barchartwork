import React from 'react'
import { Container, Row, Col ,Table, Tab } from 'react-bootstrap'

export default function SearchResult() {
  return (
    <div>
      <Container>
        <Row>
            <Col lg={4} xs={2} className='filter-col'>
                <Table striped bordered hover>
                    <tr>
                        <th>Filter By</th>
                    </tr>
                    <tr>
                        <td>Airline</td>
                    </tr>
                    <tr>
                        <td>Indigo</td>
                    </tr>
                </Table>
            </Col>
            <Col lg={8} xs={10} className='result-col'>
                 Hello
            </Col>
        </Row>
      </Container>
    </div>
  )
}
