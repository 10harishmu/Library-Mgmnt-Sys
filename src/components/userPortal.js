

import NavBar from "./navBar.js";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./adminHome";
import BooksList from "./booksList";
import UsersList from "./usersList";


const UserPortal = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  let email = "user@gmail.com";
    return (                                                                                                                                                                                                            
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/books-list" element={<BooksList />} />
          {/* <Route path="/users-list" element={<UsersList />} /> */}
        </Routes>
      </div>
    );
  };
  
  export default UserPortal;
  





