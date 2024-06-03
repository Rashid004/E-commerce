/** @format */

function ProductFeature() {
  const products = [
    {
      id: 1,
      name: "Shoes",
      price: 19.99,
      description: "This is the description for Product 1.",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Headphones",
      price: 24.99,
      description: "This is the description for Product 2.",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Camera",
      price: 29.99,
      description: "This is the description for Product 3.",
      imageUrl:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Lipstick",
      price: 29.99,
      description: "This is the description for Product 3.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="mx-auto mt-20 sm:mt-4 md:mt-2 pb-24 h-full max-w-6xl">
      <div className="text-center my-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium sm:font-semibold md:font-bold leading-tight space-y-6 ">
          Our Product
          <div className="mx-auto w-12 h-1 bg-red-600 rounded-sm mt-2 "></div>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-sky-50 px-4 pt-4 pb-4 sm:px-5 sm:py-5 md:px-6 md:py-5 lg:px-7 lg:py-6 rounded-md"
          >
            <img
              className="w-full hover:scale-110 transition-transform duration-300"
              src={product.imageUrl}
              alt="Product"
            />
            <div className="flex items-center justify-between mt-4 mx-2">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="font-semibold text-lg">${product.price}</p>
            </div>
            <div className="flex flex-col  sm:justify-center lg:justify-between items-center sm:mt-2 gap-2 mt-4">
              <button className="bg-red-500  border text-white px-4 py-2 w-full  hover:bg-transparent hover:text-black transition-colors duration-300 font-medium rounded-sm">
                Add to cart
              </button>
              <button className="bg-red-500 border text-white px-4 py-2 w-full  hover:bg-transparent hover:text-black transition-colors duration-300 font-medium rounded-sm">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFeature;
