import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from "./Navbar";

import { useNavigate } from 'react-router-dom';


function Login() {
    
    const navigate = useNavigate();
    const userLogged = {
        username: "",
        name: "",
        policies:[],
        loggedin: false


    }

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("registering");
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string ;
        const name = formData.get("name") as string;
        const password = formData.get("password") as string;

        console.log(username);
        userLogged.username = username;
        userLogged.name = name;
       // Cookies.set('myuser',JSON.stringify(user), {expires: 2});
       const userCookie = Cookies.get("myuser");

        navigate("/dashboard");
    };

    
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
