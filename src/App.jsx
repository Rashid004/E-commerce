/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart/Cart";
import Login from "./components/pages/Login/Login";
import CartProvider from "./Context/CartContext";
import ProductProvider from "./Context/ProductContext";

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
              <Route path="login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
