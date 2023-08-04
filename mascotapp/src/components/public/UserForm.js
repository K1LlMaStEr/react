import React, { useEffect } from 'react'
import {useUserForm} from "./../../hooks/custom.hook"
import { useState } from "react"

const UserForm = () => {
 const {form, setForm, handleChanges}= useUserForm();
 const [areEquals, setAreEquals]= useState(true);

 const[passwordConfirmation, setPasswordConfirmation]=useState(true);

 const handlePasswordConfirmation=(e)=>{
   setPasswordConfirmation(e.target.value);

 }
 useEffect(()=>{
  const{password}= form;
  setAreEquals(password==passwordConfirmation);
  },[passwordConfirmation])


 const handleSubmit= (e)=>{
  e.preventDefault()
  

  console.log(form);



 }
 
 

  return (
    <div>
      <form>
  
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input htmlFor="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChanges} />
    <small id="emailHelp" className="form-text text-muted">ingrese su email</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input  name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChanges} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Repetir Password</label>
    <input   type="password1" className="form-control" id="exampleInputPassword2" placeholder="Repetir Password" onChange={handlePasswordConfirmation}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )
}



export default UserForm
