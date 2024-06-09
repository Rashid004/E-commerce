/** @format */

function ShimmarFeature() {
  const arrayData = new Array(4).fill("");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
      {arrayData.map((el, i) => (
        <div
          className="bg-gray-100 px-4 pt-4 pb-4 sm:px-5 sm:py-5 md:px-6 md:py-5 lg:px-7 lg:py-6 rounded-lg h-auto"
          key={i}
        >
          <div className="w-full h-[250px]  block bg-[#ccc] rounded-md"></div>

          <div className="flex items-center justify-between mt-4 mx-1">
            <h2 className="font-semibold text-lg block h-8 bg-[#ccc] w-1/2 rounded-md"></h2>
            <p className="font-semibold text-lg block h-6 bg-[#ccc] w-1/3 rounded-md"></p>
          </div>

          <p className="text-sm text-gray-500 pt-2 ml-1 block h-12 bg-[#ccc] w-1/2 rounded-md mt-2"></p>

          <div className="flex flex-col  sm:justify-center lg:justify-between items-center sm:mt-2 gap-2 mt-4">
            <button className=" px-4 py-2 w-full bg-[#ccc] font-medium rounded-md h-8"></button>
            <button className=" px-4 py-2 w-full  bg-[#ccc] font-medium rounded-md h-8  "></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShimmarFeature;
