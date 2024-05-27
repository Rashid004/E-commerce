/** @format */

import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div className="bg-slate-500 text-white text-sm ">
      <ul className="flex items-center justify-center gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </div>
  );
}

export default PageNav;
