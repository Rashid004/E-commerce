/** @format */
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import toast from "react-hot-toast";
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth, googleProvider } from "../../../Firebase/FirebaseAuth";
import { useState, useEffect } from "react";
import { BsGoogle } from "react-icons/bs";

function Login() {
  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          toast.success("Sign in Successfully");
          navigate("/home");
        }
      })
      .catch((error) => {
        if (error.message) toast.error(error.message);
      });
  }, [navigate]);

  const handleChange = (e) => {
    setUserSignIn({ ...userSignIn, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userSignIn.email || !userSignIn.password) {
      return toast.error("All fields are required");
    } else {
      signInWithEmailAndPassword(auth, userSignIn.email, userSignIn.password)
        .then(async () => {
          toast.success("Sign in Successfully");
          navigate("/home");
        })
        .catch((err) => toast.error(err.message));
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, googleProvider);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 mt-14 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex items-center justify-center gap-4 md:gap-5">
          <img
            className="mx-auto h-10 w-auto"
            src="/images/Logo.png"
            alt="Your Company"
          />
          <FaCartShopping size="3.5em" />
        </div>
        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-100 px-5 py-6 rounded-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={userSignIn.email}
                onChange={handleChange}
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={userSignIn.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-2 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <BsGoogle />
            Sign in with Google
          </button>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don&rsquo;t have an account?
          <Link
            to="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            <button> Sign Up</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
