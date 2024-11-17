import React, { useState, useRef } from 'react'
import { Container, Row, Col, Button, Form, ToggleButton } from 'react-bootstrap'
import TableComponent from './TableComponent';

function AdminTasks() {

  const [taskLists, setTasksList] = useState([
    {
      id: 1,
      name: "Development",
      createdBy: "Alice Johnson",
      dateCreated: "2024-11-10",
      tasks: [
        { id: 1, name: "Application development" },
        { id: 2, name: "API integration" },
        { id: 3, name: "Database design" }
      ]
    },
    {
      id: 2,
      name: "Marketing",
      createdBy: "Bob Smith",
      dateCreated: "2024-11-11",
      tasks: [
        { id: 4, name: "Social media campaign" },
        { id: 5, name: "Email newsletter" },
        { id: 6, name: "SEO optimization" }
      ]
    },
    {
      id: 3,
      name: "Design",
      createdBy: "Carol White",
      dateCreated: "2024-11-09",
      tasks: [
        { id: 7, name: "Wireframe creation" },
        { id: 8, name: "UI/UX prototyping" },
        { id: 9, name: "Graphic design for ads" }
      ]
    },
    {
      id: 4,
      name: "Testing",
      createdBy: "David Lee",
      dateCreated: "2024-11-08",
      tasks: [
        { id: 10, name: "Unit testing" },
        { id: 11, name: "Integration testing" },
        { id: 12, name: "User acceptance testing" }
      ]
    },
    {
      id: 5,
      name: "Operations",
      createdBy: "Eve Brown",
      dateCreated: "2024-11-07",
      tasks: [
        { id: 13, name: "Server maintenance" },
        { id: 14, name: "Data backup" },
        { id: 15, name: "System monitoring" }
      ]
    }
  ]);

  const [activeList, setActiveList] = useState(taskLists[0])
  const [checkedForm, setCheckedForm] = useState(false)
  const [newTaskName, setNewTask] = useState('')
  const inputRef = useRef(null);

  const handleTasksListButton = (listId) => {
    const listSelected = taskLists.filter((task) => task.id === listId)
    console.log(listSelected[0].tasks)
    if (listSelected) {
      setActiveList(listSelected[0])
    }
  }
  const handleAddTaskRadioButton = () => {
    setCheckedForm((prevChecked) => !prevChecked)
    if (!checkedForm) {
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }
  const handleTaskInputChange = (e) => {
    setNewTask(e.target.value)
  }
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskName.trim() === '') return;
  
    const updatedTaskLists = taskLists.map((list) => {
      if (list.id === activeList.id) {
        const newTask = {
          id: list.tasks.length + 1,
          name: newTaskName
        };
        return {
          ...list,
          tasks: [...list.tasks, newTask]
        };
      }
      return list;
    });
  
    setTasksList(updatedTaskLists);
  
    const updatedActiveList = updatedTaskLists.find((list) => list.id === activeList.id);
    setActiveList(updatedActiveList);
    setNewTask('');
  };

  console.log(taskLists)

  return (
    <Container>
      <Row>
        <Col className='col-3'>
          <div className='m0-box '>
            {taskLists.map((list) => (
              <div key={list.id} type='button' className={`white-box box ${activeList.id === list.id?'active-white-box': ''}`} onClick={() => handleTasksListButton(list.id)}>{list.name}</div>
            ))}
          </div>
        </Col>
        <Col>
          <div className='m0-box'>
            <h5>{activeList.name} List</h5>
            <div className='br mb-3'></div>
            <Row>
              <Col>
              <p>Projects: SyncHR</p>
              <p>Tasks no: {activeList.tasks.length}</p>
              </Col>
              <Col className='col-4'>
                <span>Created by: <strong>{activeList.createdBy}</strong></span>
                <br></br>
                <span>Date: <strong>{activeList.dateCreated}</strong></span>
              </Col>
            </Row>
            <div className='br mb-3'></div>
            <ToggleButton variant='primary' size='sm' type='checkbox' checked={checkedForm} onClick={handleAddTaskRadioButton}>Add Task</ToggleButton>
            <Button variant="outline-secondary" size="sm" style={{marginLeft: 5}}>Edit</Button>
            <Button variant="danger" size="sm" style={{float: 'right'}}>Delete</Button>
            <Form style={{marginTop: 10, display: checkedForm?'flex':'none'}} onSubmit={handleAddTask}>
              <Form.Control size='sm' style={{marginRight: 10}} placeholder='Task Name + Enter' onChange={handleTaskInputChange} value={newTaskName} ref={inputRef}></Form.Control>
              <Button variant="primary" size="sm" type='submit'>Add</Button>
            </Form>
            <TableComponent tableData={activeList.tasks}/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminTasks
