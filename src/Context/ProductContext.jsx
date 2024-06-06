/** @format */

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProdcutContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null);
  const [error, setError] = useState(null);

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
  return (
    <ProdcutContext.Provider
      value={{
        products,
        setProducts,
        selectProduct,
        setSelectProduct,
        setError,
        error,
      }}
    >
      {children}
    </ProdcutContext.Provider>
  );
}

export default ProductProvider;
