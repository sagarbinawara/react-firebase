import React, { Children, useContext, useEffect,createContext, useState } from 'react'
// import { auth } from  '../firebase'
import { onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
const AuthContext = createContext()
console.log(AuthContext)
console.log(createContext)
export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
const [currentUser,  setcurrentUser] = useState()

function signup(email,password){
    return createUserWithEmailAndPassword(email, password)
}

useEffect(()=>{
     const unsubscribe = onAuthStateChanged(user  =>{
        setcurrentUser(user)
     })

     return unsubscribe
},[])


const value = {
    currentUser,
    signup
}

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
