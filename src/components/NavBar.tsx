import './NavBar.css'
import {NavLink} from "react-router-dom";
import React from 'react';

const NavBar = () => {
  return (
    <div className={"ind_container"}>
      <div className={"ind_root"}>
        <ul className={"ind_links"}>
          <li>
            <NavLink
              end
              to=""
              className="ind_link"
              style={({ isActive }) =>
                ({color: isActive ? "black" : undefined})
              }
            >/index/</NavLink>
          </li>
          <li>
            <NavLink
              to="/music"
              className="ind_link"
              style={({ isActive }) =>
                ({color: isActive ? "black" : undefined})
              }
            >/music/</NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className="ind_link"
              style={({ isActive }) =>
                ({color: isActive ? "black" : undefined})
              }
            >/blogs/</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;