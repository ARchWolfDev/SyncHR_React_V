import React from 'react'
import { Col, Container, Nav, Row, Form, Button, Dropdown } from 'react-bootstrap';
import {Link ,Outlet } from 'react-router-dom';

function AdminComponent() {
  return (
    <div>
      <Container>
        <Row className='mb-3'>
          <Col xs={9} className='admin-nav-items'>
            <Nav variant="pills" defaultActiveKey='link-1'>
              <Nav.Item><Link to='dashboard' className='nav-link active'>Dashboard</Link></Nav.Item>
              <Nav.Item><Link to='' className='nav-link'>Teams</Link></Nav.Item>
              <Nav.Item><Link to='' className='nav-link'>Requests</Link></Nav.Item>
              <Nav.Item><Link to='' className='nav-link'>Projects</Link></Nav.Item>
              <Nav.Item><Link to='' className='nav-link'>Tasks</Link></Nav.Item>
              <Nav.Item><Link to='' className='nav-link'>Roles</Link></Nav.Item>
              <Nav.Item><Link to='' className='nav-link'>Profiles</Link></Nav.Item>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Create
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Col>
          <Col className='search-col'>
            <Form inline>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Outlet />
      </Container>
    </div>
  )
}

export default AdminComponent
