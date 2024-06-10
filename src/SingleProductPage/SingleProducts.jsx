/** @format */

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import PageNav from "../components/pages/PageNav";
import Footer from "../components/pages/Footer";
import { CartContext } from "../Context/CartContext";
import toast from "react-hot-toast";
import { HiArrowLongLeft } from "react-icons/hi2";

function SingleProducts() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});

  const { handleAddToCart } = useContext(CartContext);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/${id}`);
        setSingleProduct(res.data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    getSingleProduct();
  }, [id]);

  return (
    <div className="bg-gray-50">
      <PageNav />
      <div className="container px-5 py-24 mx-auto ">
        <Link to="/product" className="flex items-center gap-1">
          <HiArrowLongLeft />

          <span className="underline text-blue-900 font-medium text-xl ">
            Back to shopping
          </span>
        </Link>
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-gray-200 shadow-sm rounded-md px-4 pb-4">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-full object-cover object-center rounded "
            src={singleProduct.thumbnail}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {singleProduct.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {singleProduct.title}
            </h1>
            <span className="text-gray-600 font-medium text-xl">
              {singleProduct.category}
            </span>
            <div className="flex mb-4">
              <span className="flex items-center ">
                <IoIosStar color="blue" />
                <IoIosStar color="blue" />
                <IoIosStar color="blue" />
                <IoIosStar color="blue" />
                <IoIosStarHalf color="blue" />
                <span className="text-gray-600 ml-3">
                  {singleProduct.rating} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{singleProduct.description}</p>

            <p className="text-xl font-semibold mt-2">
              Warranty:{" "}
              <span className="ml-2 text-sm font-medium text-gray-700">
                {singleProduct.warrantyInformation}
              </span>
            </p>

            <h4 className="text-xl font-semibold mt-2">
              Shipping:
              <span className="ml-2 text-sm font-medium text-gray-700">
                {singleProduct.shippingInformation}
              </span>
            </h4>

            <h4 className="text-xl font-semibold mt-2">
              Available Stocks:{" "}
              <span className="ml-2 text-sm font-medium text-gray-700">
                {singleProduct.stock}
              </span>
            </h4>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex items-center justify-around">
              <span className="title-font font-medium text-2xl text-gray-900">
                Price: ${singleProduct.price}
              </span>
              <Link to="/cart">
                <button
                  onClick={() => handleAddToCart(singleProduct)}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add to cart
                </button>
              </Link>
              <button className="rounded-full w-10 h-10 bg-gray-700 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <BsHeartFill />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProducts;
