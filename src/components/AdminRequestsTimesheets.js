import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function AdminRequestsTimesheets() {

  return (
    <Container>
        <Row className='timesheet-status-box-row'>
            <Col className='box hover-box' type='button' style={{backgroundColor: '#ffeb99'}}>Pending <strong style={{float:'right'}}>0</strong></Col>
            <Col className='box hover-box' type='button' style={{backgroundColor: '#87ff99'}}>Approved <strong style={{float:'right'}}>0</strong></Col>
            <Col className='box hover-box' type='button' style={{backgroundColor: '#ff9999'}}>Rejected <strong style={{float:'right'}}>0</strong></Col>
        </Row>
        <Row>
            <Col className='box'>Information</Col>
        </Row>
    </Container>
  )
}

export default AdminRequestsTimesheets
