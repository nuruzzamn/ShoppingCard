import React, { useState } from "react";
import data from "../data/Data";
import Header from "./Header";
import CartList from "./CartList";
import ProductsList from "./ProductsList";
import "../App.css";

const ShoppingCard = () => {
  const [product, setProduct] = useState(data);

  console.log("SC", product);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductsList product={product} addToCart={addToCart}></ProductsList>
      )}
    </div>
  );
};

export default ShoppingCard;
