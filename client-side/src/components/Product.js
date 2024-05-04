import React from "react";
export default function Product(props) {
  const handleAddToCart = () => {
    props.addToCart(props);
     // Call addToCart function passed as prop
     console.log(props)
  };

  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </p>
    </div>
  );
}
