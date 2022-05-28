import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User{
    name: string,
    job: string,
    age: number
}

const Counter = () => {

    const [counter, setcounter] = useState<number>(0);
    const [user, setUser] = useState<User  | null>(null);

    const handeleIncrese = ():void =>{
        setcounter(counter + 1);
    }

    const handeleUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'abir',
            job: 'heronow',
            age: 25
        }
        setUser(userData);
    }
    const handeleNameChaing = (e: ChangeEvent<HTMLInputElement>):void =>{
        e.preventDefault();
    }

    return (
        <div>
            <h1>This is Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handeleIncrese}>Increse</button>
        </div>
    );
};

export default Counter;