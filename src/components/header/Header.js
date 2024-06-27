import React from "react";
import { Link } from "react-router-dom";
import metaviz_logo from "../assets/Logo-Metaviz-Pro.png"; // Replace this with the correct path to your image

const Header = () => {
  return (
<header className=" w-full border ">
  <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
      <Link to="/" className="flex items-center">
        <img src={metaviz_logo} className=" h-16 mr-3 sm:h-16" alt="Landwind Logo" />
      </Link>
      <div
        className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <Link
              to="#"
              className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Marketplace
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>


  );
};

export default Header;
