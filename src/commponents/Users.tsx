import React, { FC } from 'react';
import UserModel from '../types/models';

// interface Props{
//     age?: number,
//      name: string,
//      addUser: () => void
//     }

interface Props{
    user: UserModel,
    addUser: (user: UserModel)=> void
}

const Users: FC<Props> = ({user, addUser}) => {

    return (
        <div>
            <h2>Hello from: {user.name}</h2>
            <h2>{user.email}</h2>
            
            <button onClick={()=>addUser(user)}>Add me</button>
        </div>
    );
};

export default Users;