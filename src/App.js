import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {movies} from './Data'
import List from './Components/List';
import CustomNavbar from './Components/CustomNavbar';
import Addfilm from './Components/Addfilm';

function App() {
   const[films,setfilms]=useState(movies);
   const[Caracter,setCaracter]=useState('');
   const[rate,setRate]=useState(0);
   const addMovie=(movie)=>{
    setfilms([...films,movie])

   }
  return (
  <div>
    <CustomNavbar setCaracter={setCaracter} setRate={setRate}/>
    <br/>
    <Addfilm addMovie={addMovie}/>
    <List films={films} Caracter={Caracter}rate={rate} />
    
  </div>
   
  );
}

export default App;
