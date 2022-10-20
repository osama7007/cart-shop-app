import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../redux/auth';
import { useNavigate } from 'react-router-dom';
function Login() {
  const dispatch = useDispatch();

  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
	});

  const navigate = useNavigate();
	const onSubmit = (data) =>{
     console.log(data)
     dispatch(loggedIn());
    navigate('/products')
    };
  return (
		<form onSubmit={handleSubmit(onSubmit)} className='form'>
			<label htmlFor='email'>email</label>
			<input
				{...register('email', {
					required: true,
					pattern: {
						value:
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						message: 'Please enter a valid email',
					},
				})}
			/>
			{errors?.email?.type === 'required' && (
				<p className='text-danger'>required field</p>
			)}
			{errors?.email?.type === 'pattern' && (
				<p className='text-danger'>invalid email</p>
			)}
			<label htmlFor='password'>password</label>
			<input type='password' {...register('password', { required: true , minLength:10 })} />
			{errors?.password?.type === 'required' && (
				<p className='text-danger'>required field</p>
			)}
			{errors?.password?.type === 'minLength' && (
				<p className='text-danger'>must be 10 characters or more</p>
			)}

			<input type='submit' className='btn btn-primary submitbtn' />
		</form>
	);
}

export default Login