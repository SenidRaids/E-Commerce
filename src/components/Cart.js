import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
