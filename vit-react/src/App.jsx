
import './App.css'
import ProfileCard from './ProfileCard';

function App() { 
  const handleHobbyClick = (hobby) => {
    alert(`You have clicked on: ${hobby}`);
  };
  const bubuRaniProfile = {
    name:"BUBU Rani" ,
    age:17,
    isMember:true,
    hobbies:['Reading','Cooking'], 
    onHobbyClick:handleHobbyClick
  };


  const duduProfile = {
    name:"DUDU Raja" ,
    age:18,
    isMember:false,
    hobbies:['Swimming','Hiking'],
    onHobbyClick:handleHobbyClick
  };
 return (
  <div className='app-container'>
      <ProfileCard {...bubuRaniProfile}/>
      <ProfileCard {...duduProfile}/> 
  </div>
 );
}


export default App
