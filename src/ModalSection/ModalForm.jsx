/** @format */

"use client";

import { addDoc, collection } from "firebase/firestore";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../Firebase/FirebaseAuth";

export function ModalForm() {
  const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    address: "",
    pinCode: "",
    mobile: "",
  });
  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails("");
  }

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleOrder = async (e) => {
    e.preventDefault();

    try {
      // Validate the requiindigo fields
      if (
        !orderDetails.fullName ||
        !orderDetails.address ||
        !orderDetails.pinCode ||
        !orderDetails.mobile
      ) {
        return toast.error("All fields are requiindigo");
      }

      // Add the document to the "ContactUser" collection in Firestore
      await addDoc(collection(db, "ContactUser"), {
        FullName: orderDetails.fullName,
        Address: orderDetails.address,
        PinCode: orderDetails.pinCode,
        Mobile: orderDetails.mobile,
      });

      // Display success message
      toast.success(
        `Form Submitted Successfully Thank you ${orderDetails.fullName}`
      );

      // Reset the form fields
      setOrderDetails({
        fullName: "",
        address: "",
        pinCode: "",
        mobile: "",
      });
    } catch (err) {
      // Display error message
      toast.error(err.message);
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="flex w-full items-center justify-center rounded-lg mt-4 px-4 py-0 text-sm font-medium text-white  bg-indigo-600 hover:bg-indigo-700 "
      >
        Proceed to Checkout
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Complete Your Order
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="fullname" value="Full Name" />
              </div>
              <TextInput
                name="fullName"
                id="fullname"
                value={orderDetails.fullName}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Enter Full Address" />
              </div>
              <TextInput
                id="address"
                name="address"
                value={orderDetails.address}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pin" value="Your Pincode" />
              </div>
              <TextInput
                id="pin"
                name="pinCode"
                value={orderDetails.pinCode}
                onChange={handleChange}
                type="number"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="number" value="Your Number" />
              </div>
              <TextInput
                id="number"
                name="mobile"
                value={orderDetails.mobile}
                onChange={handleChange}
                type="number"
                required
                autoComplete="off"
              />
            </div>

            <div className="w-full">
              <Button onClick={handleOrder} className="w-full bg-indigo-600">
                Order Now
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
