/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart/Cart";
import Login from "./components/pages/Login/Login";
import { useState } from "react";

function App() {
  const [addToCart, setAddToCart] = useState([]);

  // Add product to the Cart
  const handleAddToCart = (product) => {
    const isExistProduct = addToCart.find(
      (findItem) => findItem.id === product.id
    );

    if (isExistProduct) {
      const updateCart = addToCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setAddToCart(updateCart);
    } else {
      setAddToCart([...addToCart, { ...product, quantity: 1 }]);
    }
    console.log(addToCart);
  };

  // Increase Quantity
  const handleIncrease = (id) => {
    const incQuantity = addToCart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setAddToCart(incQuantity);
  };
  // Decrease Quantity
  const handleDecrease = (id) => {
    const decQuantity = addToCart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setAddToCart(decQuantity);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="home" element={<Home />} />
          <Route
            path="product"
            element={<Products handleAddToCart={handleAddToCart} />}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="cart"
            element={
              <Cart
                addToCart={addToCart}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
              />
            }
          />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
