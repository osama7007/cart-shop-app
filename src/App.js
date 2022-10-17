import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';
import Products from './components/products';
import Cart from './components/cart';
import ProductDetails from './components/product-details';
import Login from './components/login';
import Navbar from './components/navbar';

function App() {
    let [count, setCount] = useState(0);

  const increment = () => {
		setCount( count + 1);
	};

	const decrement = () => {
		setCount( count - 1);
	};

  function reset() {
		setCount( count = 0);
	}
	return (
		<>
			<BrowserRouter>
				<Navbar count={count} />
				<Routes>
					<Route
						path='/products'
						element={<Products increment={increment} />}
					/>
					<Route
						path='/Cart'
						element={<Cart increment={increment} decrement={decrement} reset ={reset} count= {count}/>}
					/>
					<Route path='/Login' element={<Login />} />
					<Route path='/products/:id' element={<ProductDetails />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
