import React, { useState } from 'react';
import { Col, Form, Row, Table } from 'react-bootstrap';

function AdminEmployees() {
  const [employees] = useState([
    { id: 1, name: "Alice", department: "Engineering", role: "Developer" },
    { id: 2, name: "Bob", department: "Engineering", role: "Developer" },
    { id: 3, name: "Charlie", department: "Engineering", role: "Manager" },
    { id: 4, name: "David", department: "Sales", role: "Manager" },
    { id: 5, name: "Eve", department: "Sales", role: "Representative" },
    { id: 6, name: "Frank", department: "HR", role: "Recruiter" }
  ]);

  const [groupBy, setGroupBy] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [sortedEmployees, setSortedEmployees] = useState([...employees]);

  const sortEmployees = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });

    const sorted = [...employees].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setSortedEmployees(sorted);
  };

  const handleGroupByOption = (e) => {
    setGroupBy(e.target.value);
  };

  // Helper function to group employees based on selected groupBy option
  const groupEmployees = () => {
    if (!groupBy) return { All: sortedEmployees }; // No grouping

    return sortedEmployees.reduce((groups, employee) => {
      const groupKey = employee[groupBy];
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(employee);
      return groups;
    }, {});
  };

  // Rendering each group as a separate table
  const renderGroupedTables = () => {
    const groupedEmployees = groupEmployees();

    return Object.keys(groupedEmployees).map((group, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
        <h5>{groupBy.charAt(0).toUpperCase() + groupBy.slice(1)}: {group}</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => sortEmployees('id')} style={{ cursor: 'pointer' }}>#</th>
              <th onClick={() => sortEmployees('name')} style={{ cursor: 'pointer' }}>Name</th>
              <th onClick={() => sortEmployees('department')} style={{ cursor: 'pointer' }}>Department</th>
              <th onClick={() => sortEmployees('role')} style={{ cursor: 'pointer' }}>Role</th>
            </tr>
          </thead>
          <tbody>
            {groupedEmployees[group].map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    ));
  };

  return (
    <>
      <Row>
        <Col className='box'>
          <Form.Select onChange={handleGroupByOption}>
            <option value="">All</option>
            <option value="department">Department</option>
            <option value="role">Role</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col className='box'>
          {renderGroupedTables()}
        </Col>
      </Row>
    </>
  );
}

export default AdminEmployees;
