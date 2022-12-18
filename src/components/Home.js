import React, { useEffect, useState } from 'react'
import {Link, useLocation} from  "react-router-dom"
import get from 'lodash/get'

function Home(props) {

  const location = useLocation();
  console.log(location)
  const [name, updateName] = useState(null)

  useEffect(()=>{
    updateName(get(location,'state.userName',null))
  },[])
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
            {name ? `welcome - ${name}`: 'Login Please'}
        </h2>
    </div>
  )
}

export default Home