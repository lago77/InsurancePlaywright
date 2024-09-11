import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Registration from './Registration';
import Policie from './Policies';

import Cookies from 'js-cookie';

function Navbar() {

    const userCookie = Cookies.get("myuser") || null;
    console.log(userCookie);
    let myUser = {loggedin:false};
    if (userCookie) {
        try {
            // Try to parse the cookie only if it's not empty
           const  myUser = JSON.parse(userCookie);
        } catch (error) {
            console.error("Error parsing user cookie:", error);
        }
    }
   // const myUser = JSON.parse(userCookie);



    function handleLogout() {
        // Your logout logic here
        const userCookie = Cookies.get("myuser") || '';
        console.log(userCookie);
        const myUser = JSON.parse(userCookie);
 
         console.log(myUser['name']);

       
         myUser.name = "omar2";
         myUser.loggedin = false;
         Cookies.remove("myuser");
         Cookies.set('myuser',JSON.stringify(myUser), {expires: 2});
         console.log(myUser['name']);
      }


    if (myUser.loggedin) {
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
                   <Link to ="/"  onClick = {handleLogout}>Logout</Link>
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
  