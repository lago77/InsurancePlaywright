import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Registration from './Registration';
import Policie from './Policies';

import Cookies from 'js-cookie';

function Navbar() {

    const userLogged = {
        username: "oabdi",
        name: "omar",
        policies:[],
        loggedin: false


    }
    const [login, setLogin] = useState(false);

    const userCookie = Cookies.get("myuser") || null;
    console.log(userCookie);
    var myUser = {...userLogged};
    useEffect(() => {

        if (userCookie) {
            try {
                console.log("in the try");
                // Try to parse the cookie only if it's not empty
               const  parsed= JSON.parse(userCookie);
               myUser = {...parsed};
               if (myUser.loggedin) {
                setLogin(true);
                
               }
               else {
                setLogin(false);
               }
            
               userLogged.loggedin = myUser.loggedin;
          
            } catch (error) {
                console.error("Error parsing user cookie:", error);
            }
        }

    },[]);

   // const myUser = JSON.parse(userCookie);

    console.log("my logged in user ");
    console.log("line 39");
    console.log(userLogged.loggedin);

    function handleLogout() {
        // Your logout logic here
        const userCookie = Cookies.get("myuser") || '';
        console.log(userCookie);
        const myUser = JSON.parse(userCookie);
 
         console.log(myUser['name']);

       
         myUser.name = "omar2";
         myUser.loggedin = false;
         Cookies.remove("myuser");
         userLogged.loggedin = myUser.loggedin;

         setLogin(false);
      }
      console.log(" my logged in");
      

      console.log("my logged in user ");
      console.log("line 65");
      console.log(login);

    if (login) {
        console.log("am i logged in");
        console.log("************************");
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
        console.log("am i logged in2");
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
  