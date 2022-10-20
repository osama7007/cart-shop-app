import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './components/products';
import Cart from './components/cart';
import ProductDetails from './components/product-details';
import Login from './components/login';
import Navbar from './components/navbar';
import Counter from './components/counter';
import Signup from './components/signup/signup';
import RoutGuard from './components/utilities/routGuard';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route element={<RoutGuard/>}>
						<Route path='/products' element={<Products />} />
						<Route path='/Cart' element={<Cart />} />
						<Route path='/products/:id' element={<ProductDetails />} />
					</Route>
					<Route path='/Counter' element={<Counter />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Signup' element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
