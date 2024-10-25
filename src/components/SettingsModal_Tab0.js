import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'

function SettingsModal_Tab0() {
  return (
    <Form>
        <Row><Col><h6><i className="fa-solid fa-map-location"></i> Address Information</h6></Col></Row>
        <div className='br mb-3' ></div>
        <Row className='mb-3'>
            <Col>
                <Form.Group>
                    <Form.Label>Main Address</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col>
                <Form.Group>
                    <Form.Label>Second Address</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <Row><Col><h6><i className="fa-solid fa-address-book"></i> Contact Information</h6></Col></Row>
        <div className='br mb-3' ></div>
        <Row className='mb-3'>
            <Col>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>Second Phone Number</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col>
                <Form.Group>
                    <Form.Label>Work Email</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>Personal Email</Form.Label>
                    <Form.Control></Form.Control>
                </Form.Group>
            </Col>
        </Row>
        <Row><Col><h6><i className="fa-solid fa-link"></i> Links/Social Media</h6></Col></Row>
        <div className='br mb-3' ></div>
        <Row className='mb-3'>
            <Col>
                <Form.Group>
                    <Form.Label>LinkedIn</Form.Label>
                    <Form.Control placeholder='Paste URL'></Form.Control>
                </Form.Group>
            </Col>
        </Row>
    </Form>
  )
}

export default SettingsModal_Tab0
