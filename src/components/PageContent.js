import React, { useState } from 'react'
import Calendar from './Calendar'
import { Container, Row, Col } from 'react-bootstrap'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import Nav from 'react-bootstrap/Nav';
import PersonalInfoBox from './PersonalInfoBox';
import JobInfoBox from './JobInfoBox';
import CompanyInfoBox from './CompanyInfoBox';

function PageContent() {

  const [activeTab, setActiveTab] = useState(0)

  const handleNavTabs = (x) => {
    setActiveTab(x)
  }

  const renderInfoBox = () => {
    const infoBoxArray = [<PersonalInfoBox />, <JobInfoBox />, <CompanyInfoBox />]
    return (<div className='box info-box'>{infoBoxArray.at(activeTab)}</div>)
  }

  return (
    <div className='content'>
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
            </div>
          </Col>
        </Row>
        <Row style={{marginTop: '40px'}}>
          <Col>
            <Nav variant="pills" defaultActiveKey="infoBox0">
              <Nav.Item>
                <Nav.Link eventKey='infoBox0' onClick={() => handleNavTabs(0)}>Personal info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="infoBox1" onClick={() => handleNavTabs(1)}>Job info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="infoBox2" onClick={() => handleNavTabs(2)}>Company info</Nav.Link>
              </Nav.Item>
            </Nav>
            {renderInfoBox()}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageContent
