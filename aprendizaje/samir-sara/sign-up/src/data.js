import { v4 as uuidv4 } from 'uuid';

export const data = [
    {
        _id: uuidv4(),
        name: 'Samir',
        email: 'samir@mail.com',
        password: '12345',
        userType: 'coach',
        idUserType: '',
        profilePicture: ''
    },
    {
        _id: uuidv4(),
        name: 'Sara',
        email: 'sara@mail.com',
        password: '54321',
        userType: 'coach',
        idUserType: '',
        profilePicture: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/03/11/15523046827096.jpg'
    },
]