import { useContext, useState } from "react";
import "./Navbar.scss";
import logo from "../../Images/logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Nav = () => {
  const { user } = useContext(AuthContext);
  const data = user?.user;
  const [nav, setNav] = useState(false);
  const [annim, setAnnim] = useState("open");

  const [changeColor, setChangeColor] = useState(false);

  function changeNavBgColor() {
    if (window.scrollY >= 70) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }
  window.addEventListener("scroll", changeNavBgColor);

  return (
    <div className={changeColor ? "nav addedColor" : "nav"}>
      <div className="navLeft">
        <Link to="/login " className="link">
          <img src={logo} alt="Tech Innvation Challenge" />
        </Link>
      </div>
      <div className="navCenter">
        <ul className="CenterLinks">
          <li className="centerLinkItems">
            <Link to="/" className="link">
              home
            </Link>
          </li>
          <li className="centerLinkItems">
            <span>About</span>
            <ul className={changeColor ? "aboutDrop changeNow" : "aboutDrop"}>
              <li>
                <Link to="about" className="link">
                  Us
                </Link>
              </li>
              <li>
                <Link to="/pastevents" className="link">
                  Past Event
                </Link>
              </li>
              <li>
                <Link to="/faq" className="link">
                  FAQ
                </Link>
              </li>
            </ul>
          </li>
          <li className="centerLinkItems">
            <Link to="/curriculum" className="link">
              curriculum
            </Link>
          </li>
          <li className="centerLinkItems">
            <Link to="/blog" className="link">
              blog
            </Link>
          </li>
          <li className="centerLinkItems">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          {data ? (
            <Link to="/admin">
              <img src={data.pic} alt="userprofle" className="userProfile" />
            </Link>
          ) : (
            <button className="applyBtn">Apply Now</button>
          )}
        </ul>
      </div>
      <div className="menu">
        <div
          className="hamburger"
          onClick={() =>
            setNav(!nav) || setAnnim(annim === "close" ? "open" : "close")
          }
        >
          <span className={annim}></span>
          <span className={annim}></span>
          <span className={annim}></span>
        </div>
        <div
          className={changeColor ? "menuRoutes addedColor" : "menuRoutes"}
          style={{ left: nav ? "0px" : "-60vw" }}
        >
          <ul onClick={() => setNav(false)}>
            <li className="centerLinkItems__mobile">
              <Link to="/" className="link">
                home
              </Link>
            </li>
            {[
              "about",
              "past event",
              "curriculum",
              "blog",
              "FAQ",
              "contact",
            ].map((item, index) => (
              <li className="centerLinkItems__mobile" key={index}>
                <Link to={`/${item}`} className="link">
                  {item}
                </Link>
              </li>
            ))}
            <button className="applyBtn">Apply Now</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// films to be downloaded
// 12 strong, southpaw

// onClick={() => setNav(false)}
