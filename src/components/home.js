import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="sec2">
        <h1>Welcome To Library</h1>
        <div className="admin">
          <img
            src="https://cdn.icon-icons.com/icons2/876/PNG/96/masculine-avatar-user-with-suit_icon-icons.com_68296.png"
            alt=""
          />
          <Link to="/admin-login">Admin Login</Link>
        </div>
        <div className="user">
          <img
            src="https://cdn.icon-icons.com/icons2/632/PNG/96/users_icon-icons.com_57999.png"
            alt=""
          />
          <Link to="/user-login">Users Login</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
