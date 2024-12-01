import React from 'react'
import avatar from '../avatars/dog.png'
import Avatar from './Avatar'
// import { Form } from 'react-bootstrap'
// import Select from 'react-select'
import { LineChart} from '@mui/x-charts'

function TestComponent() {

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
        <div>
          <div>
            <Avatar src={avatar} name='Andrei Rachieru' size={100} />
          </div>
        </div>
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
