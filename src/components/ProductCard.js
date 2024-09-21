import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Product</Link>
    </div>
  );
};

export default ProductCard;
