import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom"

import React from 'react'
import './Login.css'
import logo from '../assets/logo.png'
import axios from 'axios'
import Footer from './Footer'

const LoginSignup = () => {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setCredentials(prevState => ({
        ...prevState,
        [name]: value,
    }))
  }

  const handleSubmit = async () => {

    try{
        const response = await axios.post('http://localhost:3000/add', {
            username: credentials.username,
            password: credentials.password
        })

        if(response.status === 201){
            setStatusMessage('User created.');
            setStatusType('success');    
            navigate('/signup');
        }

    } catch (err){
        if(err.response.status === 400){
            setStatusMessage('User already exists.');
            setStatusType('error');
            console.log('errpr');
        } else{
            setStatusMessage('Something went wrong. Please try again.');
            setStatusType('error');
        }
    }
  }

  const [statusMessage, setStatusMessage] = useState('');  //message to show sa web
  const [statusType, setStatusType] = useState('');  //type of message  (scuccess/error)

  const goReset = () => {
    navigate('/reset');
  }

  const goSignup = () => {
    navigate('/signup');
  }
 
  return (
    <div className="login">
        <div className="spacer"></div>
        <div className="logincont">
            <div className="column1">
            </div>
            <div className="column2">
                <div className="header">
                    <img src={logo} alt="" /><br />
                    <h1>Hi, Welcome!</h1>
                    <p>Please login to your account</p>
                </div>
                <div className="inputcont">
                    <input type="radio" name="" id="" />
                    <input type="text" name = "username" value = {credentials.username} onChange = {handleInputChange}className = "inputs" placeholder='Username'/>
                    <div className="passinput">
                        <input name = "password" value = {credentials.password} onChange = {handleInputChange}
                            className = "inputs" id = "pass" placeholder='Password'
                            type = {showPassword ? "text" : "password"}
                        />
                        <span onClick={handleTogglePassword}>{showPassword ? <IoMdEyeOff size = {20}/> : <IoMdEye size={20}/>}</span>
                    </div>
                    <a id = "forgot" onClick={goReset}>Forgot Password?</a>
                </div>
                {statusMessage && (
                    <div className={`status-message ${statusType}`}>
                    {statusMessage}
                    </div>
                )}
                <div className='buttons'>
                    <button type="button" id = "primary" onClick={handleSubmit}>Login</button>
                    <p>or</p>
                    <button type="button" id = "secondary" onClick={goSignup}>Create a new account</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LoginSignup
