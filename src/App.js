import Axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const [firstname, setFirstName] = useState('')
  const [secondname, setSecondName]= useState('')

  const submitName = () => {
     Axios.post ("http://localhost:3001/insert", {
      firstname:firstname,
       secondname:secondname
      }).then (() => {
        alert("successfull insert");

      });
  };

  return (
    <div className="App">
       <h1> My Name</h1>

       <div className='form'>
        <label>First Name</label>
        <input type="text" name="Firstname" onChange={(e) => {
          setFirstName(e.target.value)
        }}/>
        <label>Second name</label>
        <input type="text" name="Secondname"  onChange={(e) => {
          setSecondName(e.target.value)
        }}/>


        <button onClick={submitName}>Submit</button>
        </div>
    </div>
  );
}

export default App;
