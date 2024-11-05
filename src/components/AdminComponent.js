import React, { useState } from 'react'
import { Col, Container, Nav, Row, Form, Button, Dropdown } from 'react-bootstrap';
import {Link ,Outlet, useLocation } from 'react-router-dom';

function AdminComponent() {

  const urlLocation = useLocation().pathname
  const [checked, setChecked] = useState(true)

  const toggleChecked = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const renderRightSideInformation = () => {
    if (checked) {
      return (
        <Col className={`col-3`}>
          <Col className='m0-box mb-3'>current month completed timesheets</Col>
          <Col className='m0-box mb-3'>employee next time off or current off</Col>
          <Col className='m0-box mb-3'>tickets </Col>
        </Col>
      )
    }
  }

  return (
      <Container>
        <Row className='mb-3 align-items-center'>
          <Col xs={9} className='admin-nav-items'>
            <Nav variant="pills align-items-center" defaultActiveKey='link-1'>
              <Nav.Item><Link to='dashboard' className={`nav-link ${urlLocation.endsWith('dashboard')?'active':''}`}>Dashboard</Link></Nav.Item>
              <Nav.Item><Link to='employees' className={`nav-link ${urlLocation.endsWith('employees')?'active':''}`}>Teams</Link></Nav.Item>
              <Nav.Item><Link to='requests' className={`nav-link ${urlLocation.endsWith('requests')?'active':''}`}>Requests</Link></Nav.Item>
              <Nav.Item><Link to='projects' className={`nav-link ${urlLocation.endsWith('projects')?'active':''}`}>Projects</Link></Nav.Item>
              <Nav.Item><Link to='tasks' className={`nav-link ${urlLocation.endsWith('tasks')?'active':''}`}>Tasks</Link></Nav.Item>
              <Nav.Item><Link to='roles' className={`nav-link ${urlLocation.endsWith('roles')?'active':''}`}>Roles</Link></Nav.Item>
              <Nav.Item><Link to='profiles' className={`nav-link ${urlLocation.endsWith('profiles')?'active':''}`}>Profiles</Link></Nav.Item>
              <Dropdown style={{marginLeft: '10px'}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">Create</Dropdown.Toggle>
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
        <Row>
          <Col><Outlet context={{ checked, toggleChecked }}/></Col>
          {renderRightSideInformation()}
        </Row>
      </Container>
  )
}

export default AdminComponent
