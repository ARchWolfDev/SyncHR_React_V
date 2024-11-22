import React, {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TimesheetsPendingComponent from './TimesheetsPendingComponent'
import TimesheetsApprovedComponent from './TimesheetsApprovedComponent'
import TimesheetsRejectedComponent from './TimesheetsRejectedComponent'

function AdminRequestsTimesheets() {

    const [tabSelected, setTabSelected] = useState(0)
    const timesheetsStateComponents = [<TimesheetsPendingComponent />, <TimesheetsApprovedComponent />, <TimesheetsRejectedComponent />]

    const handleTimesheetsTabs = (tab) => {
        setTabSelected(tab)
    }
    const renderTabSelected = () => {
        return timesheetsStateComponents.at(tabSelected)
    }

  return (
    <Container>
        <Row className='timesheet-status-box-row'>
            <Col 
                className='box hover-box' 
                type='button' 
                style={{backgroundColor: '#ffeb99'}}
                onClick={() => handleTimesheetsTabs(0)}
            >
                {tabSelected === 0?<strong>Pending</strong>:'Pending'} <strong style={{float:'right'}}>0</strong>
            </Col>
            <Col 
                className='box hover-box' 
                type='button' 
                style={{backgroundColor: '#87ff99'}}
                onClick={() => handleTimesheetsTabs(1)}
            >
                {tabSelected === 1?<strong>Approved</strong>:'Approved'} <strong style={{float:'right'}}>0</strong>
            </Col>
            <Col 
                className='box hover-box' 
                type='button' 
                style={{backgroundColor: '#ff9999'}}
                onClick={() => handleTimesheetsTabs(2)}
            >
                {tabSelected === 2?<strong>Rejected</strong>:'Rejected'} <strong style={{float:'right'}}>0</strong>
            </Col>
        </Row>
        {renderTabSelected()}
    </Container>
  )
}

export default AdminRequestsTimesheets
