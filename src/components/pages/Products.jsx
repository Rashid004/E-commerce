/** @format */

import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import PageNav from "./PageNav";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import axios from "axios";
import { CartContext } from "../../Context/CartContext";
import { ProdcutContext } from "../../Context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const [allCategories, setAllCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const navigate = useNavigate();

  // Context
  const { handleAddToCart } = useContext(CartContext);
  const {
    products,
    setProducts,
    setSelectProduct,
    setError,
    error,
    filteredProducts,
    setFilteredProducts,
  } = useContext(ProdcutContext);

  // Get Product Catogries from APi
  useEffect(() => {
    const getProductsCatogrie = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");

        console.log("Categories response:", res);
        setAllCategories(res.data);
      } catch (err) {
        setError("Failed to fetch categories.");
      }
    };
    getProductsCatogrie();
  }, [setError]);

  if (error) {
    return (
      <div className="bg-white shadow-md rounded-md mx-auto text-xl text-red-600 font-medium">
        Error: {error}
      </div>
    );
  }

  // Filter Product in option
  const handleFilterProduct = (categorySlug) => {
    setSelectProduct(categorySlug);
    const filteredByCategory = products.filter(
      (item) => item.category === categorySlug
    );
    setFilteredProducts(filteredByCategory);
  };

  // HandleSearch filter
  const handleSearchFilter = () => {
    console.log(searchQuery);

    const searchFilter = filteredProducts.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(searchFilter);
  };

  // HandlePRice
  const handlePriceFilter = () => {
    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice);

    if (isNaN(min)) min = 0;
    if (isNaN(max)) max = Infinity;

    console.log("Filtering with min:", min, "max:", max);

    const filterPrice = filteredProducts.filter(
      (priceItem) =>
        (!min || priceItem.price >= min) && (!max || priceItem.price <= max)
    );
    console.log("Filtered products", filterPrice);
    setProducts(filterPrice);
  };

  return (
    <>
      <PageNav />
      <div className="mx-auto mt-20 sm:mt-4 md:mt-2 pb-24 h-full max-w-6xl">
        <div className="text-center my-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium sm:font-semibold md:font-bold leading-tight space-y-6 ">
            Shop With Us
            <div className="mx-auto w-12 h-1 bg-gray-800 rounded-sm mt-2 "></div>
          </h2>
        </div>
        <div className="bg-gray-200 rounded-md ">
          <div className="mt-24 mb-6 flex items-center justify-evenly pt-3">
            <div className="border border-gray-200 flex items-center">
              <input
                className="px-4 py-2 border-none outline-none"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button
                onClick={handleSearchFilter}
                className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-white font-medium"
              >
                Search
              </button>
            </div>
          </div>
          <div className=" border-gray-200 flex items-center flex-col md:flex-row justify-center gap-2 mb-3 pb-3">
            <input
              type="number"
              name="min"
              className="px-4 py-2 border border-gray-300  outline-none"
              placeholder="Min value"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
              type="number"
              name="max"
              className="px-4 py-2 border border-gray-300  outline-none"
              placeholder="Max value"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />

            <button
              onClick={handlePriceFilter}
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-white font-medium"
            >
              Filter by price
            </button>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-3 mb-20 pb-3">
            <select
              className="px-2 py-1 text-sm font-medium border border-gray-300"
              onChange={(e) => handleFilterProduct(e.target.value)}
            >
              <option>Filter by Catogery</option>

              {allCategories
                .filter(
                  (filterItem) =>
                    ![
                      "womens-watches",
                      "womens-shoes",
                      "womens-jewellery",
                      "womens-dresses",
                      "vehicle",
                      "sunglasses",
                      "motorcycle",
                      "kitchen-accessories",
                      "groceries",
                      "furniture",
                      "mobile-accessories",
                    ].includes(filterItem.slug)
                )
                .map((allCatogrie, index) => (
                  <option
                    key={index}
                    className="px-1 py-1"
                    value={allCatogrie.slug}
                  >
                    {allCatogrie.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 px-4 pt-4 pb-4 sm:px-5 sm:py-5 md:px-6 md:py-5 lg:px-7 lg:py-6 rounded-lg h-auto"
            >
              <Link
                className="overflow-hidden"
                to={`/singleProduct/${item.id}`}
              >
                <img
                  className="max-w-full max-h-[250px] object-contain object-center block hover:scale-110 transition-transform duration-300"
                  src={item.thumbnail}
                  alt="Product"
                />
              </Link>
              <div className="flex items-center justify-between mt-4 mx-2">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="font-semibold text-lg">${item.price}</p>
              </div>
              <p className="font-medium text-sm text-gray-600 ml-2 flex items-center gap-1">
                Rating:{item.rating}
                <FaStar />
                <FaRegStarHalfStroke />
              </p>

              <p className="text-sm text-gray-500 pt-2 ml-2">
                {item.description.slice(0, 110)}
              </p>

              <div className="flex flex-col  sm:justify-center lg:justify-between items-center sm:mt-2 gap-2 mt-4">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-indigo-600  border border-blue-200 text-white px-4 py-2 w-full  hover:bg-transparent hover:text-black transition-colors duration-300 font-medium rounded-md"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => navigate(`/singleProduct/${item.id}`)}
                  className="bg-indigo-600 border border-blue-200 text-white px-4 py-2 w-full  hover:bg-transparent hover:text-black transition-colors duration-300 font-medium rounded-md"
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
