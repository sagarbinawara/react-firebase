import React from 'react'
import {Link} from  "react-router-dom"
function Home(props) {
  return (
    <div>
        <h1>
          <Link to="/login" >Login</Link>
        </h1>
        <br/>
        <h1>
        <Link to="/signup" >Signup</Link>
        </h1>
        <br/>
        <h2>
            {props.name ? `welcome - ${props.name}`: 'Login Please'}
        </h2>
    </div>
  )
}

export default Home