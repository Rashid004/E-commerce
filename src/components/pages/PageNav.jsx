/** @format */

import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";

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
      className={` w-full py-4 z-10 transition-all duration-300 bg-gray-50 ${
        isSticky ? "fixed top-0  shadow-sm" : "relative"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/Logo.png" alt="Logo" className="h-6 mr-4" />
        </div>
        <ul className="hidden md:flex space-x-8 flex-1 justify-center text-lg sm:text-[20px] font-semibold">
          <li>
            <NavLink to="/" className="text-black hover:text-indigo-900  ">
              Home
              {isLinkActive("/") && (
                <div className="font-bold w-full h-[3px] mt-1 bg-gray-900"></div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-black hover:text-indigo-900">
              About
              {isLinkActive("/about") && (
                <div className="font-bold w-full h-[3px] mt-1 bg-gray-900"></div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="text-black hover:text-indigo-900">
              Products
              {isLinkActive("/product") && (
                <div className="font-bold w-full h-[3px] mt-1 bg-gray-900"></div>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-black hover:text-indigo-900">
              Contact
              {isLinkActive("/contact") && (
                <div className="font-bold w-full h-[3px] mt-1 bg-gray-900"></div>
              )}
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex items-center space-x-5 text-lg ">
          <NavLink to="/login ">
            <div className="flex items-center justify-center border bg-gray-200 px-2 py-1 rounded-full">
              <h3 className="text-xl font-semibold">Login</h3>
              <CiLogin
                size="1.1em"
                className="hover:text-indigo-900 cursor-pointer"
              />
            </div>
          </NavLink>
          <NavLink to="/cart">
            <AiOutlineShopping
              className="hover:text-indigo-900 cursor-pointer"
              size="2.1em"
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
          <ul className="space-y-2 px-4 pb-4 text-center font-medium">
            <li>
              <NavLink
                to="/"
                className="text-black hover:text-indigo-900 block text-xl pt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
                {isLinkActive("/") && (
                  <div className="mx-auto font-bold w-7 h-[3px] mt-1 bg-gray-900"></div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-black hover:text-indigo-900 block text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                About
                {isLinkActive("/about") && (
                  <div className="mx-auto font-bold w-7 h-[3px] mt-1 bg-gray-900"></div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="text-black hover:text-indigo-900 block text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
                {isLinkActive("/product") && (
                  <div className="mx-auto font-bold w-7 h-[3px] mt-1 bg-gray-900"></div>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-black hover:text-indigo-900 block text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
                {isLinkActive("/contact") && (
                  <div className="mx-auto font-bold w-7 h-[3px] mt-1 bg-gray-900"></div>
                )}
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center space-x-4 text-lg py-4 font-semibold">
            <NavLink to="/login ">
              <div className="flex items-center justify-center border bg-gray-200 px-1 py-1 rounded-full">
                <h3 className="text-sm font-semibold">Login</h3>
                <CiLogin
                  size="1em"
                  className="hover:text-indigo-900 cursor-pointer"
                />
              </div>
            </NavLink>
            <AiOutlineShopping
              className="hover:text-indigo-900 cursor-pointer "
              size="1.6em"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default pageNav;
