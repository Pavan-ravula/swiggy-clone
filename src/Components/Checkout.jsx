import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import Cartnavbar from "./Cartnavbar";
import Footer from "./Footer";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    house: "",
    street: "",
    landmark: "",
    city: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  // BACKEND BASE URL
  const API = "https://backend-menu-api-1.onrender.com/order";

  const handleSubmit = async () => {
    if (!address.name || !address.phone || !address.city || !address.pincode) {
      alert("Please fill all required fields");
      return;
    }

    try {
      // SAVE ADDRESS USING FETCH
      await fetch(`${API}/save-address`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          address: address
        })
      });

      navigate("/payment", {
        state: {
          address,
          cart
        }
      });

    } catch (error) {
      console.error("Address saving failed:", error);
      alert("Failed to save address. Try again.");
    }
  };

  return (
    <div className="checkout-form">
      <div className="checknav">
        <Cartnavbar />
      </div>

      <div className="checkout-container">
        <h2>Delivery Address</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="phone" placeholder="Mobile Number" onChange={handleChange} />
        <input name="house" placeholder="House No" onChange={handleChange} />
        <input name="street" placeholder="Street" onChange={handleChange} />
        <input name="landmark" placeholder="Landmark" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="pincode" placeholder="Pincode" onChange={handleChange} />

        <button onClick={handleSubmit} style={{ marginTop: 20 }}>
          Confirm Address
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
