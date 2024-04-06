import React from 'react'
import { useState } from "react";
// import { Axios } from 'axios';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


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
        <form>
            <div>
                <p>Login in to your account</p>
            </div>

            <div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>

            <div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>

            <div >
                <button type="button" className="btn btn-primary btn-lg" onClick={logInUser1} >Login as I want food</button>
                <button type="button" className="btn btn-primary btn-lg" onClick={logInUser2} >Login as I have food</button>
                <p>Don't have an account? <a href="/register" className="link-danger">Register</a></p>
            </div>
        </form>
    )
}

export default LoginPage
