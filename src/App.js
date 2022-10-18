import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Products from './components/products';
import Cart from './components/cart';
import ProductDetails from './components/product-details';
import Login from './components/login';
import Navbar from './components/navbar';
import Counter from './components/counter';
function App() {


	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/products' element={<Products />} />
					<Route path='/Cart' element={<Cart />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/products/:id' element={<ProductDetails />} />
					<Route path='/Counter' element={<Counter />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
