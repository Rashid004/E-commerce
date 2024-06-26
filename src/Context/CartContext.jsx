/** @format */

import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/FirebaseAuth";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [addToCart, setAddToCart] = useState([]);
  const [discount, setDiscount] = useState("");
  const [promocode, setPromocode] = useState("");
  const [invalidPromocode, setInvalidPromocode] = useState("Invalid promocode");
  const [userName, setUserName] = useState("");

  // Load cart items from local storage when component mounts
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setAddToCart(JSON.parse(savedCartItems));
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || "User");
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  // Save cart items to local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(addToCart));
  }, [addToCart]);

  // Add product to the Cart
  const handleAddToCart = (product) => {
    if (!addToCart.length) {
      setAddToCart([...addToCart, { ...product, quantity: 1 }]);
      return;
    }
    const isExistProduct = addToCart.find(
      (findItem) => findItem.id === product.id
    );
    toast.success("Product added to cart");

    if (isExistProduct) {
      const updateCart = addToCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setAddToCart(updateCart);
    } else {
      setAddToCart([...addToCart, { ...product, quantity: 1 }]);
    }
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

  // HandleRemove for remove item from cart
  const handleRemove = (id) => {
    const removeItem = addToCart.filter((filter) => filter.id !== id);
    setAddToCart(removeItem);
  };

  // Calculate Total Amount
  const handleTotal = () => {
    const totalPrice = addToCart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return totalPrice - discount; // Subtract discount from total
  };

  // Apply Promo Code
  const applyPromoCode = () => {
    if (promocode === "DISCOUNT10") {
      setDiscount(handleTotal() * 0.1); // Apply 10% discount
      setInvalidPromocode(false); // Reset invalid promo code message
    } else {
      setInvalidPromocode(true); // Set invalid promo code message
    }
    setPromocode(""); // Clear promo code input
  };
  // Clear Cart
  const handleClear = () => {
    setAddToCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        handleAddToCart,
        handleIncrease,
        handleDecrease,
        handleRemove,
        handleTotal,
        applyPromoCode,
        promocode,
        setPromocode,
        handleClear,
        userName,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
