import { User } from "./User"

export function UsersList ({ users }) {
    return (
        <section>
            export const data = &#91;<br />
            {!!users && users.length > 0 && users.map(({ 
                _id,
                name,
                email,
                password,
                userType,
                idUserType,
                profilePicture
                }) => { 
                 return (
                    <User
                        key={_id}
                        _id={_id}
                        name={name}
                        email={email}
                        password={password}
                        userType={userType}
                        idUserType={idUserType}
                        profilePicture={profilePicture}
                    />
                 )
                }) 
            }
            &#93;
        </section>
    )
}