import React from 'react'
import { useState } from "react";
// import { Axios } from 'axios';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import "./LoginPage.css"
import Logo from './logo.png'
import "../App.css"
function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const logInUser1 = () => {
        if(email.length === 0){
          alert("Email has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                //console.log(response.data);
                navigate("/home");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
        }
    }
    const logInUser2 = () => {
        if(email.length === 0){
          alert("Email has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                //console.log(response.data);
                navigate("/vishnu");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
        }
    }
    return (
        <div className="container">
            <div className="leftSection">
            <img src={Logo} alt='error' className='logo'></img>
            </div>
            <div className="rightSection">
            <div className="rightSubSection">
            <div className='headingLogin'>
                <h1>LOGIN</h1>
            </div>

        <form className='inputs'>
            <div className="mail">

            <div className='input'>
                <label className="formLabel" htmlFor="form3Example3">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="enter" placeholder="Enter a valid email address" />
            </div>

            <div className='input'>
                <label className="formLabel" htmlFor="form3Example4">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="enter enterSec" placeholder="Enter password" />
            </div>
            </div>

            <div className='loginBottom'>
                <div className="buttons">
                <button type="button" className="btn" onClick={logInUser1} >Login as I want food</button>
                <button type="button" className="btn" onClick={logInUser2} >Login as I have food</button>
                </div>
                <p className='register'>Don't have an account? &nbsp; <a href="/register" className="link-danger">Register</a></p>
            </div>
        </form>
        </div>
            </div>
        </div>
    )
}

export default LoginPage
