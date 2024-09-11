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
        const floodInsuranceSelected = formData.get("FloodInsurance") == "on";
        const tornadoInsuranceSelected = formData.get("TornadoInsurance") == "on";

       // Cookies.set('myuser',JSON.stringify(user), {expires: 2});
       const userCookie = Cookies.get("myuser") || '';
       const myUser = JSON.parse(userCookie);
       myUser.policies = [];
       
       if (fireInsuranceSelected) {

        myUser.policies.push("fire insurance");
       }

       if (floodInsuranceSelected) {

        myUser.policies.push("flood insurance");
       }

       if (tornadoInsuranceSelected) {
        myUser.policies.push("tornado insurance");

           
       }
    
        console.log("here");

        console.log(userCookie);
       


        
            Cookies.set('myuser',JSON.stringify(myUser), {expires: 2});

          
        navigate("/dashboard");
     
    
      

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
                <input name="FloodInsurance" type="checkbox" />

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
