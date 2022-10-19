import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './navbar.css';
import { useSelector } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';


function Navbar() {
	  const ProductCount = useSelector((state) => state.cartStore.cartCount);

  return (
		<>
			<nav className='nav-bar  bg-warning p-1'>
				<ul className='d-flex justify-content-between gap-4 container pt-3 align-items-center'>
					<div className='logo'>
						<li>
							<Link to='/products'>Cart Shop</Link>
						</li>
					</div>
					<div className='navbar d-flex gap-5'>
						<li>
							<Link to='products'>Products</Link>
						</li>
						<li className='position-relative'>
							<Link to='/Cart'>Cart</Link>
							<div className='position-absolute counter-val '>
								<span>{ProductCount}</span>
								<FaCartPlus size='1rem' />
							</div>
						</li>
						<li>
							<Link to='/Login'>Login</Link>
						</li>
						<li>
							<Link to='/Counter'>Counter</Link>
						</li>
					</div>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Navbar