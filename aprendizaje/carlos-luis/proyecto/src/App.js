import React from 'react'
import './App.css';


class LoginForm extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <form className="form_sign_in App">
          <p>Sign in</p>
          <hr/> <br/>
          <fieldset>
            <legend>
              Sign in
            </legend>
            <label htmlFor="email" className="formLabel">Email</label>
            <input type="text" id="email"/>
            <label htmlFor="password" className="formLabel">Password</label>
            <input type="password" id="password"/>
          </fieldset>
      </form>
    )
  }
}

function App() {
  return (
    <LoginForm/>
  )
}

export default App;
