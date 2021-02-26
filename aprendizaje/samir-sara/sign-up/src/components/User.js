export function User ({ _id, name, email, password, userType, profilePicture }) {
    return (
      <article>
        <h2>{ name }</h2>
        <p>{ _id }</p>
        <p><u>{ email }</u></p>
        <p>{ password }</p>
        <p>{ userType }</p>
        <img src={ profilePicture } alt="Imagen de perfil"></img>
      </article>
    )
}