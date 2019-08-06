import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const  SignIn = ({ emailSignInStart, googleSignInStart }) => {
		const [ userCredentials, setCredentials ] = useState({ email: '', password: ''});

		const  { email, password } = userCredentials;

		const handelChange = event => {
			const { value, name } = event.target;			
			setCredentials({ ...userCredentials, [name]: value})
		}

		const handelSubmit = async event => {
			event.preventDefault();	
			emailSignInStart(email, password);
		}

		return (
				<div className='sign-in'>
						<h2>I already have an account</h2>
						<span>Sign in with your email and password</span>

						<form onSubmit={handelSubmit}>
							<FormInput 
								name='email' 
								type='email' 
								value={email} 
								handelChange={handelChange} 
								label='Email'
								required 
							/>
							
							<FormInput 
								name='password' 
								type='password' 
								value={password} 
								handelChange={handelChange} 
								label='Password'
								required
							/>
							<div className='buttons'>
								<CustomButton type='Submit' value='Submit From'> Sign In </CustomButton>
								<CustomButton  type='button'onClick={googleSignInStart} isGoogleSignIn > Sign In  with Google </CustomButton>
							</div>
						</form>
				</div>
		)
    
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
