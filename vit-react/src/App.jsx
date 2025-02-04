
import './App.css'
import ProfileCard from './ProfileCard';

function App() { 
  const hobby1=['Reading','Cooking']

const person = {name: 'John', age: 30};

//Without destructing using Dot notation
//const name = person.name;
//const age = person.age;

// With structuring
const {name, age} = person;

 return (
  <div>
      <h1>Hello</h1>
      <ProfileCard name="BUBU Rani" age={17} isMember={true} hobbies={['Reading','Cooking']} />
      <ProfileCard name="DUDU Raja"  age={18} isMember={false} hobbies={['Swimming','Hiking']} /> 
  </div>
 );
}


export default App
