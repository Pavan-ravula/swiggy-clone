import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";
import Footer from "./Footer";
import Cartnavbar from "./Cartnavbar";

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!state) return <p>No checkout data found</p>;

  const { address, cart } = state;

  // -----------------------------
  // BACKEND URL
  // -----------------------------
  // const API = "https://backend-menu-api-1.onrender.com/order/create-order";

  // -----------------------------
  // SAVE ORDER INTO DATABASE
  // -----------------------------
  const saveOrderToDB = async () => {
  try {
    const res = await fetch("https://backend-menu-api-1.onrender.com/order/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
        address,
        // items: cart.items,
        totalAmount: cart.totalPrice,
        paymentStatus: "Paid",
        orderDate: new Date()
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error("Create order failed:", result);
      alert(result.error || result.message || "Server error while creating order");
      return;
    }

    // success
    console.log("Order saved:", result);
    navigate("/orders", { replace: true });
  } catch (err) {
    console.error("Network or client error:", err);
    alert("Network error while creating order");
  }
};


  // -----------------------------
  // HANDLE PAYMENT LOGIC
  // -----------------------------
  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Processing payment...");

    setTimeout(async () => {
      setLoading(false);
      setMessage("Payment Successful!");

      await saveOrderToDB();
    }, 1500);
  };

  return (
    <div className="wholepayment-section">
      <div className="paynav">
        <Cartnavbar />
      </div>

      <div className="payment-section">
        <h2>Payment</h2>
        <p><b>Total:</b> ₹{cart.totalPrice}</p>

        <div className="payment-container">
          <form className="payment-box" onSubmit={handlePayment}>
            <h2>Dummy Payment</h2>

            <label>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" required />

            <label>Expiry Date</label>
            <input type="text" placeholder="MM/YY" required />

            <label>CVV</label>
            <input type="password" placeholder="123" required />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                background: "#ff5200",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>

            {message && <p className="message">{message}</p>}
          </form>
        </div>
      </div>

      <div className="payfooter">
        <Footer />
      </div>
    </div>
  );
}

export default Payment;
