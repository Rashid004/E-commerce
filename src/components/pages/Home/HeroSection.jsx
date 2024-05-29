/** @format */

import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="h-[80vh] bg-sky-50 text-center md:text-left">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center md:text-left ">
        <div className="space-y-6 mt-24 ">
          <h1 className="text-[40px] font-semibold leading-tight sm:text-[44px] md:text-[52px] md:font-bold">
            Sale 20% Off On Everything
          </h1>
          <p className="text-sm leading-relaxed sm:lg md:text-xl">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <div className="flex space-x-4 items-center justify-center  md:justify-normal ">
            <Link
              to="/product"
              className="btn bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700"
            >
              Shop Now
            </Link>
            <Link
              to="#how"
              className="btn border border-orange-600 text-orange-600 py-3 px-6 rounded-lg"
            >
              Learn more &darr;
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-normal md:flex-none mt-2 md:mt-14">
          <img
            src="/images/Hero1.jpg"
            className="w-[75%] rounded-[2px] shadow-lg  md:w-full"
            alt="Woman enjoying Shopping"
          />
        </div>
      </div>
      <div className=" flex items-center justify-center gap-2 text-white mx-2 mt-4 md:mt-2 md:justify-normal">
        <button className="bg-red-500 p-4">
          <FaArrowLeft />
        </button>
        <button className="bg-black p-4">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
