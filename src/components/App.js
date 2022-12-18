import React, { useState } from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home"
import { useEffect } from "react";
import { auth } from "../firebase";

function App() {

const  [userName, setUserName] = useState('')
  useEffect(()=>{
   auth.onAuthStateChanged((user)=>{
    console.log(user)
    if(user){
      
      setUserName(user.displayName)
    }else{
      setUserName('')
    }
     console.log(user)
   })
  },[]);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/" element={<Home name={userName}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
