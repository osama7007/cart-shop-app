import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './navbar.css';
function Navbar({count}) {
  return (
		<>
			<nav>
				<ul className='d-flex justify-content-end gap-4 container pt-3'>
					<li>
						<Link to='products'>Products</Link>
					</li>
					<li className='position-relative'>
						<Link to='/Cart'>Cart</Link>
						<div className='position-absolute counter-val '>
							{count}
						</div>
					</li>
					<li>
						<Link to='/Login'>Login</Link>
					</li>
					<li>
						<Link to='/Counter'>Counter</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Navbar