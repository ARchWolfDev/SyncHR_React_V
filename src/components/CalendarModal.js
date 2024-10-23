import React, { useState } from 'react'
import { Col, Container, Form, Row, Nav, Button} from 'react-bootstrap'

function CalendarModal(props) {

    const [selectedProjects, setSelectedProjects] = useState([])
    const [selectedProject, setSelectedProject] = useState(''); 
    const [content, setContent] = useState(null)

    const handleSelectedProject = (e) => {
        const selectedProject = e.target.value

        if (selectedProject && !selectedProjects.includes(selectedProject)) {
            setSelectedProjects(prevProjects => [...prevProjects, selectedProject])
        }
        setSelectedProject('');
    }

    const handleRemoveProject = (projectToRemove) => {
        setSelectedProjects(prevProjects => 
          prevProjects.filter(project => project !== projectToRemove) // Remove the selected project
        );
    };

    const renderProjectContent = () => {
        if (content === null) {
            return ''
        } else {
            return <div>Content of {selectedProjects.at(content)}</div>
        }
        
    }

  return (
    <Container>
        <Row>
            <Col style={{maxWidth: '30%', borderRight: '0.5px solid #ddd'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>Employee</Form.Label>
                        <Form.Control type="text" value={'Andrei Rachieru'} readOnly/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" value={'Manager'} readOnly/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="text" value={'Management'} readOnly/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>Selected Date</Form.Label>
                        <Form.Control type="text" value={props.selectedDate} readOnly/>
                    </Form.Group>
                </Form>
            </Col>
            <Col>
                <Form.Select className='mb-3' onChange={handleSelectedProject} value={selectedProject}>
                    <option defaultValue={''}></option>
                    <option value="Internal">Internal</option>
                    <option value="SyncHR Project">SyncHR Project</option>
                </Form.Select>
                <Nav variant="tabs" defaultActiveKey={0}>
                    {selectedProjects.map((project, index) => (
                        <Nav.Item>
                            <Nav.Link onClick={() => setContent(index)} eventKey={index}>{project} <Button onClick={() => handleRemoveProject(project)} style={{padding: 0}} variant="link"><i class="fa-solid fa-x fa-2xs"></i></Button></Nav.Link>
                        </Nav.Item>
                        
                    ))}
                </Nav>
                {renderProjectContent()}
            </Col>
        </Row>
    </Container>
  )
}

export default CalendarModal
