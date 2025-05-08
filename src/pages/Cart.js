// Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = item.price ? String(item.price) : '0';
      const cleanedPrice = price.replace(/[^\d.-]/g, '');
      return sum + parseFloat(cleanedPrice || 0);
    }, 0);
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ₹{getTotal()}</h3>
          <button className="buy-now-btn" onClick={() => navigate('/checkout')}>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
