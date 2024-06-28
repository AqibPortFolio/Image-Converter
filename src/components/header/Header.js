import React, { useState } from "react";
import { Link } from "react-router-dom";
import metaviz_logo from "../assets/Logo-Metaviz-Pro.png"; // Replace this with the correct path to your image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full border bg white">
      <nav className="bg-white border-gray-200 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={metaviz_logo}
              className="h-16 mr-3 sm:h-16"
              alt="Landwind Logo"
            />
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="block lg:hidden focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4   rounded lg:bg-transparent text-purple-700 lg:p-0 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="https://metaviz.pro/about-us/"
                  className="block py-2 pl-3 pr-4   rounded lg:bg-transparent hover:text-purple-700 lg:p-0  " >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="https://metaviz.pro/our-services/"
                  className="block py-2 pl-3 pr-4   rounded lg:bg-transparent hover:text-purple-700 lg:p-0 "
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="https://bd.metaviz.pro/"
                  className="block py-2 pl-3 pr-4   rounded lg:bg-transparent hover:text-purple-700 lg:p-0  "
                >
                  Brilliant Directories
                </Link>
              </li>
              <li>
                <Link
                  to="https://metaviz.pro/portfolio/"
                  className="block py-2 pl-3 pr-4   rounded lg:bg-transparent hover:text-purple-700 lg:p-0  "
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="https://metaviz.pro/pricing/"
                  className="block py-2 pl-3 pr-4   rounded lg:bg-transparent hover:text-purple-700 lg:p-0  "
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="https://metaviz.pro/contact-us/"
                  className="block py-2 pl-3 pr-4   rounded lg:bg-transparent hover:text-purple-700 lg:p-0  "
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="https://metaviz.pro/contact-us/"
                  className="block py-2 pl-3 pr-4   rounded lg:bg-transparent hover:text-purple-700 lg:p-0  "
                >
                  Get Quote
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
