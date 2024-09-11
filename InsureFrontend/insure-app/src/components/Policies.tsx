import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from "./Navbar";

import { useNavigate } from 'react-router-dom';


function Policies() {
    
    const navigate = useNavigate();
    const userLogged = {
        username: "",
        name: "",
        policies:[],
        loggedin: false


    }



    const handlePolicy = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("registering policy");
        const formData = new FormData(event.currentTarget);
        
        const fireInsuranceSelected = formData.get("FireInsurance") == "on";

       // Cookies.set('myuser',JSON.stringify(user), {expires: 2});
       const userCookie = Cookies.get("myuser");
       console.log(fireInsuranceSelected);

       // navigate("/dashboard");
    };

    
    return (
        <div>
        <div> 
            <Navbar />
            </div>
        <div className="registration">
            <h1 className="Register title">Login into your Intact account</h1>
            <form className="form" onSubmit = {handlePolicy}>

                <div className="formg">
                    <p>Flood Insurance</p>
                <input name="Floodinsurance" type="checkbox" />

                </div>

                <div className="formg">
                <p>Fire Insurance</p>
                <input name="FireInsurance" type="checkbox" />

                </div>

                <div className="formg">
                <p>Tornado Insurance</p>
                <input name="TornadoInsurance" type="checkbox" />

                </div>

                <div className="formg">
                <button type="submit" className="registerButton">Set Policy</button>

                </div>
             
              
            </form>
        </div>
        </div>
       
    );
}

export default Policies;
