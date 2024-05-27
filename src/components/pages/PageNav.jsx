/** @format */

import { NavLink } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function pageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white shadow-md ">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center ">
          <img src="/images/Logo.png" alt="Logo" className="h-6 mr-4" />
        </div>
        <ul className="hidden md:flex space-x-8 flex-1 justify-center p-5 text-[18px] font-semibold ">
          <li>
            <NavLink to="/" className="text-zinc-700 hover:text-gray-900">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-zinc-700 hover:text-gray-900 ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="text-zinc-700 hover:text-gray-900"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-zinc-700 hover:text-gray-900"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center space-x-4 text-[18px]">
          <FiUser />
          <AiOutlineShopping />
        </div>

        <button onClick={handleToggle} className="md:hidden flex items-center">
          {isMenuOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <RxHamburgerMenu className="w-6 h-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden ">
          <ul className="space-y-2 px-4 pb-2 ">
            <li>
              <NavLink
                to="/"
                className="text-zinc-700 hover:text-gray-900 block"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-zinc-700 hover:text-gray-900 block"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="text-zinc-700 hover:text-gray-900 block"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-zinc-700 hover:text-gray-900 block"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default pageNav;
