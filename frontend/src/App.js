import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
// import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'
import Home from './components/Home';
import Vishnu from './components/Vishnu';
function App() {
  const router  = createBrowserRouter([
    {
      path: "/",
      element:<LoginPage/>
    },
    {
      path: "/login",
      element:<LoginPage/>
    },
    {
      path: "/register",
      element:<RegisterPage/>
    },
    {
      path: "/home",
      element:<Home/>
    },
    {
      path: "/vishnu",
      element:<Vishnu/>
    }
  ]);
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
