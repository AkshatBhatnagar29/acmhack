import React from 'react'
import "./Floating.css"
import Logo from "./logo.png"

function Floating() {
  return (
    <div className="topnavFloat">

        <img className='logoFloat' src={Logo} alt="logo"/>
        

      <div className='scrollcontainerFloat'>
        <div className='scrolltextFloat'>Connecting Communities, Eradicating Hunger!</div>
      </div>

</div>
  )
}

export default Floating
