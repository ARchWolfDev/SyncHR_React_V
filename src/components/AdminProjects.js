import React from 'react'
import { Col, Row, Badge } from 'react-bootstrap'
import Avatar from './Avatar'

function AdminProjects() {
  return (
    <Row>
      <Col className='box' style={{display: 'flex', alignItems: 'center', flex: '1 1 100%'}}>
        <div className='avatar-text-div' style={{width: '50%'}}>
          <Avatar size={75} name='Project Name' type='project'/>
          <div style={{marginLeft: 10}}>
            <h5 style={{marginLeft: 0}}>Project Name <Badge bg="success">Active</Badge></h5>
            <p>Description of the project/Client</p>
          </div>
        </div>
        <div style={{marginBottom: '1rem'}}>
          <p className='no-margin'>TaskList:</p>
          <Badge bg="success">Development</Badge>
          <Badge bg="primary">Operational</Badge>
        </div>
        <div style={{display: 'flex', marginLeft: 'auto'}}>
          <div style={{position: 'relative'}}>
            <Avatar size={30} name='John' />
          </div>
          <div style={{position: 'relative', right: 10}}>
            <Avatar size={30} name='Marcu'/>
          </div>
          <div style={{position: 'relative', right: 20}}>
            <Avatar size={30} name='Ioana'/>
          </div>
        </div>
        <div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </Col>
    </Row>
  )
}

export default AdminProjects
