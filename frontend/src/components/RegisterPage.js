import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Logo from './logo.png'
import "./RegisterPage.css"

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            email: email,
            password: password
        })
        .then(function (response) {
             console.log(response);
             alert("registered successfully")
            navigate("/home");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        });
    };
    return (
        <>
            <div className="container">
            <div className="leftSection">
            <img src={Logo} alt='error' className='logo'></img>
            </div>
            <div className="rightSection">
            <div className="rightSubSection">
            
            <div className='heading' >
                <h1>Create Your Account</h1>
            </div>
            <form className='inputs'>
                <div className="mail">
                <div className='input'>
                    <label className="formLabel" htmlFor="form3Example3">Email address</label>
                    <input type="email" className="enter"value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" placeholder="Enter a valid email address" />
                </div>
                <div className='input' >
                    <label className="formLabel" htmlFor="form3Example4">Password</label>
                    <input type="password" className="enter enterSec" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" placeholder="Enter password" />
                  </div>
                  </div>
                  <div className="loginBottom">
                  
                    {/* <a href="#!" className="text-body">Forgot password?</a> */}
                
                  <div className='buttonsRegister'>
                    <button type="button" className="btn" onClick={() => registerUser()} >Sign Up</button>
                    <p className='register'>Already have an account &nbsp;<a href="/login" >Login</a></p>
                  </div>
                  </div>
            </form>
            </div>
            </div>
            </div>
        </>
    )
}

export default RegisterPage
