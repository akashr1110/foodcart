import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { cartContext } from "../App";
const Cart = () => {
  const {cart} = useContext(cartContext)
  const [total, setTotal] = useState(0);
useEffect(()=>{
  setTotal(cart.reduce((acc, curr)=> acc+parseInt(curr.amt),0))
},[cart])

  return (
    <>
      <h1 className="cartHead">Cart Products</h1>
      <div className="cart-cont">
        {cart.map((product) => (
          <div className="cart-prod" key={product.id}>
            <div className="img">
              <img src={product.image} alt="img" />
            </div>
            <div className="cart-product-details">
              <h3>Product Name</h3>
              {product.name}
              <p>Price Rs:{product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="cartamt">Total Amount Rs: {total}</h1>
    </>
  );
};

export default Cart;
