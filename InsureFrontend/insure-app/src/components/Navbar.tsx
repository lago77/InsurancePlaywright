import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Registration from './Registration';
import Policie from './Policies';

function Navbar() {
    const num = true;
    if (num ) {
        return (
      
            <div className="navbarLoggedIn">
            <nav >
            <ul>
                
                <li>
                   <Link to ="/policies" >Policies</Link>
                </li>
     
                <li>
                <Link to ="/dashboard" >Dashboard</Link>
                </li>

                <li>
                   <Link to ="/" >Logout</Link>
                </li>      
    
  
                </ul> 

   
    
            </nav>
        </div>
          );
        
    }
    else {
        return (
      
            <div className="navbar">
                <nav >
                <ul>
                    
                    <li>
                       <Link to ="/registration" >Registration</Link>
                    </li>
                    <li>
                    <Link to ="/login" >Login</Link>
                    </li>
      
                    <li>
                    <Link to ="/dashboard" >Dashboard</Link>
                    </li>
      
                    </ul>        
        
        
                </nav>
            </div>
      
          );
    }

  }
  
  export default Navbar;
  