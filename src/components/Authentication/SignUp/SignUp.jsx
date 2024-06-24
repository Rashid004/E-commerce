/** @format */

import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../../Firebase/FirebaseAuth";

function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userSignUp.username || !userSignUp.email || !userSignUp.password) {
      return toast.error("All fields are required");
    } else {
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          userSignUp.email,
          userSignUp.password
        );

        const user = res.user;

        await updateProfile(user, {
          displayName: userSignUp.username,
        });

        toast.success("Signup successful!");
        navigate("/login");
      } catch (err) {
        toast.error(err.message);
      }
    }
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-14 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center gap-4 md:gap-5">
            <img
              className="mx-auto h-10 w-auto"
              src="/images/Logo.png"
              alt="Your Company"
            />
            <FaCartShopping size="3.5em" />
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-100 px-5 py-6 rounded-md">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="username"
                  type="text"
                  autoComplete="off"
                  value={userSignUp.username}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                  value={userSignUp.email}
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
                  value={userSignUp.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Do You have an account ?
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              <button>Login</button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;

/** @format */

// import { Link, useNavigate } from "react-router-dom";
// import { FaCartShopping } from "react-icons/fa6";
// import { useState } from "react";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import toast from "react-hot-toast";
// import { auth } from "../../../Firebase/FirebaseAuth";

// function SignUp() {
//   const [userSignUp, setUserSignUp] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!userSignUp.username || !userSignUp.email || !userSignUp.password) {
//       return toast.error("All fields are required");
//     } else {
//       try {
//         const res = await createUserWithEmailAndPassword(
//           auth,
//           userSignUp.email,
//           userSignUp.password
//         );

//         const user = res.user;

//         await updateProfile(user, {
//           displayName: userSignUp.username,
//         });

//         toast.success("Signup successful!");
//         navigate("/login");
//       } catch (err) {
//         toast.error(err.message);
//       }
//     }
//   };

//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-14 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         <div className="flex items-center justify-center gap-4 md:gap-5">
//           <img
//             className="mx-auto h-10 w-auto"
//             src="/images/Logo.png"
//             alt="Your Company"
//           />
//           <FaCartShopping size="3.5em" />
//         </div>
//         <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//           Sign Up to your account
//         </h2>
//       </div>

//       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-100 px-5 py-6 rounded-md">
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Username
//             </label>
//             <div className="mt-2">
//               <input
//                 id="name"
//                 name="username"
//                 type="text"
//                 autoComplete="off"
//                 value={userSignUp.username}
//                 onChange={handleChange}
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Email address
//             </label>
//             <div className="mt-2">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 value={userSignUp.email}
//                 onChange={handleChange}
//                 required
//                 className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between">
//               <label
//                 htmlFor="password"
//                 className="block text-sm
