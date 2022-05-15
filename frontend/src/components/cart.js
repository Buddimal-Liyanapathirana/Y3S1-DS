import React, { Component, useState } from "react";

const Cart = (props) => {
  const { cart, handleChange, setCart } = props;
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((movie) => {
      return movie.id !== id;
    });
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((movie) => {
      ans += movie.price + movie.amount;
    });
    setPrice(ans);
  };

  return (
    <section>
      <div>
        {cart.map((movie) => (
          <div className="cart_box">
            <div className="cart_img">
              <img src={movie.image}></img>
              <p>{movie.name}</p>
            </div>
            <div>
              <button onclick={() => handleChange(movie, 1)}>+</button>
              <button>{movie.price}</button>
              <button onclick={() => handleChange(movie, 1)}>-</button>
            </div>
            <span>{movie.price}</span>
            <button onclick={() => handleRemove(movie._id)}>-</button>
          </div>
        ))}
        <div className="total">
          <span>Total Price is {price}</span>
        </div>
      </div>
    </section>
  );
};

export default Cart;
