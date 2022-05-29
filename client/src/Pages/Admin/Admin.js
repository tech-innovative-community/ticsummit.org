import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Admin.scss";
import { AuthContext } from "../../Context/AuthContext";

const Admin = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(1);
  const { user } = useContext(AuthContext);
  const data = user.user;
  return (
    <div className="Admin">
      <div className="menus" onClick={() => setToggle(!toggle)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {toggle && (
        <div className={toggle ? "ul" : "ul off"}>
          <button className="toggle" onClick={() => setToggle(!toggle)}>
            +
          </button>
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
            <div className="user">
              <img src={data.pic} alt="" />
              <span>{data.username}</span>
            </div>
          </div>
        </div>
      )}
      <Sidebar />
      <Container />
    </div>
  );
};

export default Admin;
