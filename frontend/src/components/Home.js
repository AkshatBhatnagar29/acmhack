import React from 'react'
import Floating from './Floating'
import Mapbox from './Map'
import "./Home.css"
function Home() {
  return (
    <>
    
    <div>
      <Floating/>
    </div>
    <div className='bgdWant'>
      <Mapbox/>
    </div>
    </>
  )
}

export default Home
