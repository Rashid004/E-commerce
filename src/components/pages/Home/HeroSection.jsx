/** @format */

import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="h-[80vh] bg-sky-50 text-center md:text-left mb-3 sm:mb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center md:text-left ">
        <div className="space-y-6 mt-12 sm:mt-24 ">
          <h1 className="text-[30px] sm:text-[40px] font-semibold leading-tight md:text-[44px] lg:text-[52px] lg:font-bold">
            Sale 20% Off On Everything
          </h1>
          <p className="text-sm sm:text-base md:text-xl leading-relaxed">
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center md:justify-start ">
            <Link
              to="/product"
              className="btn bg-red-600 text-white py-3 px-6 rounded-[4px] hover:bg-red-700 w-full sm:w-auto"
            >
              Shop Now
            </Link>
            <Link
              to="#how"
              className="btn border border-red-600 text-red-600 hover:bg-gray-200 py-3 px-6 rounded-[4px] w-full sm:w-auto"
            >
              Learn more &darr;
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="/images/Hero1.jpg"
            className="w-[80%] sm:w-[75%] rounded-[2px] shadow-lg md:w-full"
            alt="Woman enjoying Shopping"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 text-white mx-2 mt-4 md:mt-2 md:justify-normal">
        <button className="bg-red-500 p-4 rounded-full">
          <FaArrowLeft />
        </button>
        <button className="bg-red-500 p-4 rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
