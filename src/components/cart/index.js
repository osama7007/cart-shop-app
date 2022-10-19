import React from 'react'
import "./cart.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/cartSlice';
function Cart() {

  const cartProduct = useSelector((state) => state.cartStore.cartProducts);
  const ProductCount = useSelector((state) => state.cartStore.cartCount);
  const dispatch = useDispatch();


return (
	<div className='products-list d-flex justify-content-center flex-wrap container-fluid'>
		<p className='cart-count'>In Cart :{ProductCount}</p>
		{cartProduct.map((product) => {
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
					<button
						className='btn btn-danger ms-2 '
						onClick={() => {
							dispatch(deleteProduct(product.id));
						}}>
						Remove
					</button>
				</div>
			);
		})}
	</div>
);
  
}

export default Cart