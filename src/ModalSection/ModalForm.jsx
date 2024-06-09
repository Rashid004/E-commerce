/** @format */

"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

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

  const handleOrder = (e) => {
    e.preventDefault();
    if (
      !orderDetails.fullName ||
      !orderDetails.address ||
      !orderDetails.pinCode ||
      !orderDetails.mobile
    ) {
      return toast.error("All fields are required");
    } else {
      toast.success("Order Successfull");
      onCloseModal();
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-4 py-1 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 bg-indigo-600 hover:bg-indigo-700 "
      >
        Toggle modal
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
