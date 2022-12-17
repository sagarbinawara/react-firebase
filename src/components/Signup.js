import React,{useRef} from 'react'
import { Form, Button, Card } from "react-bootstrap"
import {useAuth } from '../contexts/AuthContext'
import Container from 'react-bootstrap/Container';
export default function Signup() {

    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const passwordConfirmRef = useRef()
    // const  {signup} =  useAuth() 

    // console.log(signup)

    // function handleSubmit(e){
    //     e.preventDefault()
    //     // signup(emailRef.current.value, passwordRef.current.value)
    // }

    return (
        <Container>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your name" />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <h6>Already have  an account!</h6><Button variant="link">Login</Button>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
    )
}
