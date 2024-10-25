import React, { useState } from 'react'
import { Col, Container, Nav, Row} from 'react-bootstrap'
import SettingsModal_Tab0 from './SettingsModal_Tab0'
import SettingsModal_Tab1 from './SettingsModal_Tab1'
import SettingsModal_Tab2 from './SettingsModal_Tab2'

function SettingsModal() {

    const [navTab, setNavTab] = useState(0)

    const handleNavTab = (tabId) => {
        setNavTab(tabId)
    }

    const renderTabContent = () => {
        const tabContentArray = [<SettingsModal_Tab0/>, <SettingsModal_Tab1/>, <SettingsModal_Tab2/>]
        return tabContentArray.at(navTab)
    }

  return (
    <Container>
        <Row>
            <Col style={{maxWidth: '25%', borderRight: '0.5px solid #ddd'}}>
                <Nav variant="pills" defaultActiveKey="link-0" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => handleNavTab(0)}><i className="fa-solid fa-user"></i> Personal info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => handleNavTab(1)}><i className="fa-solid fa-house"></i> App settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" onClick={() => handleNavTab(2)}><i className="fa-solid fa-lock"></i> Security</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col>
                {renderTabContent()}
            </Col>
        </Row>
    </Container>
  )
}

export default SettingsModal
