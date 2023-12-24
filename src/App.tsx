import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import User from './apivecina';
function App(){

  const[data,setData] = useState();
  const[name,setName] = useState(); 
  const[number,setNumber] = useState(10); 

  const URL= `https://pokeapi.co/api/v2/pokemon/${number}`

  useEffect(() =>{
  axios
  .get(URL)
  .then((response)=>{
    console.log(response.data);
    setData(response.data)
    setName(response.data.name)
  }).catch((err)=>{
    window.alert(err);
  });
  },[URL]);

  const[users,setUsers] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then ((res)=>res.json())
    .then ((data)=>setUsers(data))
    .catch((err) =>{
      console.log(err)
    })
  }

  return(
    
    <div className='App' style={{backgroundColor:"red", width:"1000px", height:"800px"}}>
      <h1 style={{color:'black'}}>Pokemon</h1>
      <input type={"number"} onChange={(e)=>setNumber(e.target.value)}/>
      <button>Mostrar</button>
      <h2 style={{color:'black'}}>Nombre: {name}</h2>
      <img style={{width:"200px", height:"200px"}} src={data?data.sprites.other.dream_world.front_default:"<p>Loading</p>"} />
      <h3 style={{color:'black'}}> Texto usando  JSONPLACEHOLDER</h3>
       <div>
        {
         users.map((user) =>(
          <User id={user.id} key ={user.id} name={user.name} email={user.email}/>
          ))
        }
       </div>
    </div>
    
    
    );



  }

  export default App;

 