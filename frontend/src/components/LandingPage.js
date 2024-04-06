import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <h1>Welcome to this React application</h1>
      <div>
        <Link to="/login"><button>Login</button> </Link>
        <Link to="/register"><button>Register</button></Link>
      </div>
    </div>
  )
}

export default LandingPage
