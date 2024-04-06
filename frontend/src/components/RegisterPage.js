import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

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
            <div >
                <p >Create Your Account</p>
            </div>
            <form>
                <div >
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" placeholder="Enter a valid email address" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>
                <div >
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" placeholder="Enter password" />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>
                  <div >
                    <div >
                      <input type="checkbox" value="" id="form2Example3" />
                      <label htmlFor="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                  </div>
                  <div >
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => registerUser()} >Sign Up</button>
                    <p >Login to your account <a href="/login" >Login</a></p>
                  </div>
            </form>
        </>
    )
}

export default RegisterPage
