import React from "react";

const ProductsList = ({ product, addToCart }) => {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        return (
          <div style={{ width: "33%" }} key={productItem}>
            <div className="product-item">
              <img src={productItem.url} width="100%" />
              <p>
                {productItem.name} | {productItem.category}{" "}
              </p>
              <p> {productItem.seller} </p>
              <p> Taka {productItem.price} /-</p>
              <button onClick={() => addToCart(productItem)}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
