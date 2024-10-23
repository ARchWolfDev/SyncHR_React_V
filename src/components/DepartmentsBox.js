import React, {useState} from 'react'
import { Form, ListGroup } from 'react-bootstrap'

function DepartmentsBox() {
    const [searchTerm, setSearchTerm] = useState('');

    const departments = [
        'Development',
        'Management',
        'Human Resources',
        'Operational',
        'Quality',
        'Test'
      ];

    const filteredDepartments = departments.filter(department =>
        department.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

  return (
    <div>
        <Form>
            <Form.Control
                type='text'
                placeholder='Search Department'
                className='mb-3'
                onChange={handleSearchChange}
            >
            </Form.Control>
        </Form>
        <ListGroup className='scrollable-list'>
            {filteredDepartments.length > 0 ? (
                filteredDepartments.map((department, index) => (
                    <ListGroup.Item key={index}>{department}</ListGroup.Item>
                ))
            ): (<ListGroup.Item>No department found</ListGroup.Item>)
            }
        </ListGroup>
    </div>
  )
}

export default DepartmentsBox
