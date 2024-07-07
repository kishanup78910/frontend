import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Registration from './Registration';


const Login = () => {

    const [loginData,setLoginData]=useState({
        username:"",
        password:""
    })
    const handleLoginChange=(e)=>{
        const {name,value}=e.target;
        setLoginData((prevData)=>({
            ...prevData,[name]:value
        }))
   
    }

    const handlesubmit=(e)=>{
     e.preventDefault();
     try{
        // const response = 
     }catch(err){

     }
    }
  return (
    <div>
     <h1>Login Page</h1>
     <form onSubmit={handlesubmit}>
        <input  type='text' name='userName' value={loginData.username} placeholder='Username' required onChange={handleLoginChange}/>
        <br/>
        <input  type='password' name='Password' value={loginData.password} placeholder='Password' required onChange={handleLoginChange}/>

        <br/>
        <button type='submit'>
            Login
        </button>
        <p>Note register yet?
            <Link to='./Registration'>Register here</Link>
        </p>
     </form>
    </div>
  )
}

export default Login
