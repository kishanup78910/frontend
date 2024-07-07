import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Registration from './Registration';
import axios from 'axios';

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

    const handlesubmit=async(e)=>{
     e.preventDefault();
     try{
        const response = await axios.post(
            'http://localhost:8000/login',loginData
        )
        const {success,message}=response.data;

        if(success){
            console.log("Login successfully");
        }else{
            console.log(message)
        }
     }catch(error){
      console.error("login error",error);
     }

     setLoginData({
        username:"",
        password:""
     })
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
            <Link to='./register'>Register here</Link>
        </p>
     </form>
    </div>
  )
}

export default Login
