/** @format */

import { Link } from "react-router-dom";

function Empty() {
  return (
    <div>
      <div className="mx-auto text-2xl text-indigo-950 font-medium">
        Your cart 🪹 is empty Go to the shopping page🛒
        <Link to="/product" className="text-indigo-500 underline">
          Go to Cart
        </Link>
      </div>
    </div>
  );
}

export default Empty;
