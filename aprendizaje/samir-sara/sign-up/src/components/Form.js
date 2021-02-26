export function Form ({ 
    name, 
    email, 
    password, 
    userType, 
    profilePicture,
    createNewUser,
    handleChange
  }) {
    return (
      <form onSubmit={createNewUser}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={password}
        />
        <label htmlFor="userType">Tipo de Usuario</label>
        <select
          name="userType"
          id="userType"
          onChange={handleChange}
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
          onChange={handleChange}
          value={profilePicture}
        />
        <button
          type="submit"
        >
          Registrarme
        </button>
      </form>
    );
}