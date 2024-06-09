/** @format */

import { useState } from "react";
import Footer from "./Footer";
import PageNav from "./PageNav";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseAuth";

function Contact() {
  const [userContact, setUserContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    msg: "",
  });

  const handleContact = (e) => {
    setUserContact({ ...userContact, [e.target.name]: e.target.value });
  };

  // SignUp with email,password username
  // const handleContactSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Validate the requiindigo fields
  //     if (
  //       !userContact.firstName ||
  //       !userContact.lastName ||
  //       !userContact.email ||
  //       !userContact.msg
  //     ) {
  //       return toast.error("All fields are requiindigo");
  //     }

  //     // Add the document to the "ContactUser" collection in Firestore
  //     await addDoc(collection(db, "ContactUser"), {
  //       firstName: userContact.firstName,
  //       lastName: userContact.lastName,
  //       email: userContact.email,
  //       message: userContact.msg,
  //     });

  //     // Display success message
  //     toast.success(
  //       `Form Submitted Successfully Thank you ${userContact.firstName}`
  //     );

  //     // Reset the form fields
  //     setUserContact({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       password: "", // Assuming password is also a part of userContact object
  //       msg: "",
  //     });
  //   } catch (err) {
  //     // Display error message
  //     toast.error(err.message);
  //   }
  // };

  return (
    <>
      <PageNav />
      <div className="py-4 sm:pb-32">
        <h2 className="text-center text-[32px] font-medium sm:font-semibold md:font-bold sm:text-[38px] md:text-[44px] mb-4">
          Contact Us
          <div className="mx-auto w-12 h-1 bg-gray-800 rounded-sm mt-2"></div>
        </h2>
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-center text-gray-600 leading-tight mb-8">
            We&lsquo;d love to hear from you! Here&lsquos;s how you can reach
            us...
          </p>
          <div className="w-full h-64 sm:h-80 md:h-96">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086719395181!2d-122.4194150846811!3d37.77492927975842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c631f7961%3A0x4a0c2b8d6f212cd9!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1603914379382!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        <form
          action="https://getform.io/f/ebpdgoyb"
          method="POST"
          className="bg-gray-50 mt-10 max-w-6xl mx-auto"
        >
          <div className="flex items-center flex-col justify-center gap-4  py-6">
            <input
              className="block w-2/3 md:w-1/3 lg:h-1/4 py-2 md:py-4 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 "
              name="firstName"
              type="text"
              autoComplete="off"
              value={userContact.firstName}
              onChange={handleContact}
              placeholder="Full Name"
            />
            <input
              className="block w-2/3 md:w-1/3 lg:h-1/4 py-2 md:py-4 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 "
              type="text"
              name="lastName"
              autoComplete="off"
              value={userContact.lastName}
              onChange={handleContact}
              placeholder="Last Name"
            />
            <input
              className="block w-2/3 md:w-1/3 lg:h-1/4 py-2 md:py-4 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 "
              type="email"
              name="email"
              autoComplete="off"
              value={userContact.email}
              onChange={handleContact}
              placeholder="Email"
            />

            <textarea
              id="message"
              name="msg"
              type="text"
              value={userContact.msg}
              onChange={handleContact}
              placeholder="Enter Your Message"
              className="w-2/3 md:w-1/3 lg:h-1/4 h-28 md:h-32 py-4 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            />
            <div className="flex items-center justify-between">
              <button
                // onClick={handleContactSubmit}
                type="submit"
                className="bg-indigo-500 text-white font-medium py-3 px-6 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-700"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
