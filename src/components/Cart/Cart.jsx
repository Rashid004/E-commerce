/** @format */
import PageNav from "../pages/PageNav";
import { FiPlus } from "react-icons/fi";

import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Empty from "../pages/Empty";
import { ModalForm } from "../../ModalSection/ModalForm";

function Cart() {
  const saving = 25;
  const storePickup = 12;
  const {
    addToCart,
    handleIncrease,
    handleDecrease,
    handleRemove,
    handleTotal,
    appyPromoCode,
    promocode,
    setPromocode,
    handleClear,
  } = useContext(CartContext);

  // Destructure
  return (
    <>
      <PageNav />
      <section className="bg-gray-50 py-8 antialiased  md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="flex items-center justify-between flex-wrap">
            <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
              Shopping Cart
            </h2>
            <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl ">
              {addToCart.length} Items
            </h2>
          </div>
          {addToCart && addToCart.length <= 0 ? (
            <Empty />
          ) : (
            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  {addToCart.map((cartItems) => (
                    <div
                      key={cartItems.id}
                      className="rounded-lg border border-gray-200 bg-gray-100 text-black p-4 shadow-sm md:p-6"
                    >
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0 text-black">
                        <Link to="#" className="shrink-0 md:order-1">
                          <img
                            className="h-20 w-20 "
                            src={cartItems.thumbnail}
                            alt={cartItems.title}
                          />
                        </Link>

                        <label
                          htmlFor="counter-input"
                          className="sr-only text-black"
                        >
                          Choose quantity:
                        </label>
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              onClick={() => handleDecrease(cartItems.id)}
                              type="button"
                              id="decrement-button"
                              data-input-counter-decrement="counter-input"
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border   focus:outline-none focus:ring-2  border-gray-600 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 "
                            >
                              <AiOutlineMinus color="white" />
                            </button>
                            <span className="px-2 font-semibold">
                              {cartItems.quantity}
                            </span>
                            <button
                              onClick={() => handleIncrease(cartItems.id)}
                              type="button"
                              id="increment-button"
                              data-input-counter-increment="counter-input"
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border   focus:outline-none focus:ring-2  border-gray-600 bg-gray-700 hover:bg-gray-600 focus:ring-gray-700"
                            >
                              <FiPlus color="white" />
                            </button>
                          </div>
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900 ">
                              ${cartItems.price * cartItems.quantity.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <div className="flex items-center md:flex-col md:items-start gap-2 flex-wrap">
                            <Link
                              to="#"
                              className="text-base font-medium text-gray-900 hover:underline  "
                            >
                              {cartItems.title}
                            </Link>
                            <span className="text-sm text-blue-500 font-medium">
                              {cartItems.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => handleRemove(cartItems.id)}
                              type="button"
                              className="inline-flex items-center text-md font-medium text-indigo-500 hover:underline hover:text-indigo-600 "
                            >
                              <AiOutlineClose />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={handleClear}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white text-center"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm sm:p-6">
                  <p className="text-xl font-semibold text-gray-900 ">
                    Order summary
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-600 ">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 ">
                          ${handleTotal().toFixed(2)}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-600 ">
                          Savings
                        </dt>
                        <dd className="text-base font-medium text-green-700">
                          -${saving}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-600 ">
                          Store Pickup
                        </dt>
                        <dd className="text-base font-medium text-gray-900 ">
                          ${storePickup}
                        </dd>
                      </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                      <dt className="text-base font-bold text-gray-900 ">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900 ">
                        ${handleTotal().toFixed(2)}
                      </dd>
                    </dl>
                  </div>

                  <Link to="#">
                    <ModalForm />
                  </Link>

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-600 ">
                      {" "}
                      or{" "}
                    </span>
                    <Link
                      to="/product"
                      title=""
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Continue Shopping
                      <FaArrowRightLong />
                    </Link>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-sm  sm:p-6 text-black">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="voucher"
                        className="mb-2 block text-sm font-medium text-gray-900 "
                      >
                        Do you have a voucher or gift card?
                      </label>
                      <input
                        type="text"
                        id="voucher"
                        className="block w-full rounded-lg border  p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 border-gray-600 bg-gray-200 placeholder:text-gray-400 "
                        placeholder=""
                        value={promocode}
                        onChange={(e) => setPromocode(e.target.value)}
                        required
                      />
                      {promocode && promocode !== "DISCOUNT10" ? (
                        <span className="text-red-600 font-medium">
                          invalid code
                        </span>
                      ) : (
                        <span className="text-sm font-medium text-gray-700">
                          {promocode === "DISCOUNT10"
                            ? "Successfully apply"
                            : "USE DISCOUNT10"}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={appyPromoCode}
                      className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 bg-indigo-600 hover:bg-indigo-700 "
                    >
                      Apply now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
