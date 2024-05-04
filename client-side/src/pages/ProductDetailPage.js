import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';
import Loading from '../components/Loading';
import { ToastContainer } from 'react-toastify';
import { ToastObjects } from '../util/toastObject';

const ProductDetailPage = () => {
  const { id } = useParams();

  // Static product details
  const productDetail = {
    image: '../images/products/michael-warf.jpg',
    title: 'Product Title',
    price: 10.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  return (
    <>
      <NavBar />
      <PageHeading title="Home / Product" />
      {(Object.keys(productDetail).length === 0) ? <Loading /> : <ProductDetail details={productDetail} />}
      <Sidebar />
      <Cart />
    </>
  );
}

export default ProductDetailPage;
