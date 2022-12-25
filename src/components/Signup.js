import React,{useState} from 'react'
import { Link, Navigate, useNavigate, useNAvigate} from "react-router-dom"
import { Form, Button, Card } from "react-bootstrap"
import {useAuth } from '../contexts/AuthContext'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword , updateProfile, UserProfile} from 'firebase/auth';
import Container from 'react-bootstrap/Container';
export default function Signup() {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control  required placeholder="Enter your name" onChange={(e)=>setValues((prev)=>({...prev,name:e.target.value}))} />
        <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control required  type="email" placeholder="Enter email" onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}/>
      <Form.Control.Feedback type="invalid">
            Please provide a email
          </Form.Control.Feedback>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control required type="password" placeholder="Password" onChange={(e)=>setValues((prev)=>({...prev,password:e.target.value}))}/>
      <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <h6>Already have  an account!</h6><Link to="/login">Log In Up</Link>
    </Form.Group>
    <Button type="submit">
      Submit
    </Button>
  </Form>
  </Container>
    )
}
