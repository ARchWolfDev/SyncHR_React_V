import React, {useState} from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import Avatar from './Avatar';

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
                    <ListGroup.Item key={index} style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Avatar name={department} size={30} style={{marginRight: 10}} type='departments'/> {department}
                    </ListGroup.Item>
                ))
            ): (<ListGroup.Item>No department found</ListGroup.Item>)
            }
        </ListGroup>
    </div>
  )
}

export default DepartmentsBox
