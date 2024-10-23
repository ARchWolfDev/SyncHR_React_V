import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'

function SettingsModal() {



  return (
    <Container>
        <Row>
            <Col style={{maxWidth: '25%', borderRight: '0.5px solid #ddd'}}>
                <Nav variant="pills" defaultActiveKey="link-0" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0">Personal info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled">Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col>
                Content
            </Col>
        </Row>
    </Container>
  )
}

export default SettingsModal
