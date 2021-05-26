import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' required value={this.state.email} handleChange={this.handleChange} label='Email' />
          <FormInput name='password' type='password' required value={this.state.password} handleChange={this.handleChange} label='Password' />

          <div className='buttons'>
            <CustomButton type='submit'>
              sign in
          </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {''}
            sign in with Google
            {''}
            </CustomButton>
          </div>

        </form>
      </div>
    )
  }
}


export default SignIn;