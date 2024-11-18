import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, ToggleButton } from 'react-bootstrap'
import TableComponent from './TableComponent'

function AdminRoles() {

  const departments = [
    {
      id: 1,
      name: "Engineering",
      roles: [
        { id: 1, name: "Software Engineer" },
        { id: 2, name: "Quality Assurance Engineer" },
        { id: 3, name: "DevOps Specialist" },
        { id: 4, name: "Technical Lead" },
        { id: 5, name: "Backend Developer" }
      ]
    },
    {
      id: 2,
      name: "Marketing",
      roles: [
        { id: 6, name: "Content Strategist" },
        { id: 7, name: "Social Media Manager" },
        { id: 8, name: "SEO Specialist" },
        { id: 9, name: "Brand Manager" }
      ]
    },
    {
      id: 3,
      name: "Human Resources",
      roles: [
        { id: 10, name: "Recruiter" },
        { id: 11, name: "HR Manager" },
        { id: 12, name: "Compensation and Benefits Specialist" },
        { id: 13, name: "Employee Relations Officer" }
      ]
    },
    {
      id: 4,
      name: "Finance",
      roles: [
        { id: 14, name: "Accountant" },
        { id: 15, name: "Financial Analyst" },
        { id: 16, name: "Payroll Specialist" },
        { id: 17, name: "Tax Consultant" },
        { id: 18, name: "Treasury Manager" }
      ]
    },
    {
      id: 5,
      name: "Operations",
      roles: [
        { id: 19, name: "Operations Manager" },
        { id: 20, name: "Logistics Coordinator" },
        { id: 21, name: "Supply Chain Analyst" },
        { id: 22, name: "Facilities Manager" }
      ]
    }
  ];

  const [departmentList, setDepartmentList] = useState(departments)
  const [activeList, setActiveList] = useState(departments[0])
  const [checked, setChecked] = useState(false)
  const [newRole, setNewRole] = useState('')

  const handleToggleButton = () => {setChecked(!checked)}
  const handleAddForm = (e) => {
    e.preventDefault()
    const newRoleToAdd = {
      id: activeList.roles.length + 1,
      name: newRole
    }
    const updatedDepartmentList = departmentList.map(department => 
      department.id === activeList.id?
      {...department, roles: [...department.roles, newRoleToAdd]}:
      {department}
    )
    setDepartmentList(updatedDepartmentList)
    const updatedActiveList = updatedDepartmentList.find((department) => department.id === activeList.id)
    setActiveList(updatedActiveList)

  }

  const renderAddForm = () => {
    if (checked) {
      return (
        <Form style={{marginTop: 10, display: checked?'flex':'none'}} onSubmit={handleAddForm}>
          <Form.Control size='sm' style={{marginRight: 10}} onChange={(e) => setNewRole(e.target.value)}/>
          <Button size='sm' type='submit'>Add</Button>
        </Form>
      )
    }
  }

  return (
    <Container>
      <Row>
        <Col className='col-3 col-white-box'>
          <div className='m0-box list-white-box'>
            {
              departments.map((department, index) => (
                <div
                  key={index}
                  type='button'
                  className={`white-box m0-box mb-3 ${activeList.id === department.id?'active-white-box': ''}`}
                  onClick={() => setActiveList(department)}
                >
                  {department.name}
                </div>
              ))
            }
          </div>
        </Col>
        <Col>
          <div className='m0-box'>
            <h5>{activeList.name}</h5>
            <div className='br mb-3'></div>
            <ToggleButton 
              variant='primary' 
              size='sm' 
              type='checkbox' 
              checked={checked} 
              onClick={() => handleToggleButton()}
            >Add new
            </ToggleButton>
            {renderAddForm()}
            <TableComponent tableData={activeList.roles} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminRoles
