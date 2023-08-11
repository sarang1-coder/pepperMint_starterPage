import "../assets/css/navbar.css";
import logo from "../assets/img/logo.png";
import contact_btn from "../assets/img/contact_btn.png";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="menu_list">
          <NavLink
            to="/"
            className="menu_list_Item"
            style={({ isActive }) =>
              isActive ? { color: "green" } : undefined
            }
          >
            Home
          </NavLink>
          &emsp;
          <NavLink
            to="/contact"
            className="menu_list_Item"
            style={({ isActive }) =>
              isActive ? { color: "green" } : undefined
            }
          >
            Contact
          </NavLink>
          &emsp;
          <NavLink
            to="/products"
            className="menu_list_Item"
            style={({ isActive }) =>
              isActive ? { color: "green" } : undefined
            }
          >
            Products
          </NavLink>
          &emsp;
        </div>
        <Link to="/contact">
          <button className="contact_btn">
            <img
              src={contact_btn}
              alt="contact_btn"
              className="contact_btn_img"
            />
            Contact Us
          </button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
