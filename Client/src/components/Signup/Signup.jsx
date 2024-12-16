import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import './Signup.css'

const Signup = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }
    
    const handleLogin = async () => {
        navigate('/');
    }

    const handleSubmit = async() => {
        navigate('/verify');
    }
    
    return (
        <div className="signup">
            <div className="spacer"></div>
            <div className="signupcont">
                <div className="signup-column1">
                    <div className="header">
                        <div className="navbutton">
                            <a onClick={handleLogin}>{"<"} Back to Login</a>
                            <div className="empty"></div>
                        </div><br />
                        <h1>Sign Up</h1>
                        <p>It's quick, easy, and secure!</p>
                    </div>
                    <div className="signup-inputcont">
                        <div className="names">
                            <input type="text" id='firstname' placeholder='First name'/>
                            <input type="text" id='surname' placeholder='Surname'/>
                        </div>
                        <input type="text" className='inputs' placeholder='Username'/>
                        <input type="text" className='inputs' placeholder='E-mail address'/>
                        <div className="passinput">
                            <input name = "password"
                                className = "inputs" id = "pass" placeholder='Password'
                                type = {showPassword ? "text" : "password"}
                            />
                            <span onClick={handleTogglePassword}>{showPassword ? <IoMdEyeOff size = {20}/> : <IoMdEye size={20}/>}</span>
                        </div>
                        <div className="passinput">
                            <input name = "password"
                                className = "inputs" id = "pass" placeholder='Password'
                                type = {showPassword ? "text" : "password"}
                            />
                            <span onClick={handleTogglePassword}>{showPassword ? <IoMdEyeOff size = {20}/> : <IoMdEye size={20}/>}</span>
                        </div>
                        <button type="button" id = "primary" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
                <div className="signup-column2"></div>
            </div>
            <div className="spacer"></div>
        </div>
    )
}

export default Signup
