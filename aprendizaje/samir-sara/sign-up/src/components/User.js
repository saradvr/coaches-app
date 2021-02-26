export function User ({ _id, name, email, password, userType, idUserType, profilePicture }) {
    return (
      <article>
        {/* <h2>{ name }</h2>
        <p>{ _id }</p>
        <p><u>{ email }</u></p>
        <p>{ password }</p>
        <p>{ userType }</p>
        <img src={ profilePicture } alt="Imagen de perfil"></img> */}
        <pre>
        &nbsp;&nbsp;&nbsp;&nbsp;&#123; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_id: '{ _id }',<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: '{ name }',<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email: '{ email }',<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password: '{ password }',<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userType: '{ userType }',<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idUserType: '{ idUserType }',<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;profilePicture: '{ profilePicture }' <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&#125;,
        </pre>
      </article>
    )
}
