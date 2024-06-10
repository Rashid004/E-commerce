/** @format */

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/FirebaseAuth";
import toast from "react-hot-toast";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();
  const { addToCart, userName } = useContext(CartContext);

  const navRefs = useRef([]);
  navRefs.current = [];

  const addToRefs = (el) => {
    if (el && !navRefs.current.includes(el)) {
      navRefs.current.push(el);
    }
  };

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

  const logOut = () => {
    signOut(auth);
    toast.success("Successfully signed out");
    navigate("/signup");
  };

  useEffect(() => {
    navRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 2, delay: index * 0.2 }
      );
    });
  }, []);

  return (
    <nav
      className={`w-full py-4 z-10 transition-all duration-300 bg-gray-50 ${
        isSticky ? "fixed top-0 shadow-sm" : "relative"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center ">
          <Link to="/">
            <img
              ref={addToRefs}
              src="/images/Logo.png"
              alt="Logo"
              className="h-6 mr-4"
            />
          </Link>
        </div>
        <ul
          className={`hidden md:flex space-x-8 flex-1 justify-center text-xl sm:text-lg font-semibold ${
            isMenuOpen ? "hidden" : "block"
          }`}
        >
          {["/home", "/about", "/product", "/contact"].map((path) => (
            <li key={path}>
              <NavLink to={path} className="text-black hover:text-indigo-900">
                <span ref={addToRefs}>
                  {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  {isLinkActive(path) && (
                    <div className="font-bold w-full h-[3px] mt-1 bg-gray-900"></div>
                  )}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-5 text-lg">
          <NavLink to="/login">
            <div
              ref={addToRefs}
              className="flex items-center justify-center border bg-gray-200 px-2 py-1 rounded-lg md:ml-4"
            >
              <h3 className="text-sm md:text-xl lg:text-lg font-semibold">
                {userName ? (
                  <button onClick={() => logOut()}>SignOut</button>
                ) : (
                  <button onClick={() => navigate("/login")}>Login</button>
                )}
              </h3>
              <CiLogin
                size="1.1em"
                className="hover:text-indigo-900 cursor-pointer"
              />
              <span className="font-semibold capitalize text-xl pl-2 ">
                {userName}
              </span>
            </div>
          </NavLink>
          <NavLink to="/cart">
            <span className="bg-indigo-900 text-white font-medium rounded-full h-7 w-7 z-10 absolute text-center translate-x-6">
              {addToCart.length}
            </span>
            <AiOutlineShopping
              className="hover:text-indigo-900 cursor-pointer relative"
              size="2.5em"
            />
          </NavLink>
        </div>
        <button onClick={handleToggle} className="md:hidden flex items-center">
          {isMenuOpen ? (
            <IoClose className="w-8 h-8" />
          ) : (
            <RxHamburgerMenu className="w-8 h-8" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md transition-all ease-in-out duration-200">
          <ul className="space-y-2 px-4 pb-4 text-center font-medium">
            {["/home", "/about", "/product", "/contact"].map((path) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className="text-black hover:text-indigo-900 block text-xl pt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span ref={addToRefs}>
                    {path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                    {isLinkActive(path) && (
                      <div className="mx-auto font-bold w-7 h-[3px] mt-1 bg-gray-900"></div>
                    )}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default PageNav;
