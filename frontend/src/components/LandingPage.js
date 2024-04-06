import React from 'react'
import { Link } from 'react-router-dom'
//  import {logo} from './download (1)-Photoroom.png-Photoroom.png'
import './LandingPage.css'
import Logo from "./logo.png"
import {ReactTyped }from "react-typed";
function LandingPage() {
  return (
    <div className='container'>
     
        <div>
        <img className='logo' src={Logo} alt="logo"/>
        </div>
        
      {/* <div>
        <h1 className='tagLine'>Connecting Communities, Eradicating Hunger</h1>
      </div> */}
      <div className='tagLine'>
      <h1>
        {" "}
        <ReactTyped strings={["Connecting Communities, Eradicating Hunger!"]} typeSpeed={30} loop />
      </h1>
    </div>
      <div className='button'>
        <Link to="/login"><button className='btn'>Login</button> </Link>
        <Link to="/register"><button className='btn'>Register</button></Link>
      </div>
    </div>
  )
}

export default LandingPage
