/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart/Cart";
import Login from "../src/components/Authentication/Login/Login";
import SignUp from "../src/components/Authentication/SignUp/SignUp";
import CartProvider from "./Context/CartContext";
import ProductProvider from "./Context/ProductContext";
import { Toaster } from "react-hot-toast";
import SingleProducts from "./SingleProductPage/SingleProducts";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="product" element={<Products />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="singleProduct/:id" element={<SingleProducts />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Routes>
            <Toaster
              toastOptions={{
                style: {
                  width: "300px",
                  height: "55px",
                },
                success: {
                  style: {
                    background: "white",
                  },
                },
              }}
            />
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
