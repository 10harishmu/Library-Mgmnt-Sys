import { Link } from "react-router-dom";
import "../styles/sideBar.css";

const SideBar = (props) => {
  return (
    <section className="categories">
      <div className="sidebar">
        <img
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?b=1&s=170x170&k=20&c=etX0kpw1WQzw4bDY0xZ-rYg1PfzDaSJ3vrykAuh5tNs="
          alt=""
        />
        <h5>Admin {props.data}</h5> 
      </div>
      <div className="category">
      <Link to="/admin-portal/">Home</Link>
     <Link to="/admin-portal/books-list">Books List</Link>
     <Link to="/admin-portal/users-list">Users List</Link>
     <Link to="/admin-portal/add-books">AddBooks</Link>
     <Link to="/admin-portal/add-users">AddUsers</Link>
     <button className="bttn" >
              <Link to="/">LogOut</Link>
            </button>
       </div>
    </section>
  );
};

export default SideBar;
