import React from 'react'
// import avatar from '../avatars/dog.png'
import { Col, Container, Form, Row } from 'react-bootstrap'

function PersonalInfoBox() {
  return (
    <Container>
      <Row>
        <Col>
          <h5><i className="fa-solid fa-address-card"></i> Basic info</h5>
          <div className='br mb-3' ></div>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" value={'Andrei'} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" value={'Rachieru'} readOnly/>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <h5><i className="fa-solid fa-address-book"></i> Contact info</h5>
          <div className='br mb-3' ></div>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Work Email</Form.Label>
              <Form.Control type="text" value={'andrei.rachieru@yahoo.com'} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" value={'0753830028'} readOnly/>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <h5><i className="fa-solid fa-map-location"></i> Address info</h5>
          <div className='br mb-3' ></div>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Home Address</Form.Label>
              <Form.Control type="text" value={'Str. One, Nr. 1'} readOnly/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default PersonalInfoBox
