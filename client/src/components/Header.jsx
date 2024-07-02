import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="bg-white dark:bg-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <h2 className="text-3xl font-bold">
              <a href="/" className="text-purple-500">
                Ishu Raj
              </a>
            </h2>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <NavLink to="/" className="text-blue-500 hover:text-gray-900">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-blue-500  hover:text-gray-900"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  className=" text-blue-500  hover:text-gray-900"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className=" text-blue-500  hover:text-gray-900"
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className=" text-blue-500  hover:text-gray-900"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
