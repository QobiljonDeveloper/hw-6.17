import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#1E293B] p-6  mb-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="">
            <NavLink className="text-[#0EA5E9] text-2xl" to={"/"}>
              Logo
            </NavLink>
          </div>
          <nav>
            <ul className="flex gap-3 ">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `${isActive ? "text-[#0EA5E9] underline" : "text-white "}  `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    ` ${isActive ? "text-[#0EA5E9] underline" : "text-white "} `
                  }
                  to={"/users"}
                >
                  User
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-[#0EA5E9] underline" : "text-white "
                    }  `
                  }
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
