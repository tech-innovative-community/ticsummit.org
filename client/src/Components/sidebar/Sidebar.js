import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./sidebar.scss";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const data = user.user;
  const [active, setActive] = useState(1);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
    window.location.href = "/";
  };

  return (
    <div className="Sidebar">
      <ul className="Sidebar__ul">
        <li
          onClick={() => setActive(1)}
          className={active === 1 ? "activeLink on" : "activeLink"}
        >
          <Link to="/admin">
            <span>Dashboard</span>
          </Link>
        </li>
        <li
          onClick={() => setActive(2)}
          className={active === 2 ? "activeLink on" : "activeLink"}
        >
          <Link to="/admin/users">
            <span>Users</span>
          </Link>
        </li>
        <li
          onClick={() => setActive(3)}
          className={active === 3 ? "activeLink on" : "activeLink"}
        >
          <Link to="/admin/posts">
            <span>posts</span>
          </Link>
        </li>
      </ul>
      <div className="sidebar_down">
        <div className="themes">
          <div className="theme lighttheme"></div>
          <div className="theme darktheme"></div>
        </div>
        <div className="user">
          <img src={data.pic} alt="" />
          <span onClick={handleLogOut}>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
