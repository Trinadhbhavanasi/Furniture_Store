// Checkout.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = item.price ? String(item.price) : '0';
      const cleanedPrice = price.replace(/[^\d.-]/g, '');
      return sum + parseFloat(cleanedPrice || 0) * (item.quantity || 1);
    }, 0).toFixed(2);
  };

  const handleProceedToPayment = () => {
    navigate('/payment'); // new route
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="checkout-items">
            {cartItems.map((item, idx) => (
              <div className="checkout-item" key={idx}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <h3 style={{ marginTop: '20px' }}>Total: ₹{getTotal()}</h3>
          <button onClick={handleProceedToPayment} style={{ marginTop: '10px' }}>
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
