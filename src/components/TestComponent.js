import React, {useState} from 'react'

function TestComponent() {
    const [employees] = useState([
        {'ID': 1, 'First Name': 'Alice', 'Last Name': 'Smith', 'Role': 'Manager', 'Department': 'Sales', 'Hired Date': '2020-03-15'},
        {'ID': 2, 'First Name': 'Bob', 'Last Name': 'Johnson', 'Role': 'Developer', 'Department': 'IT', 'Hired Date': '2019-07-22'},
        {'ID': 3, 'First Name': 'Carol', 'Last Name': 'Williams', 'Role': 'Analyst', 'Department': 'Finance', 'Hired Date': '2018-01-10'},
        {'ID': 4, 'First Name': 'David', 'Last Name': 'Brown', 'Role': 'Designer', 'Department': 'Marketing', 'Hired Date': '2021-11-05'},
        {'ID': 5, 'First Name': 'Emma', 'Last Name': 'Davis', 'Role': 'HR Specialist', 'Department': 'Human Resources', 'Hired Date': '2017-06-20'},
        {'ID': 6, 'First Name': 'Frank', 'Last Name': 'Miller', 'Role': 'Support Engineer', 'Department': 'Customer Service', 'Hired Date': '2019-02-14'},
        {'ID': 7, 'First Name': 'Grace', 'Last Name': 'Wilson', 'Role': 'Product Manager', 'Department': 'Product', 'Hired Date': '2020-08-03'},
        {'ID': 8, 'First Name': 'Henry', 'Last Name': 'Moore', 'Role': 'QA Tester', 'Department': 'Quality Assurance', 'Hired Date': '2022-04-18'},
        {'ID': 9, 'First Name': 'Ivy', 'Last Name': 'Taylor', 'Role': 'Data Scientist', 'Department': 'Data Science', 'Hired Date': '2021-10-25'},
        {'ID': 10, 'First Name': 'Jack', 'Last Name': 'Anderson', 'Role': 'Sales Associate', 'Department': 'Sales', 'Hired Date': '2016-12-01'}
      ])

    const goupeByData = () => {
        const x = employees.reduce((result, employee) => {
            const department = employee.Department
            if (!result[department]) {
                result[department] = []
            }
            result[department].push(employee)

            return result
        }, {})
        console.log(x)
    }

  return (
    <div>
        <li>{goupeEmployees()}</li>
    </div>
  )
}

export default TestComponent
