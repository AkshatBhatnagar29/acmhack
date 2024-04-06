import React from 'react'
import Floating from "./Floating"
import Mapbox from "./Map"
import "./Have.css"
function Vishnu() {
  return (
    <div className='containerHave'>
      <Floating/>
      <form className='foodForm'>

      </form>
      <div className="mapHave">
      <Mapbox showButton= {true} />
      </div>
    </div>
  )
}

export default Vishnu
