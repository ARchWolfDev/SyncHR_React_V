import React, { useState } from 'react'
import Calendar from './Calendar'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import Nav from 'react-bootstrap/Nav';
import PersonalInfoBox from './PersonalInfoBox';
import JobInfoBox from './JobInfoBox';
import CompanyInfoBox from './CompanyInfoBox';
import EmployeesBox from './EmployeesBox';
import DepartmentsBox from './DepartmentsBox';

function HomeComponent() {

    const [activeTab, setActiveTab] = useState(0)
    const [activeTab2, setActiveTab2] = useState(0)
  
    const handleNavTabs2 = (y) => {
      setActiveTab2(y)
    }
  
    const handleNavTabs = (x) => {
      setActiveTab(x)
    }
  
    const renderInfoBox = () => {
      const infoBoxArray = [<PersonalInfoBox />, <JobInfoBox />, <CompanyInfoBox />]
      return (<div className='box info-box'>{infoBoxArray.at(activeTab)}</div>)
    }
  
    const renderInfoBox2 = () => {
      const infoBoxArray2 = [<EmployeesBox/>, <DepartmentsBox/>]
      return (<div className='box info-box2'>{infoBoxArray2.at(activeTab2)}</div>)
    }
  
    const renderMostUsedTasks = () => {
      const mostUsedTasks = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
      const listTasks = mostUsedTasks.map((task, index) => <ListGroup.Item key={index}><i className="fa-regular fa-circle-dot fa-2xs" style={{color: "#b6b9be", marginRight: '10px'}}></i> {task}</ListGroup.Item>)
  
      return listTasks
    }

  return (
    <Container style={{maxWidth: '100%', 'padding': 0}}>
        <Row>
          <Col lg={9}><Calendar /></Col>
          <Col style={{paddingRight: 0}} className='traker'>
            <div className='box' style={{textAlign: 'center', height: '45%'}}>
              <h5>Timesheet completed</h5>
              <div className='br'></div>
              <Gauge style={{margin: 'auto'}}
                width={200} 
                height={150} 
                value={60} 
                startAngle={-90} 
                endAngle={90} 
                innerRadius="70%"
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 40,
                    transform: 'translate(0px, -10px)',
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: 'green',
                  }
                }}
                text={
                  ({ value }) => `${value}%`
               }
              />
              <p>October bussniss days</p>
            </div>
            <div className='box' style={{height: '55%'}}>
              <h5 style={{textAlign: 'center'}}>Most used tasks</h5>
              <div className='br'></div>
              <ListGroup variant="flush">
                  {renderMostUsedTasks()}
              </ListGroup>
            </div>
          </Col>
        </Row>
        <Row style={{marginTop: '40px'}}>
          <Col className='info-col'>
            <Nav variant="pills" defaultActiveKey="infoBox0">
              <Nav.Item>
                <Nav.Link eventKey='infoBox0' onClick={() => handleNavTabs(0)}><i className="fa-solid fa-user"></i> Personal info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="infoBox1" onClick={() => handleNavTabs(1)}><i className="fa-solid fa-briefcase"></i> Job info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="infoBox2" onClick={() => handleNavTabs(2)}><i className="fa-solid fa-building"></i> Company info</Nav.Link>
              </Nav.Item>
            </Nav>
            {renderInfoBox()}
          </Col>
          <Col className='search-box'>
            <Nav variant="pills" defaultActiveKey="employeesBox"  style={{justifyContent: 'center'}}>
              <Nav.Item>
                <Nav.Link eventKey='employeesBox' onClick={() => handleNavTabs2(0)}><i className="fa-solid fa-users"></i> Employees</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="departmentsBox" onClick={() => handleNavTabs2(1)}><i className="fa-solid fa-sitemap"></i> Departments</Nav.Link>
              </Nav.Item>
            </Nav>
            {renderInfoBox2()}
          </Col>
        </Row>
    </Container>
  )
}

export default HomeComponent
