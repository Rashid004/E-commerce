/** @format */

import { Link } from "react-router-dom";

function Empty() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl text-indigo-900 font-semibold mb-4">
          Your cart is empty
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Go back to the shopping page and add some items to your cart!
        </p>
        <Link
          to="/product"
          className="inline-block px-6 py-3 text-lg md:text-xl bg-indigo-500 text-white rounded-md transition duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Go to Cart
        </Link>
      </div>
    </div>
  );
}

export default Empty;
