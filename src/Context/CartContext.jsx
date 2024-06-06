/** @format */

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
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

  // HandleRemove for remove item from cart
  const handleRemove = (id) => {
    const removeItem = addToCart.filter((filter) => filter.id !== id);
    setAddToCart(removeItem);
  };

  // Handle Total amount
  const handleTotal = () => {
    const totalPrice = addToCart.reduce((total, acc) => {
      return total + acc.price * acc.quantity;
    }, 0);
    return totalPrice;
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
