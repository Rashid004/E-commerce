/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="home" element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
