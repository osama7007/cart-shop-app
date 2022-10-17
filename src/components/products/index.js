import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './products.css';
function Products({increment}) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	let getProducts = () => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProducts(json));
	};
	if (!products) {
		return <span class='loader'></span>;
	}

	return (
		<>
			<div className='products-list d-flex justify-content-center flex-wrap container-fluid'>
				{products.map((product) => {
					return (
						<div className='product-card m-5 text-center' key={product.id}>
							<div className='product-img'>
								<img src={product.image} alt='product-card' className='w-100' />
							</div>
							<p>{product.title}</p>
							<p>{product.category}</p>
							<hr />
							<p>{product.price} EG</p>
							<Link to={`/products/${product.id}`}>
								<button className='btn btn-primary'>Product Details</button>
							</Link>
							<button className='btn btn-warning ms-2' onClick={increment}>
								Add To Cart
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Products;
