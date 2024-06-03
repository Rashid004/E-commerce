/** @format */

import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";

function pageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = window.innerHeight * 0.8;
      setIsSticky(scrollPosition >= triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={` w-full py-4 z-10 transition-all duration-300 bg-[#e9fcfdf5] ${
        isSticky ? "fixed top-0  shadow-sm" : "relative"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/Logo.png" alt="Logo" className="h-6 mr-4" />
        </div>
        <ul className="hidden md:flex space-x-8 flex-1 justify-center text-lg sm:text-[20px] font-semibold">
          <li>
            <NavLink to="/" className="text-red-700 hover:text-red-900  ">
              Home
              {isLinkActive("/") && (
                <div className="font-bold w-full h-[3px] mt-1 bg-red-600"></div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-red-700 hover:text-red-900">
              About
              {isLinkActive("/about") && (
                <div className="font-bold w-full h-[3px] mt-1 bg-red-600"></div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="text-red-700 hover:text-red-900">
              Products
              {isLinkActive("/product") && (
                <div className="font-bold w-full h-[3px] mt-1 bg-red-600"></div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-red-700 hover:text-red-900">
              Contact
              {isLinkActive("/contact") && (
                <div className="font-bold w-full h-[3px] mt-1 bg-red-600"></div>
              )}
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex items-center space-x-4 text-lg">
          <FiUser size="2em" className="hover:text-red-900 cursor-pointer" />
          <NavLink to="/cart">
            <AiOutlineShopping
              className="hover:text-red-900 cursor-pointer"
              size="2em"
            />
          </NavLink>
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
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-2 px-4 pb-4">
            <li>
              <NavLink
                to="/"
                className="text-red-700 hover:text-red-900 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-red-700 hover:text-red-900 block"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="text-red-700 hover:text-red-900 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-red-700 hover:text-red-900 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center space-x-4 text-lg py-4">
            <FiUser className="hover:text-red-900 cursor-pointer" />
            <AiOutlineShopping className="hover:text-red-900 cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default pageNav;
