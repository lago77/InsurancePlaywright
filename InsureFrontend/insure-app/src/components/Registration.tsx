import React, { useState } from 'react';

import Navbar from "./Navbar";
import Cookies from 'js-cookie';

function Registration() {

    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState(true);
    const user = {
        username: "",
        name: "",
        policies:[],
        loggedin: false


    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("registering");
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string ;
        const name = formData.get("name") as string;
        const password = formData.get("password") as string;
        console.log("made it to here ------------------");
        console.log(username);
        console.log("line 29");
        if (!username) {
            console.log("line 31");
            setRegistered(false);
            setError(false);
        }

        else {
            console.log("my user///////////////");
            console.log(username);

            console.log(username);
            user.username = username;
            user.name = name;
            Cookies.set('myuser',JSON.stringify(user), {expires: 2});
            setRegistered(true);
    
        }

    };

    if (!registered && error){
    return (
        <div >

            <div>
                <Navbar />
            </div>

            <div className="registration">
                <h1 className="Register title">Register for your Intact account</h1>
                <form className="form" onSubmit = {handleSubmit}>
               
                    <div className="formg">

                        <input name="email" type="text" placeholder="email" />

                    </div>
                    <div className="formg">
                        <input name="name" type="text" placeholder="name" />

                    </div>

                    <div className="formg">
                        <input name="username" type="text" placeholder="Username" />

                    </div>

                    <div className="formg">
                        <input name="password" type="password" placeholder="Password" />

                    </div>

                    <div className="formg">
                        <button type="submit" className="registerButton">Register</button>

                    </div>


                </form>
            </div>

        </div>
    );
    }

    else if (!registered && !error ){

        return (
            <div >
    
                <div>
                    <Navbar />
                </div>
    
                <div className="registration">
                    <h1 className="Register title">Register for your Intact account</h1>
                    <form className="form" onSubmit = {handleSubmit}>
                    <h5>Unsuccessful registration</h5>
                        <div className="formg">
    
                            <input name="email" type="text" placeholder="email" />
    
                        </div>
                        <div className="formg">
                            <input name="name" type="text" placeholder="name" />
    
                        </div>
    
                        <div className="formg">
                            <input name="username" type="text" placeholder="Username" />
    
                        </div>
    
                        <div className="formg">
                            <input name="password" type="password" placeholder="Password" />
    
                        </div>
    
                        <div className="formg">
                            <button type="submit" className="registerButton">Register</button>
    
                        </div>
    
    
                    </form>
                </div>
    
            </div>
        );
    }

    else {
        console.log("line 139 ---------------------------------");
        console.log(registered);
        console.log(error);
        return (
            <div >
    
                <div>
                    <Navbar />
                </div>
    
                <div className="registration">
                    <h1 className="Register title">Register for your Intact account</h1>
                    <form className="form" onSubmit = {handleSubmit}>
                    <h5>Successful registration</h5>
                        <div className="formg">
    
                            <input name="email" type="text" placeholder="email" />
    
                        </div>
                        <div className="formg">
                            <input name="name" type="text" placeholder="name" />
    
                        </div>
    
                        <div className="formg">
                            <input name="username" type="text" placeholder="Username" />
    
                        </div>
    
                        <div className="formg">
                            <input name="password" type="password" placeholder="Password" />
    
                        </div>
    
                        <div className="formg">
                            <button type="submit" className="registerButton">Register</button>
    
                        </div>
    
    
                    </form>
                </div>
    
            </div>
        );
    }
}

export default Registration;
