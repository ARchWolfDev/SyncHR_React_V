import React, { useState } from 'react'
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useToastContext } from './ToastMessageBoxProvider'

function LoginPage() {

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [backgroundAnimation, setBackgroundAnimation] = useState(false)
    const navigate = useNavigate()
    const {handleToastMessageBox} = useToastContext()

    const handleEmailAddress = (e) => {setEmailAddress(e.target.value)}
    const handlePassword = (e) => {setPassword(e.target.value)}
    const handleShowPassword = () => {setShowPassword(!showPassword)     }

    const handleLoginButton = () => {
        if (emailAddress === user.emailAddress && password === user.password) {
            setBackgroundAnimation(true)
            handleToastMessageBox(false, "You have successfully logged in")
            navigate('/home')
        } else {
            handleToastMessageBox(true, 'Email or Password is incorrect')
        }
    }

  return (
    <div className={`login-page ${backgroundAnimation?'animate-background': ''}`}>
      <Navbar expand="lg"  style={{padding: '30px'}}>
        <Container>
            <Navbar.Brand><h1 className='logo'>Sync.</h1></Navbar.Brand>
            <Nav className='nav-bar-links'>  
                <Nav.Link ><Link to={'/'} style={{textDecoration: 'none'}}>Home</Link></Nav.Link>
                <Nav.Link >Arch DEV</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <div className='login-box'>
        <h3 style={{marginBottom: 20}}>Login</h3>
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control placeholder='Email' type="email" onChange={handleEmailAddress}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder='Password' type={showPassword? 'text': 'password'} onChange={handlePassword}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Check 
                    type="checkbox" 
                    label="Show Password" 
                    checked={showPassword}
                    onChange={handleShowPassword}
                />
            </Form.Group>
            <Button style={{float: 'right'}} onClick={handleLoginButton}>Login</Button>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
