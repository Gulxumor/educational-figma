import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { navLink } from "../../mock.js/Navbar";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <img src={logo} alt="rymo-logo" onClick={navigate("/")} />
      </div>
      <nav>
        <ul>
          {navLink.map(
            ({ id, path, title, hidden }) =>
              //hidden false turibdi, bu holatda hidden:true bolganlar korinmaydi
              !hidden && (
                <li key={id}>
                  <NavLink
                    to={path}
                    style={({ isActive }) => ({
                      color: isActive ? "var(--orange)" : "var(--black)",
                    })}
                  >
                    {title}
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
