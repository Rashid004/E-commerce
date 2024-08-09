/** @format */

import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../../../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import ShimmarFeature from "../../../ShimmarEffect/ShimmarFeature";
import gsap from "gsap";

function ProductFeature() {
  const [popularProduct, setPopularProduct] = useState([]);
  const navigate = useNavigate();
  const productRefs = useRef([]);
  const { handleAddToCart } = useContext(CartContext);
  useEffect(() => {
    const getFeatureProduct = async () => {
      try {
        const res = await axios("https://dummyjson.com/carts/1");

        setPopularProduct(res.data.products);
      } catch (err) {
        toast.error(err.message);
      }
    };
    getFeatureProduct();
  }, []);

  useEffect(() => {
    productRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: ref,
            start: "top 90%",
            end: "bottom 50%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [popularProduct]);

  const addToRefs = (el) => {
    if (el && !productRefs.current.includes(el)) {
      productRefs.current.push(el);
    }
  };

  return (
    <div className="mx-auto mt-20 sm:mt-4 md:mt-2 pb-24 h-full max-w-6xl">
      <div className="text-center my-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium sm:font-semibold md:font-bold leading-tight space-y-6 ">
          Our Product
          <div className="mx-auto w-12 h-1 bg-red-600 rounded-sm mt-2 "></div>
        </h2>
      </div>
      {popularProduct && !popularProduct.length ? (
        <ShimmarFeature />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto">
          {popularProduct.map((productItem) => (
            <div
              ref={addToRefs}
              key={productItem.id}
              className=" bg-gray-200 focus:border-gray-200 focus:ring-1 px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-5 lg:px-7 lg:py-6 rounded-lg"
            >
              <Link to={`/singleProduct/${productItem.id}`}>
                <img
                  className="w-full hover:scale-105 sm:hover:scale-100 md:hover:scale-110 transition-transform duration-300"
                  src={productItem.thumbnail}
                  alt="Product"
                />
              </Link>
              <div className="flex items-center justify-between mt-4 mx-2">
                <h2 className="font-semibold text-lg">
                  {productItem.title.slice(0, 18)}
                </h2>
                <p className="font-semibold text-lg">${productItem.price}</p>
              </div>
              <div className="flex flex-col  sm:justify-center lg:justify-between items-center sm:mt-2 gap-2 mt-4">
                <button
                  onClick={() => handleAddToCart(productItem)}
                  className="bg-indigo-600 border border-blue-200 text-white px-4 py-2 w-full rounded-md  hover:bg-transparent hover:text-black transition-colors duration-300 font-medium "
                >
                  Add to cart
                </button>
                <button
                  onClick={() => navigate(`/singleProduct/${productItem.id}`)}
                  className="bg-indigo-600 border border-blue-200 text-white px-4 py-2 w-full  hover:bg-transparent hover:text-black transition-colors duration-300 font-medium rounded-md"
                >
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductFeature;
