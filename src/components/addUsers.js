import "../styles/addUsers.css";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  let[firstName, setFirstname]= useState('')
  let[lastName, setLastname]= useState('')
  let[phoneNumber,setPhonenumber]= useState('')
  let[email,setEmail]= useState('')
let navigate = useNavigate()
  
  let handleSubmit = (e) =>{
    e.preventDefault()
    let data={
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    }

   fetch("http://localhost:5000/Users",{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  alert("Added to Users List")
  navigate("/admin-portal/users-list")
}
let reset=()=>{
  setFirstname('');
  setLastname('');
  setPhonenumber('');
  setEmail('');
}
  return (
    <section className="adusect">
    <div className="contain">
      <div className="sign">
        <h1>Add Users</h1>
      </div>
      <div className="alloutt"></div>
      <form action="" className="adduss" onSubmit={handleSubmit}>
        <label htmlFor="name">FirstName<br />
        <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>setFirstname(e.target.value)} /></label>  <br />
        <label htmlFor="name">LastName <br />
        <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>setLastname(e.target.value)}/> </label><br />
        <label htmlFor="text">PhoneNumber <br />
        <input type="number" placeholder="Enter Phone Number" min="0"  value={phoneNumber} onChange={(e)=>setPhonenumber(e.target.value)}/></label> <br />
        <label htmlFor="text">EmailAddress <br />
        <input type="text" placeholder="Enter Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/></label> <br />
        <div className="usrbk">
          <button className="addusr">AddUser</button>
          <button className="restt" onClick={reset}> Reset</button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default AddUsers;
