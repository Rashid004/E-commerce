/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./components/pages/Home"));
const Products = lazy(() => import("./components/pages/Products"));
const About = lazy(() => import("./components/pages/About"));
const Contact = lazy(() => import("./components/pages/Contact"));
const Login = lazy(() =>
  import("../src/components/Authentication/Login/Login")
);
const SignUp = lazy(() =>
  import("../src/components/Authentication/SignUp/SignUp")
);
const CartProvider = lazy(() => import("./Context/CartContext"));
const ProductProvider = lazy(() => import("./Context/ProductContext"));
const SingleProducts = lazy(() => import("./SingleProductPage/SingleProducts"));
const Cart = lazy(() => import("./components/Cart/Cart"));

const PageNotFound = lazy(() => import("./components/pages/PageNotFound"));

import SpinnerFullPage from "./components/pages/Home/SpinnerFullPage";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route>
                  <Route index element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="product" element={<Products />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="cart" element={<Cart />} />
                  <Route
                    path="singleProduct/:id"
                    element={<SingleProducts />}
                  />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<SignUp />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
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
