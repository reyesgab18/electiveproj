import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {

    const navigate = useNavigate();
    
    const handleLogout = async () => {
        navigate('/');
    }
    
    return (
        <div>
            <h1>Signup page</h1>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Signup
