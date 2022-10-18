import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {reset , decrement , increment} from "../redux/counterSlice";
import './counter.css'
function Counter() {

    const globalCount = useSelector((state) =>state.counter.counter);
	const dispatch = useDispatch();


	return (
        <div className='counter d-flex flex-wrap justify-content-center align-items-center '>
				<button  className='btn btn-large btn-danger m-5 fs-5'  onClick={() => dispatch(decrement())}>-</button>
				<span>{globalCount}</span>
				<button className='btn btn-large btn-primary m-5 fs-5' onClick={() => dispatch(increment())}>+</button>
				<button className='btn btn-large btn-warning m-5 fs-5'   onClick={() => dispatch(reset())}>Reset</button>
			</div>
	);
}

export default Counter;
