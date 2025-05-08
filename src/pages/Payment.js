// Payment.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const { cartItems, clearCart } = useCart();
  const { token } = useAuth();
  const navigate = useNavigate();

  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = item.price ? String(item.price) : '0';
      const cleanedPrice = price.replace(/[^\d.-]/g, '');
      return sum + parseFloat(cleanedPrice || 0) * (item.quantity || 1);
    }, 0).toFixed(2);
  };

  const handlePayment = async (method) => {
    if (!token) {
      alert('Please log in to place an order');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: cartItems,
          totalAmount: getTotal(),
          paymentMethod: method,
        }),
      });

      const data = await response.json();
      if (data.success) {
        clearCart();
        alert(`Payment successful with ${method}`);
        navigate('/');
      } else {
        alert('Payment failed: ' + (data.message || 'Unknown error'));
      }
    } catch (err) {
      console.error('Payment error:', err);
      alert('Error processing payment.');
    }
  };

  return (
    <div className="payment-container">
      <h2>Choose Payment Method</h2>
      <p>Total: ₹{getTotal()}</p>
      <div className="payment-options">
        <button onClick={() => handlePayment('Credit Card')}>Credit/Debit Card</button>
        <button onClick={() => handlePayment('UPI')}>UPI</button>
        <button onClick={() => handlePayment('Cash on Delivery')}>Cash on Delivery</button>
      </div>
    </div>
  );
}

export default Payment;
