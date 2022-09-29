import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSideBar, openSubmenuBar, closeSubmenuBar } = useGlobalContext();
  const submenu = (e) => {
    const page = e.target.textContent; //To get the text inside the buttons
    const tempBtn = e.target.getBoundingClientRect(); //To get the coordinates of the buttons
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenuBar(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenuBar()
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={submenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={submenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={submenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
