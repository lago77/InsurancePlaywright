import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from "./Navbar";

import { useNavigate } from 'react-router-dom';


function Login() {
    
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const userLogged = {
        username: "oabdi",
        name: "omar",
        policies:[],
        loggedin: false


    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("logging in");
        console.log(Cookies.get("myuser"));

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string ;
        const name = formData.get("name") as string;
        const password = formData.get("password") as string;

        console.log(username);
        userLogged.username = username;
        userLogged.name = name;
        
       // Cookies.set('myuser',JSON.stringify(user), {expires: 2});
     
       const userCookie = Cookies.get("myuser");
       if (userCookie) {
        console.log("here");

        console.log(userCookie);
        const myUser = JSON.parse(userCookie);

        if (myUser.username != username) {
            console.log("logging in as 66666666666666");
            console.log(username);
            setError(true);
        }
 
        else {

            console.log(myUser['name']);
            myUser.name = name;
            myUser.loggedin = true;
        
            Cookies.set('myuser',JSON.stringify(myUser), {expires: 2});
            console.log(myUser['name']);
            setError(false);
            navigate("/dashboard");
        }
       }

       else {



            setError(true);
  
      
       }

      
    };

    if (error ){

        return (
            <div>
            <div> 
                <Navbar />
                </div>
            <div className="registration">
              
                <h1 className="Register title">Login into your Intact account</h1>
                <form className="form" onSubmit = {handleLogin}>
                <h5>Invalid credentials or Non-existent user</h5>
                    <div className="formg">
                    <input name="username" type="text" placeholder="Username" />
    
                    </div>
    
                    <div className="formg">
                    <input name="password" type="password" placeholder="Password" />
    
                    </div>
    
                    <div className="formg">
                    <button type="submit" className="registerButton">Login</button>
    
                    </div>
                 
                  
                </form>
            </div>
            </div>
           
        );    
    }

    
    return (
        <div>
        <div> 
            <Navbar />
            </div>
        <div className="registration">
            <h1 className="Register title">Login into your Intact account</h1>
            <form className="form" onSubmit = {handleLogin}>

                <div className="formg">
                <input name="username" type="text" placeholder="Username" />

                </div>

                <div className="formg">
                <input name="password" type="password" placeholder="Password" />

                </div>

                <div className="formg">
                <button type="submit" className="registerButton">Login</button>

                </div>
             
              
            </form>
        </div>
        </div>
       
    );
}

export default Login;
