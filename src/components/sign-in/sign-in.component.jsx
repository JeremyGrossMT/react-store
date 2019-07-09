import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
           email: '',
           password: '' 
        }
    }

		handelChange = event => {
			const { value, name } = event.target;
			
			this.setState({[name]: value})
		}

		handelSubmit = event => {
			event.preventDefault();
			this.setState({email: '', password: ''})
		}

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                  <FormInput 
										name='email' 
										type='email' 
										value={this.state.email} 
										handelChange={this.handelChange} 
										label='email'
										required 
									/>
                  
                  <FormInput 
										name='password' 
										type='password' 
										value={this.state.password} 
										handelChange={this.handelChange} 
										label='password'
										required
									/>
                  <div className='buttons'>
										<CustomButton type='Submit' value='Submit From'> Sign In </CustomButton>
										<CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In  with Google </CustomButton>
									</div>
                </form>
            </div>
        )
    }
}

export default SignIn;
