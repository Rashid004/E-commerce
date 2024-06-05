/** @format */

function NewsLetter() {
  return (
    <div className="mx-auto max-w-6xl px-2 py-4 md:px-8 bg-gray-100 pb-20 rounded-sm h-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-2/3 lg:w-1/2 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-black sm:text-center md:text-left">
            Sign up for our weekly newsletter
          </h2>
          <p className="mt-4 text-gray-600 sm:text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
          <div className="mt-4 sm:text-center md:text-left">
            <p className="font-semibold text-gray-800">
              Trusted by over 100,000+ businesses and individuals
            </p>
          </div>

          <div className="mx-auto md:mx-0 mt-6 flex w-full max-w-md items-center flex-col space-y-4">
            <input
              className=" flex h-10 w-2/3 md:w-[80%] lg:w-full rounded-md border border-red/30 bg-transparent px-2 md:px-3 py-2 text-sm placeholder:text-gray-600 placeholder:font-medium focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-300"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className=" w-1/2 md:w-[60%] lg:w-full rounded-md bg-indigo-600 px-3  py-2 text-sm  sm:text-lg md:text-xl font-semibold text-white shadow-sm hover:bg-red/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div>

          <p className="mt-2 md:text-left">
            <span className="text-sm text-gray-600 ">
              By signing up, you agree to our terms of service and privacy
              policy.
            </span>
          </p>
        </div>
        <div className="mt-12 w-full md:w-2/3 md:mt-0 lg:w-1/2 flex items-center justify-center lg:flex-none">
          <img
            className="h-2/3 w-2/3 md:w-5/6 rounded-md object-cover"
            src="/images/Hero3.jpg"
            alt="Newsletter"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
