import React from 'react'
import "./cart.css";
function Cart({increment , decrement , reset , count}) {
  return (
    <div className="cart">

		<div className='counter'>
			<button className='dec btn btn-lg btn-danger m-5 ' onClick={decrement}>
				-
			</button>
			<span>{count}</span>
			<button className='inc btn btn-lg btn-primary m-5' onClick={increment}>
				+
			</button>
			<button className='reset btn btn-lg btn-warning m-5' onClick={reset}>
				RESET
			</button>
		</div>
    </div>
	);
}

export default Cart