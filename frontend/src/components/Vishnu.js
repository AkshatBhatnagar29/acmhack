import React, { useState } from 'react'
import Floating from "./Floating"
import Mapbox from "./Map"
import "./Have.css"
import axios from 'axios';
function Vishnu() {
  const [name , setName] = useState('');
  const [phoneno,setPhoneno] = useState('');
  const [food,setFood] = useState('');
  const [address,setAddress] = useState('');

const submitDetails =()=>{
  if(name.length === 0){
    alert("Name has left Blank!");
  }
  else if(phoneno.length === 0){
    alert("phoneno has left Blank!");
  }
  else if(food.length === 0){
    alert("food has left Blank!");
  }
  else if(address.length === 0){
    alert("address has left Blank!");
  }
  else{
    // alert("success")
    axios.post('http://127.0.0.1:5000/foodform', {
                name: name,
                phoneno: phoneno,
                food:food,
                address:address
            })
            .then(function (response) {
              console.log(response);
              //console.log(response.data);
              // navigate("/home");
              alert("success");
          })
          .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("error");
            }
        });
  }
}
  return (
    <div className='containerHave'>
      <Floating/>
      <form className='foodForm'>
      <div className='input'>
                <label className="formLabel" htmlFor="form3Example3">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="form3Example3" className="enter" placeholder="Enter your name" />
            </div>
            <div className='input'>
                <label className="formLabel" htmlFor="form3Example4">phone no.</label>
                <input type="tel" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} id="form3Example4" className="enter" placeholder="Enter your phone no." />
            </div>
            <div className='input'>
                <label className="formLabel" htmlFor="form3Example5">Food you have</label>
                <input type="text" value={food} onChange={(e) => setFood(e.target.value)} id="form3Example5" className="enter" placeholder="Enter Food you have" />
            </div>
            <div className='input'>
                <label className="formLabel" htmlFor="form3Example6">Enter your address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} id="form3Example6" className="enter" placeholder="Enter Food you have" />
            </div>
            <button type="button" className="btn" onClick={submitDetails} >Submit</button>
      </form>
      <div className="mapHave">
      <Mapbox showButton= {true} />
      </div>
    </div>
  )
}

export default Vishnu
