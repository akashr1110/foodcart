import React from "react";
import "./product.css";
import { useContext } from "react";
import { cartContext } from "../App";
const Product = ({ product }) => {

  const {cart, setCart} = useContext(cartContext);
  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };
  return (
    <div className="product">
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs:{product.amt}</p>
        {cart && cart.includes(product) ? (
          <button className="btn" onClick={removeCart}>
            Remove Cart
          </button>
        ) : (
          <button onClick={addCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
