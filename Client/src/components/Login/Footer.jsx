import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  const handleNav = () =>{
    navigate('/about');
  }

  return (
    <div>
      <div className="footer">
        <p>©Copyright 2024. All Rights Reserved. Martapp Systems Inc.</p>
        <a onClick={handleNav}>About</a>
      </div>
    </div>
  )
}

export default Footer