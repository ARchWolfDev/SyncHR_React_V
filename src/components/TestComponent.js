import React from 'react'
import avatar from '../avatars/dog.png'
import Avatar from './Avatar'
import { Form } from 'react-bootstrap'
import Select from 'react-select'

function TestComponent() {

  const option = [
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ]

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: '30px', // Set the minimum height
      height: '30px',    // Set the overall height
      fontSize: '14px',  // Optional: Adjust the font size
    }),
    multiValue: (base) => ({
      ...base,
      fontSize: '12px', // Optional: Adjust font size for selected options
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0 6px', // Adjust padding to make it fit within the smaller height
    }),
    input: (base) => ({
      ...base,
      margin: 0, // Remove any extra margin
      padding: 0, // Remove any extra padding
    }),
    indicatorsContainer: (base) => ({
      ...base,
      height: '30px', // Match the control's height
    }),
  };

  return (
    <div style={{margin: 50}}>
        avatar with initials 
        <Avatar name='Andrei Rachieru' size={100}/>
        avatar with src 
        <Avatar src={avatar} name='Andrei Rachieru' size={100} />
        <Select 
          options={option}
          isMulti
          styles={customStyles}
        />
    </div>
  )
}

export default TestComponent
