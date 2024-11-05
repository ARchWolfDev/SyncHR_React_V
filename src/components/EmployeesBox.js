import React, { useState } from 'react';
import { Form, ListGroup, Image } from 'react-bootstrap';
import avatar from '../avatars/dog.png'
import { Link } from 'react-router-dom';

function EmployeesBox() {
  const [searchTerm, setSearchTerm] = useState(''); // State to track the search input

  // List of employees (You can replace it with your data)
  const employees = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Michael Brown',
    'Emily Davis',
    'William Johnson',
    'Patricia Lee',
    'David Anderson',
    'Linda White',
    'Robert Harris',
    'Jessica Turner',
    'Thomas Thompson'
  ];

  // Filter the employees based on the search term
  const filteredEmployees = employees.filter(employee =>
    employee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle input change event
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      {/* Search input */}
      <Form>
        <Form.Control
          type='text'
          placeholder='Search Employees'
          value={searchTerm}
          onChange={handleSearchChange}
          className='mb-3'
        />
      </Form>

      {/* Search results */}
      <ListGroup className='scrollable-list'>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee, index) => (
            <ListGroup.Item key={index}><Link style={{textDecoration: 'none', color: 'black'}} to={'/profile/ZW1wLTEwMDAx'}><Image src={avatar} roundedCircle style={{width: '30px'}}/> {employee}</Link></ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No employees found</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

export default EmployeesBox;
