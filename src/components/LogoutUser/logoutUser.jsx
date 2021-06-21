import React from 'react';

const LogoutUser = (props) => {
    
    const LogoutUser = () => {
        localStorage.removeItem("token");
        window.location.href = "/"
    }
    
    return(
        <div>
            
        </div>
    )
}

export default LogoutUser