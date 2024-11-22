import React from 'react'
import avatar from '../avatars/dog.png'
import Avatar from './Avatar'
// import { Form } from 'react-bootstrap'
import Select from 'react-select'
import { LineChart, lineElementClasses } from '@mui/x-charts'

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

  const uData = [40, 27, 18, 34];
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const list = []

  for (var i = (currentMonth - 3); i <= currentMonth; i++){
    const date = new Date(2024, i)
    const year = date.getFullYear()
    const month = date.toLocaleString('default', {month : 'short'})
    list.push(`${month} ${year}`)
  }
  console.log(list)



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
        <LineChart
          width={500}
          height={300} 
          series={[{data: uData, label: 'Employees count', color: 'red'}]}
          xAxis={[{scaleType: 'point', data: list}]}
        />
    </div>
  )
}

export default TestComponent
