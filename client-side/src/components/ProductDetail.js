import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const Products = () => {
  // Static product details
  const productDetails = {
    image: '../images/products/michael-warf.jpg',
    title: 'Product Title',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  const { image, title, price, description } = productDetails;
  const [itemQty, setItemQty] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandle = () => {
    dispatch(addToCart(productDetails, itemQty));
  }

  const handleItemQty = (e) => {
    setItemQty(e.target.value)
  }

  return (
    <section className="single-product section">
      <div className="section-center single-product-center">
        <img src={image} className="single-product-img img" alt="" />
        <article className="single-product-info">
          <div>
            <h2 className="single-product-title">{title}</h2>
            <p className="single-product-company text-slanted">by marcos</p>
            <span className="single-product-price">${price}</span>
            <div className="single-product-colors">
              <span className="product-color" />
              <span className="product-color product-color-red" />
            </div>
            <p className="single-product-desc">
              {description}
            </p>
            <p className="item-qty">
              <select onChange={handleItemQty} defaultValue={itemQty}>
                {[...Array(10)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
              </select>
            </p>
            <button className="addToCartBtn btn" data-id="id" onClick={addToCartHandle}>add to cart</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Products;
