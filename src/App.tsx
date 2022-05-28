import React from 'react';
import './App.css';
import Counter from './commponents/Counter';
import User from './commponents/User';

let student: string = 'abir';
let age: number = 69;
let isSmart: boolean = true;

let students: string[] = ['jor', 'baiden', 'hros'] 
let fees: number[] = [1, 2, 3, 4, 5]


interface Person {
  name: string,
  job?: string,
  age: number,
  employed: string | boolean,
  location?: any
}

const person: Person = {
  name: 'abir hasan',
  // job: 'hero',
  age: 85,
  employed: true,
  location: 55
}


const addHandeleUser = (fistName: string, age: number, address: string):number => {
  const total: number = 50;
  console.log(fistName, age, address);
  return total;
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <User></User>
    </div>
  );
}

export default App;
