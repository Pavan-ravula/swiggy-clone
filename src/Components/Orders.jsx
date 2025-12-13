import React, { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

    fetch(`https://backend-menu-api-1.onrender.com/order/orders/${userId}`)
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error("Fetch orders error:", err));
  }, [userId]);

  if (!userId) {
    return <h2>Please login to see your orders</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div 
            key={order._id} 
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "10px",
              marginTop: "20px",
              background: "#fafafa"
            }}
          >
            <h3>Order ID: {order._id}</h3>
            <p><b>Date:</b> {new Date(order.orderDate).toLocaleString()}</p>
            <p><b>Status:</b> {order.paymentStatus}</p>

            {/* Address Section */}
            <h4>Delivery Address</h4>
            <p>{order.address.name}</p>
            <p>{order.address.phone}</p>
            <p>{order.address.house}, {order.address.street}</p>
            <p>{order.address.landmark}</p>
            <p>{order.address.city} - {order.address.pincode}</p>

            {/* Items */}
            <h4>Items</h4>
            <ul>
              {order.items.map((item, i) => (
                <li key={i}>
                  {item.name} × {item.quantity} — ₹{item.price}
                </li>
              ))}
            </ul>

            {/* Total */}
            <p><b>Total Amount:</b> ₹{order.totalAmount}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
