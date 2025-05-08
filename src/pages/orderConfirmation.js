import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderConfirmation() {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real-world scenario, you'd fetch order details from an API
    // For now, we're assuming you store the order details locally after order is placed
    const order = JSON.parse(localStorage.getItem('orderDetails'));
    setOrderDetails(order);
  }, []);

  const handleHomeRedirect = () => {
    navigate('/');  // Redirect user to the home page
  };

  return (
    <div className="order-confirmation-page">
      <h2>Thank you for your order!</h2>
      {orderDetails ? (
        <div>
          <h4>Order Summary</h4>
          <p><strong>Order ID:</strong> {orderDetails.id}</p>
          <p><strong>Total Amount:</strong> ₹{orderDetails.totalAmount}</p>
          <p><strong>Status:</strong> {orderDetails.status}</p>
          <button onClick={handleHomeRedirect}>Go to Home</button>
        </div>
      ) : (
        <p>Loading your order details...</p>
      )}
    </div>
  );
}

export default OrderConfirmation;
