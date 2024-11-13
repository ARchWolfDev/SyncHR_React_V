import React, { useState } from 'react'
import { Col, Container, Nav, Row, Form, Button, Dropdown, ListGroup, ListGroupItem, ProgressBar, Image } from 'react-bootstrap';
import {Link ,Outlet, useLocation } from 'react-router-dom';
import avatar from '../avatars/dog.png'

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
          <Col className='m0-box mb-3'>
            add quick action
            <h5><i className="fa-solid fa-hourglass-start"></i> Pending action</h5>
            <div className='br mb-3'></div>
            <div className='white-box m0-box mb-3' >Timesheet requests <strong style={{float: 'right'}}>0</strong></div>
            
            <div className='white-box m0-box mb-3' >Timeoff requests <strong style={{float: 'right'}}>0</strong></div>
            <div className='white-box m0-box mb-3' >Tickets requests <strong style={{float: 'right'}}>0</strong></div>
          </Col>
          <Col className='m0-box mb-3 department-box'>
            <h5><i className="fa-solid fa-sitemap"></i> Sales</h5>
            <h6>Responsible: Alice Smith</h6>
            <h6>Employees in: 5</h6>
            <i className="pin fa-solid fa-thumbtack" style={{color: 'red', opacity: 1}}></i>
          </Col>
          <Col className='m0-box mb-3'>
            <h5><i className="fa-regular fa-calendar-check"></i> Timesheet current month</h5>
            <div className='br mb-3'></div>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col className='col-2'>
                    <Image src={avatar} roundedCircle style={{width: '50px'}}/>
                  </Col>
                  <Col>
                    <h5>Andrei Rachieru</h5>
                    <ProgressBar now={50}></ProgressBar>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col className='col-2'>
                    <Image src={avatar} roundedCircle style={{width: '50px'}}/>
                  </Col>
                  <Col>
                    <h5>Andrei Rachieru</h5>
                    <ProgressBar now={50}></ProgressBar>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col className='m0-box mb-3'>
            <h5><i className="fa-solid fa-business-time"></i> Timeoff planned</h5>
            <div className='br mb-3'></div>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col className='col-2'>
                    <Image src={avatar} roundedCircle style={{width: '50px'}}/>
                  </Col>
                  <Col>
                    <h5>Andrei Rachieru</h5>
                    <h6 className='mb-0'>Off Today</h6>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col className='col-2'>
                    <Image src={avatar} roundedCircle style={{width: '50px'}}/>
                  </Col>
                  <Col>
                    <h5>Andrei Rachieru</h5>
                    <h6 className='mb-0'>Off planned in 3 days</h6>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Col>
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
              <Nav.Item><Link to='teams' className={`nav-link ${urlLocation.endsWith('employees') || urlLocation.endsWith('departments')?'active':''}`}>Teams</Link></Nav.Item>
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
              <div className="ms-auto">
              <Dropdown autoClose="outside">
                <Dropdown.Toggle variant="light" id="dropdown-basic"><i className="fa-solid fa-gear"></i></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={'button'}>
                    <Form>
                      <Form.Check
                        type='switch'
                        checked={checked}
                        onChange={toggleChecked}
                        label={`${checked? 'Hide': 'Show'} Quick Bar`}
                      />
                    </Form>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </Nav>
            {/*  */}
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
