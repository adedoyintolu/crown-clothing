import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'


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
          <FormInput type='submit' value='Submit Form' />
        </form>
      </div>
    )
  }
}


export default SignIn;