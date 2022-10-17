import React from 'react'
import { useState ,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './product-details.css';
function ProductDetails() {
  const [product, setProduct] = useState({});
  let {id} = useParams(); 
	useEffect(() => {
		getProducts();
	}, []);
	

	let getProducts = () => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((json) => {setProduct(json)
      console.log(json)});
	};
	return (
		<>
			<div className='product p-5 text-center '>
				<div className='product-img'>
					<img src={product.image} alt='product-details' className='product-img w-100' />
				</div>

        <div className="product-text">
        <h4 className='m-2'>{product.title}</h4>
        <p>{product.price} EG</p>
        </div>
			</div>
		</>
	);
}

export default ProductDetails