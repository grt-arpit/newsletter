import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Authorisor = ({children}) => {
  
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user"))
      );
      console.log(currentUser);
    
      if (currentUser === null) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: " logged in ",
        });
        return <Navigate to="/Dashboard" />;
      }
    
      return children;
  
}

export default Authorisor