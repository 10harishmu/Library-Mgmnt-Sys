import "../styles/adminLogin.css";
import {Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = (props) => {
    let [email, setEmail] = useState('')  
    let [password, setPassword] = useState('')
    let navigate = useNavigate()
    
    let handleSubmit = ()=>{
        if((email===props.data && password === "12345")){
            navigate("/admin-portal")
        }else{
            alert("Invalid UserName or Password")
        }
    }
  return (
    <section className="adminLogin">
      <div className="adminContainer">
        <h1>Welcome to Admin Page</h1> 
        <div className="form1">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor=""> Admin EMail</label> <br />
          <input type="email" placeholder="Enter Admin EMail" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
          <label htmlFor="">Admin Password</label> <br />
          <input type="password" placeholder="Enter Admin Password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
          <button type="submit" className="btn1">Login</button>
          <button className="btn2"><Link to="/"> Home Page</Link></button>
        </form>
        </div>
      </div>
    </section>
  );
};
export default AdminLogin;
