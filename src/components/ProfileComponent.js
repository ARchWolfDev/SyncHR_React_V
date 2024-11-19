import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Avatar from './Avatar';

function ProfileComponent() {

  const {id} = useParams();

// <Avatar size={150} />
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col className='box' style={{display: 'flex', alignItems: 'center'}}>
              <Avatar size={150} name='Andrei Rachieru'/>
              <div style={{marginLeft: 20}}>
                <h3>Andrei Rachieru - ID: {id}</h3>
                <h4>Manager</h4>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='box col-3'>
              <div className='white-box m0-box mb-3 active-white-box'>Basic Information</div>
              <div className='white-box m0-box mb-3'>Timesheet</div>
              <div className='white-box m0-box mb-3'>Timeoff</div>
              <div className='white-box m0-box mb-3'>Documents</div>
            </Col>
            <Col>
              <div className='m0-box'>Content</div>
            </Col>
          </Row>
        </Col>
        <Col className='col-3'>
          <div className='m0-box'>
            <h5>User Activity</h5>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileComponent
