import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import NavBar from "./Navbar";
import PageHeading from "./PageHeading";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { responsive, productData } from "./data";

export default function Products() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch products from the server when the component mounts
    axios.get("http://localhost:3000/api/product")
        .then((res) => {
            console.log(res.data);
            setProducts(res.data.products);
        })
        .catch((error) => {
            console.error("Error:", error);
        });});
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log("Product added to cart:", product);
  };

  const productList = products.map((item) => (
    <Product
      key={item._id}
      name={item.name}
      url={item.image}
      price={item.price}
      description={item.description}
      addToCart={addToCart} // Pass addToCart function as prop
    />
  ));

  return (
    <div className="App">
      <NavBar />
      <PageHeading title="Home / Product" />
      <Carousel showDots={true} responsive={responsive}>
        {productList}
      </Carousel>
    </div>
  );
}
