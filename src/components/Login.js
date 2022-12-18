import React,  { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link, Navigate, useNavigate, useNAvigate} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword , updateProfile, UserProfile} from 'firebase/auth';
import Container from 'react-bootstrap/Container';
function Login() {

  const [validated, setValidated] = useState(false);
  const  navigate  = useNavigate();
    const [values,setValues] = useState({
          name:"",
          email:"",
          password:"",
    })

    const handleSubmit = (e) =>{
      e.preventDefault();
      const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

        createUserWithEmailAndPassword(auth,values.email,values.password)
        .then(async(res)=>{
          const user =  res.user
          console.log(res)
          await updateProfile(user,{
            displayName:values.name,
          });
          navigate('/', {
            userName: values.name,
          });
          // navigate("/")
          console.log(res);
        }).catch((err)=>{
          console.log("Error-",err)
        })
    }

  return (
    <Container>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"   onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e)=>setValues((prev)=>({...prev,password:e.target.value}))}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <h6>New User!</h6><Button variant="link">Sign Up</Button>
    </Form.Group>
    <Button  type="submit">
      Submit
    </Button>
  </Form>
  </Container>
  )
}

export default Login