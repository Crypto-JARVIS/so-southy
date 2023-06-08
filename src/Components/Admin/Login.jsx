import React, { useEffect, useState } from 'react'
import {auth, provider} from "./config";
import {signInWithPopup} from "firebase/auth";

//This component will cover the admin login
const Login = () => {
  
  const [value, setValue] = useState('')
  
  const handleClick = () =>{
    signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email);
      localStorage.setItem("email", value);
      console.log(data);
    })
  }

  useEffect(()=>{
    setValue(localStorage.getItem("email"));
  },[])

  return (
    <div>
      <h1>Login Page</h1>  
      {value != "null" && value != null? "Hello "+value :   <button onClick={handleClick}>Sign In with Google</button>}
    </div>
  )
}

export default Login