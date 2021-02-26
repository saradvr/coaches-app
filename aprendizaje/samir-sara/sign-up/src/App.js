import './App.css';
import { v4 as uuidv4 } from 'uuid';
// import { User } from './components/User'
import { Form } from './components/Form';
import React from 'react';
import { UsersList } from './components/UsersList';
import { data } from './data';



class App extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    userType: '',
    profilePicture: '',
    users: data,
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  createNewUser = e => {
    e.preventDefault()
    const { name, email, password, userType, profilePicture } = this.state
    const newUser = {
      _id: uuidv4(),
      name,
      email,
      password,
      userType,
      idUserType: uuidv4(),
      profilePicture,
    }

    this.setState({
      users: [...this.state.users, newUser],
      name: '',
      email: '',
      password: '',
      userType: '',
      profilePicture: '',
    })
  }

  render() {
    const { 
      name, 
      email, 
      password, 
      userType, 
      profilePicture, 
      users 
    } = this.state
    return (
      <main className="App">
        <Form
          name={name}
          email={email} 
          password={password} 
          userType={userType}
          profilePicture={profilePicture}
          createNewUser={this.createNewUser}
          handleChange={this.handleChange}
        />
        <UsersList
          users={users}
        />
      </main>
    )  
  }
  
}

export default App;



