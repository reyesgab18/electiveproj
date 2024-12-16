import React from 'react'
import { useNavigate } from 'react-router-dom' 

const Reset = () => {
    
    const navigate = useNavigate();

    const goLogin = () => {
        navigate('/');
    }
    
    return (
        <div>
            <button type="button" onClick={goLogin}>Back to login</button>       
        </div>
    )
}

export default Reset
