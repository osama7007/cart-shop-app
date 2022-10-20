import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './signup.css';
import Select from 'react-select';

function Signup() {
    // react select section    
    // react select section

	const {
		control,
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		
	});
	const onSubmit = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='form'>
			<label htmlFor='firstName'>firstName</label>
			<input {...register('firstName', { required: true, maxLength: 20 })} />
			{errors?.firstName?.type === 'required' && (
				<p className='text-danger'>required field</p>
			)}
			<label htmlFor='lastName'>lastName</label>
			<input {...register('lastName', { required: true })} />
			{errors?.lastName?.type === 'required' && (
				<p className='text-danger'>required field</p>
			)}
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
			<input type='password' {...register('password', { required: true })} />
			{errors?.password?.type === 'required' && (
				<p className='text-danger'>required field</p>
			)}
			<label htmlFor='confirm password'>confirm password</label>
			<input
				type='password'
				{...register('confirmPassword', {
					required: true,
					validate: (val) => {
						if (watch('password') !== val) {
							return 'Your passwords do no match';
						}
					},
				})}
			/>
			{errors?.confirmPassword?.type === 'required' && (
				<p className='text-danger'>required field</p>
			)}
			{errors?.confirmPassword?.type === 'validate' && (
				<p className='text-danger'>not match</p>
			)}
			<Controller
				name='select'
				control={control}
				render={({ field }) => (
					<Select
						{...field}
						options={[
							{ value: 'chocolate', label: 'Chocolate' },
							{ value: 'strawberry', label: 'Strawberry' },
							{ value: 'vanilla', label: 'Vanilla' },
						]}
					/>
				)}
			/>
				<div className='checkbox'>

                    <label htmlFor="one">One</label>
					<input
						type='checkbox'
                    	{...register('checkBox')}
						id='One'
                        
					/>					
			</div>

			<input type='submit' className='btn btn-primary submitbtn' />
		</form>
	);
}

export default Signup;
