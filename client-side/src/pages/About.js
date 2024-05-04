import React from 'react';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

const ProductDetailPage = () => {
	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / About"/>
		 	<section className="section section-center">
		        <div className="title">
		          <span />
		          <h2>our history</h2>
		          <span />
		        </div>
		        <p className="about-text">
		          Shree Ganesh Electric with Good Quality products and Customer service
				  continuous improvement in processes,systems and capabilities are the hall marks of leader
				  in business 
				  The Electric Standard Products business and new Products Development NPD  function of L&T Electrical&
				  Automation E&A have been awarded the deming Prize 2019
				  
		        </p>
		    </section>
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default ProductDetailPage;