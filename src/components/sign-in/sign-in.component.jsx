import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';
import { connect } from 'react-redux';

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

		handelSubmit = async event => {
			event.preventDefault();
			const { emailSignInStart } = this.props;
			const  { email, password } = this.state;

			emailSignInStart(email, password);
			/* try{
				await auth.signInWithEmailAndPassword(email, password);
				this.setState({email: '', password: ''})
			} catch (error) {
				console.log(error);
			} */
		}

    render() {
			const { googleSignInStart } = this.props;
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
										label='Email'
										required 
									/>
                  
                  <FormInput 
										name='password' 
										type='password' 
										value={this.state.password} 
										handelChange={this.handelChange} 
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
