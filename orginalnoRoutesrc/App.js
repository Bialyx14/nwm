import React, {useState} from 'react';
import './App.css';
import {Login} from './Login.js'
import { Register } from './register.js';
import { Main } from "./main.js";
import axios from 'axios';
import { Add } from './Add.js';
import { Edit } from './Edit.js';

function App() {
   React.useEffect(() =>{
    axios.post("http://localhost:8081/login")
   }, [])

   //Zmiana formularzy po wciśnięciu tekstu
   const [currentForm, setCurrentForm] = useState('login');
   const toggleFrom = (formName) =>{
    setCurrentForm(formName);
   }

  return (
    <div className="App">
      {
          //zmiana formularzy
          currentForm === "login" ? <Login onFormSwitch={toggleFrom}/> : currentForm==="register" ? <Register onFormSwitch={toggleFrom}/> : currentForm==="add" ? <Add onFormSwitch={toggleFrom}/> : currentForm==="main" ? <Main onFormSwitch={toggleFrom}/> : <Edit onFormSwitch={toggleFrom}/>
      }
    </div>
  );
}
export default App;
