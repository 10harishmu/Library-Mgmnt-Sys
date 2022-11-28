import "../styles/userLogin.css";
import { Link, useNavigate} from "react-router-dom";
import {useState} from "react";

const UserLogin = () => {
  let [email,setEmail]=useState('')
  let [password,setPassword] = useState('')
  let navigate = useNavigate()

  let handleSubmit = ()=>{
    if((email==="user@gmail.com" && password==="12345")){
      navigate("/user-portal")
    }else{
      alert("Invalid UserName or Password")
    }
 }
  
  return (
    <section className="userLogin">
      <div className="userContainer">
        <h1>Welcome to User Page </h1>
        <div className="form2">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor=""> User EMail</label> <br />
            <input type="text" placeholder="Enter User EMail"  value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
            <label htmlFor=""> User Password</label> <br />
            <input type="password" placeholder="Enter User Password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
            <button type="submit" className="btn1"> Login</button>
            <button className="btn2">
              <Link to="/"> Home Page</Link>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
