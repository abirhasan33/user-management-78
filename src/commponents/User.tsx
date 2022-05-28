import React, { useEffect, useState } from 'react';
import UserModel from '../types/models';
import Users from './Users';

const User = () => {

    const [user, setUser] = useState<UserModel[]>([])
    const [team, setTeam] = useState<UserModel[]>([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setUser(data))
    },[])

    const handeleadUser = (user: UserModel):void => {
        const newTeam = [...team, user];
        setTeam(newTeam);
    }
    return (
        <div>
            <h2>My User</h2>
            <h3>Tesm size: {team.length}</h3>
            {/* <Users name='abir' age={55} addUser={handeleadUser}></Users> */}
            {
                user.map(user => <Users user={user} addUser={handeleadUser}></Users>)
            }
        </div>
    );
};

export default User;