/** @format */

function Shimmar() {
  return (
    <div className="bg-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto rounded-md">
      <div className="px-4 pt-4 pb-4 sm:px-5 sm:py-5 md:px-6 md:py-5 lg:px-7 lg:py-6 rounded-lg">
        <div className="relative bg-gray-300 w-full h-64 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-pulse"></div>
        </div>
        <div className="flex items-center justify-between mt-4 mx-2">
          <div className="animate-pulse bg-gray-300 h-6 w-1/2"></div>
          <div className="animate-pulse bg-gray-300 h-6 w-1/4"></div>
        </div>
        <div className="flex flex-col sm:justify-center lg:justify-between items-center sm:mt-2 gap-2 mt-4 ">
          <button className="animate-pulse bg-gray-300  px-4 py-2 w-full rounded-md"></button>
          <button className="animate-pulse bg-gray-300  px-4 py-2 w-full rounded-md"></button>
        </div>
      </div>
    </div>
  );
}

export default Shimmar;
