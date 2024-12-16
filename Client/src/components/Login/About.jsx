import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();

    const handleNav = () => {
        navigate('/');
    }

    return (
        <div>
            <button type="button" onClick={handleNav}>Go to login page</button>
        </div>
    )
}

export default About
