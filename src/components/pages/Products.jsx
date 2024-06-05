/** @format */

import { useEffect, useState } from "react";
import Footer from "./Footer";
import PageNav from "./PageNav";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import axios from "axios";

function Products({ handleAddToCart }) {
  const [allCategories, setAllCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectProduct, setSelectProduct] = useState(null);

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
  }, []);

  // Get Products From Api

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (selectProduct) {
          const res = await axios.get(
            `https://dummyjson.com/products/category/${selectProduct}`
          );
          console.log("Products response:", res.data.products);
          setProducts(res.data.products);
        } else {
          const res = await axios.get(
            "https://dummyjson.com/products/category/sports-accessories"
          );
          console.log("Products response:", res.data.products);
          setProducts(res.data.products);
        }
      } catch (err) {
        setError("Failed to fetch products.");
      }
    };
    getProducts();
  }, [selectProduct]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleFilterProduct = (categorySlug) => {
    console.log("Selected category:", categorySlug);
    setSelectProduct(categorySlug);
    console.log(products);
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
        <div className="mt-24 mb-6 flex items-center justify-evenly">
          <div className="border border-gray-200 flex items-center">
            <input
              className="px-4 py-2 border-none outline-none"
              type="search"
              placeholder="Search"
            />

            <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-white font-medium">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-3 mb-20">
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
              <div key={index} className="border rounded-md">
                <button
                  className="bg-indigo-600 transition-all text-white px-3 py-2 hover:bg-transparent hover:text-black"
                  onClick={() => handleFilterProduct(allCatogrie.slug)}
                >
                  {allCatogrie.name}
                </button>
              </div>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 px-4 pt-4 pb-4 sm:px-5 sm:py-5 md:px-6 md:py-5 lg:px-7 lg:py-6 rounded-lg h-auto"
            >
              <img
                className="max-w-full max-h-[250px] object-contain object-center block hover:scale-110 transition-transform duration-300"
                src={item.thumbnail}
                alt="Product"
              />
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
                <button className="bg-indigo-600 border border-blue-200 text-white px-4 py-2 w-full  hover:bg-transparent hover:text-black transition-colors duration-300 font-medium rounded-md">
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
