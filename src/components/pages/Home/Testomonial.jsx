/** @format */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Testomonial() {
  return (
    <div className="py-4 sm:pb-32">
      <h2 className="text-center text-[32px] font-medium sm:font-semibold md:font-bold  sm:text-[38px] md:text-[44px] mb-4">
        Customers Testimonial
        <div className="mx-auto w-12 h-1 bg-red-600 rounded-sm mt-2 "></div>
      </h2>
      <div className="max-w-6xl mx-auto px-6  flex justify-center items-center">
        {/* <div className="flex items-center  gap-2 text-white mt-4 md:mt-2 justify-between">
          <button className="bg-red-500 p-4 rounded-full">
            <FaArrowLeft />
          </button>
        </div> */}
        <div className="mt-6 ">
          <div className="flex items-center justify-center flex-col">
            <img
              src="/images/user1.jpg"
              alt="Customer"
              className="w-36 h-36  rounded-full shadow-lg "
            />
            <h3 className="font-bold sm:font-semibold text-sm sm:text-lg md:text-xl my-2">
              Anna de armas
            </h3>
            <span className="text-gray-500 font-bold">Customer</span>
            <p className="text-center leading-tight text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              id quaerat, minima incidunt harum illum iusto sed, beatae et
              reiciendis dolores quibusdam soluta atque ea consequuntur quas.
              Magni, quaerat labore!
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 justify-center text-white mt-4 md:mt-2 ">
        {/* <button className="bg-red-500 p-4 rounded-full">
            <FaArrowRight />
          </button> */}
        <button className="bg-red-500 p-4 rounded-full">
          <FaArrowLeft />
        </button>
        <button className="bg-red-500 p-4 rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Testomonial;
