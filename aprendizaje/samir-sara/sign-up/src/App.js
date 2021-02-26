import './App.css';
import { v4 as uuidv4 } from 'uuid';
// import { User } from './components/User'
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
    console.dir(e.target)
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
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
      users: [...this.state.users, newUser]
    })

  }

  render(){
    const { name, email, password, userType, profilePicture, users } = this.state
    return (
      <main className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={name}
          />
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={email}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={password}
          />
          <label htmlFor="userType">Tipo de Usuario</label>
          <select
            name="userType"
            id="userType"
            onChange={this.handleChange}
            value={userType}
          >
            <option value="">Seleccione una opción</option>
            <option value="coach">Entrenador</option>
            <option value="client">Cliente</option>
          </select>
          <label htmlFor="profilePicture">Adjunta foto perfil</label>
          <input
            type="file"
            name="profilePicture"
            id="profilePicture"
            accept="image/png, image/jpeg"
            onChange={this.handleChange}
            value={profilePicture}
          />
          <button
            type="submit"
          >
            Registrarme
          </button>
        </form>
        <UsersList
          users={users}
        />
      </main>
    );
  }
  
}

export default App;
