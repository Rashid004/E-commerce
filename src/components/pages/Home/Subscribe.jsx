/** @format */

function Subscribe() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="flex items-center justify-center flex-col p-6 py-20">
        <h3 className="text-[26px] font-semibold md:font-bold mb-2 md:text-[32px]">
          Subscribe To Get Discount Offers
        </h3>
        <p className="text-[14px] text-gray-500 leading-tight my-4 md:text-[18px] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </p>
        <input
          className="w-1/2 py-4 rounded-full px-4 border-none outline-none mb-6"
          type="email"
          placeholder="Enter your Email"
        />
        <button className="bg-red-600 text-white rounded-full px-20 py-3 font-semibold hover:bg-transparent hover:text-black hover:border border-black transition-all duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
