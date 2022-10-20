import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './navbar.css';
import { useSelector } from 'react-redux';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { LoggedOut } from '../redux/auth';
function Navbar() {
	  const ProductCount = useSelector((state) => state.cartStore.cartCount);
		const isAuth = useSelector(state=>state.authStore.isAuth);
		const dispatch = useDispatch()
		let logOut = ()=>{
			dispatch(LoggedOut());
		}

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
						{!isAuth && (
							<li>
								<Link to='/Login'>Login</Link>
							</li>
						)}
						{!isAuth && (
							<li>
								<Link to='/Signup'>Signup</Link>
							</li>
						)}
						<li>
							<Link to='/Counter'>Counter</Link>
						</li>
						{isAuth && (
							<li>
								<button className='btn btn-danger' onClick={() => logOut()}>
									Logout
								</button>
							</li>
						)}
					</div>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Navbar