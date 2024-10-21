import React from 'react'
import Calendar from './Calendar'
import { Container, Row, Col } from 'react-bootstrap'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

function PageContent() {
  return (
    <div className='content'>
      <Container style={{'maxWidth': '100%', 'padding': 0}}>
        <Row>
          <Col lg={9}><Calendar /></Col>
          <Col style={{'paddingRight': 0}} className='traker'>
            <div className='box' style={{'textAlign': 'center', 'height': '45%'}}>
              <h5>Timesheet completed</h5>
              <div className='br'></div>
              <Gauge style={{'margin': 'auto'}}
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
              {/* <div className="pie animate no-round" style={{"--p":10, '--c': 'green'}}> 10%</div> */}
              <p>October bussniss days</p>
            </div>
            <div className='box' style={{'height': '55%'}}>Div2</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PageContent
