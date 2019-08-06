import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';


import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {

  const [ userCredentials, setCredentials ] = useState({
    displayName: '',   
    email: '',
    password: '',
    confirmPassword: ''
  });

  const  {displayName, email, password, confirmPassword} = userCredentials;

  const handelSubmit = async event => {
    event.preventDefault();      
    if(password !== confirmPassword){
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });    
  }

  const handelChange = event => {
    const { value, name } = event.target;    
    setCredentials({ ...userCredentials, [name]: value})
  }

  return (
      <div className='sign-up'>
          <h2 className='tilte'>I do not have an account</h2>
          <span>Sign up with your email and password</span>

          <form className='sign-up-form' onSubmit={handelSubmit}>
          <FormInput 
              name='displayName' 
              type='text' 
              value={displayName} 
              handelChange={handelChange} 
              label='Display Name'
              required 
            />

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

            <FormInput 
              name='confirmPassword' 
              type='password' 
              value={confirmPassword} 
              handelChange={handelChange} 
              label='Confirm Password'
              required
            />

            <div className='buttons'>
              <CustomButton type='Submit' value='Submit From'>Sign Up</CustomButton>                  
            </div>
          </form>
      </div>
  )
  
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
