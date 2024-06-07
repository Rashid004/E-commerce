/** @format */

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProdcutContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
          setProducts(res.data.products);
          setFilteredProducts(res.data.products);
        } else {
          const res = await axios.get("https://dummyjson.com/products");
          console.log(res.data.products);
          setProducts(res.data.products);
          setFilteredProducts(res.data.products);
        }
      } catch (err) {
        setError("Failed to fetch products.");
      }
    };
    getProducts();
  }, [selectProduct]);

  // Get AllProducts From Api
  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     try {
  //       const res = await axios.get("https://dummyjson.com/products");
  //       console.log(res.data.products);

  //       setAllProducts(res.data.products);
  //     } catch (err) {
  //       setError("Failed to fetch products.");
  //     }
  //   };
  //   getAllProducts();
  // }, []);

  return (
    <ProdcutContext.Provider
      value={{
        products,
        setProducts,
        selectProduct,
        setSelectProduct,
        setError,
        error,
        setFilteredProducts,
        filteredProducts,
      }}
    >
      {children}
    </ProdcutContext.Provider>
  );
}

export default ProductProvider;
