import React from 'react'
import { Container, Row, Col, Form, Table } from 'react-bootstrap'

function JobInfoBox() {
  return (
    <Container>
      <Row className='mb-3'>
        <Col>
          <h5><i className="fa-solid fa-address-card"></i> Employee info</h5>
          <div className='br mb-3' ></div>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Employee ID</Form.Label>
              <Form.Control type="text" value={'EMP-10002'} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" value={'Manager'} readOnly/>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <h5><i className="fa-solid fa-sitemap"></i> Department info</h5>
          <div className='br mb-3' ></div>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" value={'Management'} readOnly/>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <h5><i className="fa-solid fa-user-shield"></i> Direct Manager</h5>
          <div className='br mb-3' ></div>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={'Andrei Rachieru'} readOnly/>
            </Form.Group>
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" value={'andrei.rachieru@yahoo.com'} readOnly/>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5><i className="fa-solid fa-user-shield"></i> Contract Information</h5>
          <div className='br mb-3' ></div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Start Date</th>
                <th>Name</th>
                <th>Status</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>CTR-0001</td>
                <td>25/10/2024</td>
                <td>ARch Dev Solution Employee Contract</td>
                <td>Active</td>
                <td>Download</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default JobInfoBox
