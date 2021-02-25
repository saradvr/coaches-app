import React from 'react'
import './App.css';

class loginForm extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <form>
          <p>Sign in</p>
          <hr/>
          <input type="text"/>
          <input type="password"/>
      </form>
    )
  }
}

function App() {
  return (
    <loginForm/>
  )
}

export default App;
