import React from 'react'

function AdminRoles() {

  const roles = [
    {
        id: 1,
        name: "Manager",
        employees: [{ id: 1, name: "Alice Smith", department: "Sales", email: "Alice.Smith@arch-dev.com" }]
    },
    {
        id: 2,
        name: "Developer",
        employees: [{ id: 2, name: "Bob Johnson", department: "IT", email: "Bob.Johnson@arch-dev.com" }]
    },
    {
        id: 3,
        name: "Analyst",
        employees: [{ id: 3, name: "Carol Williams", department: "Finance", email: "Carol.Williams@arch-dev.com" }]
    },
    {
        id: 4,
        name: "Designer",
        employees: [{ id: 4, name: "David Brown", department: "Marketing", email: "David.Brown@arch-dev.com" }]
    },
    {
        id: 5,
        name: "HR Specialist",
        employees: [{ id: 5, name: "Emma Davis", department: "Human Resources", email: "Emma.Davis@arch-dev.com" }]
    },
    {
        id: 6,
        name: "Support Engineer",
        employees: [{ id: 6, name: "Frank Miller", department: "IT", email: "Frank.Miller@arch-dev.com" }]
    },
    {
        id: 7,
        name: "Sales Representative",
        employees: [{ id: 7, name: "Grace Wilson", department: "Sales", email: "Grace.Wilson@arch-dev.com" }]
    },
    {
        id: 8,
        name: "Marketing Specialist",
        employees: [{ id: 8, name: "Henry Moore", department: "Marketing", email: "Henry.Moore@arch-dev.com" }]
    },
    {
        id: 9,
        name: "Data Scientist",
        employees: [{ id: 9, name: "Ivy Taylor", department: "Finance", email: "Ivy.Taylor@arch-dev.com" }]
    },
    {
        id: 10,
        name: "Sales Associate",
        employees: [{ id: 10, name: "Jack Anderson", department: "Sales", email: "Jack.Anderson@arch-dev.com" }]
    },
    {
        id: 11,
        name: "HR Manager",
        employees: [{ id: 11, name: "Kate Thomas", department: "Human Resources", email: "Kate.Thomas@arch-dev.com" }]
    },
    {
        id: 12,
        name: "Accountant",
        employees: [{ id: 12, name: "Liam Taylor", department: "Finance", email: "Liam.Taylor@arch-dev.com" }]
    },
    {
        id: 13,
        name: "Sales Executive",
        employees: [{ id: 13, name: "Mia Walker", department: "Sales", email: "Mia.Walker@arch-dev.com" }]
    },
    {
        id: 14,
        name: "IT Manager",
        employees: [{ id: 14, name: "Noah Allen", department: "IT", email: "Noah.Allen@arch-dev.com" }]
    },
    {
        id: 15,
        name: "Marketing Director",
        employees: [{ id: 15, name: "Olivia King", department: "Marketing", email: "Olivia.King@arch-dev.com" }]
    },
    {
        id: 16,
        name: "Recruiter",
        employees: [{ id: 16, name: "Paul Scott", department: "Human Resources", email: "Paul.Scott@arch-dev.com" }]
    },
    {
        id: 17,
        name: "Sales Manager",
        employees: [{ id: 17, name: "Quinn Young", department: "Sales", email: "Quinn.Young@arch-dev.com" }]
    },
    {
        id: 18,
        name: "Financial Analyst",
        employees: [{ id: 18, name: "Rachel Adams", department: "Finance", email: "Rachel.Adams@arch-dev.com" }]
    },
    {
        id: 19,
        name: "IT Support",
        employees: [{ id: 19, name: "Sam Clark", department: "IT", email: "Sam.Clark@arch-dev.com" }]
    },
    {
        id: 20,
        name: "Marketing Coordinator",
        employees: [{ id: 20, name: "Tina Evans", department: "Marketing", email: "Tina.Evans@arch-dev.com" }]
    }
];

console.log(roles)

  return (
    <div>
      admin roles
    </div>
  )
}

export default AdminRoles
