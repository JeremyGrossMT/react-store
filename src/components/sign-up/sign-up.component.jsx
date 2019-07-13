import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
      super();
      this.state = {
        displayName: '',   
        email: '',
        password: '',
        confirmPassword: ''
      }
  }

  handelSubmit = async event => {
    event.preventDefault();
    const  {displayName, email, password, confirmPassword} = this.state
    
    if(password !== confirmPassword){
      alert("Passwords don't match");
      return;
    }

    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: '',   
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (error) {
      console.error(error);
    }
  }

  handelChange = event => {
    const { value, name } = event.target;    
    this.setState({[name]: value})
  }

  render() {
      const  {displayName, email, password, confirmPassword} = this.state
      return (
          <div className='sign-up'>
              <h2 className='tilte'>I do not have an account</h2>
              <span>Sign up with your email and password</span>

              <form className='sign-up-form' onSubmit={this.handelSubmit}>
              <FormInput 
                  name='displayName' 
                  type='text' 
                  value={displayName} 
                  handelChange={this.handelChange} 
                  label='Display Name'
                  required 
                />

                <FormInput 
                  name='email' 
                  type='email' 
                  value={email} 
                  handelChange={this.handelChange} 
                  label='Email'
                  required 
                />
                
                <FormInput 
                  name='password' 
                  type='password' 
                  value={password} 
                  handelChange={this.handelChange} 
                  label='Password'
                  required
                />

                <FormInput 
                  name='confirmPassword' 
                  type='password' 
                  value={confirmPassword} 
                  handelChange={this.handelChange} 
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
}

export default SignUp;
