import "../styles/usersList.css";
import { useState, useEffect } from "react";
import {useLocation}from "react-router-dom";

const UsersList = () => {
  let location = useLocation()
  let [users, setUsers] = useState([]);
  useEffect(() => {
    let fetchUsers = async () => {
      let response = await fetch("http://localhost:5000/Users");
      let value = await response.json();
      setUsers(value);
    };
    fetchUsers();
  }, []);
  
  let handleDelete = ((id)=>{
    fetch(`http://localhost:5000/Users/${id}`,{
      method:'DELETE',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(users)
    });
    window.location.reload("Deleted Successfully");
    alert('Deleted Successfully');
    setUsers(users.filter((x)=>x.id !== id))
  });

  return (
    <section className="urbkg">
    <div className="userslist">
     <div className="ushd"> <h1>Users List <br />No.of Users:{users.length}</h1></div>
      <div className="usrlst">
        {users.map((value) => {
          return (
            <div className="usrlist">
              <h1>FirstName:{value.firstName}</h1>
              <h2>LastName:{value.lastName}</h2>
              <h3>Phonenumber:{value.phoneNumber}</h3>
              <h4>Email:{value.email}</h4>
              <h4>Id:{value.id}</h4>
              {location.pathname =='/admin-portal/users-list' && <button onClick={()=> handleDelete(value.id)}>Delete</button>}
            </div>
          );
        })}
        ;
      </div>
    </div>
    </section>
  );
};

export default UsersList;
