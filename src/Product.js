import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Rs: {product.price}/-</p>
      <strike>Rs: {product.oldPrice}/-</strike>
      <input type="button" value="Shop now" />
    </div>
  );
};

export default Product;

