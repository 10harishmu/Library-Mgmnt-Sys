import "../styles/adminPortal.css";
import SideBar from "./sideBar.js";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./adminHome";
import BooksList from "./booksList";
import UsersList from "./usersList";
import AddUsers from "./addUsers";
import AddBooks from "./addBooks";

const AdminPortal = (props) => {
 let email = props.data;
  return (
    <div>
      <SideBar data={email} />
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/books-list" element={<BooksList />} />
        <Route path="/users-list" element={<UsersList />} />
        <Route path="/add-books" element={<AddBooks />} />
        <Route path="/add-users" element={<AddUsers />} />
      </Routes>
    </div>
  );
};

export default AdminPortal;
