import { Link } from "react-router-dom";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <section className="categ">
      <div className="navbar">
        <img
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?b=1&s=170x170&k=20&c=etX0kpw1WQzw4bDY0xZ-rYg1PfzDaSJ3vrykAuh5tNs="
          alt=""
        />
        <h5>User <br />user@gmail.com</h5> 
      </div>
      <div className="catry">
      <Link to="/user-portal/">Home</Link>
     <Link to="/user-portal/books-list">Books List</Link>
     {/* <Link to="/user-portal/users-list">Users List</Link> */}
     <button className="bttn" >
              <Link to="/">LogOut</Link>
            </button>
       </div>
    </section>
  );
};

export default NavBar;
