import React, { useState } from 'react';

import Navbar from "./Navbar";
import Cookies from 'js-cookie';

function Registration() {

    const [registered, setRegistered] = useState(false);
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

        console.log(username);
        user.username = username;
        user.name = name;
        Cookies.set('myuser',JSON.stringify(user), {expires: 2});
        setRegistered(true);

    };

    if (!registered){
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

    else {

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
