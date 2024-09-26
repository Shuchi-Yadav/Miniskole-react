import logo from './logo.svg';
import './App.css';
import React from 'react';



let items = [
  {id:1, descripttion: "Trolley bag", quantity :3, packed: false},
  {id:2,descripttion: "karate bags", quantity: 5, packed: false},
  {id:3, descripttion : "School bag", quantity: 10, packed : false}
]





function App() {
  return (
    <div className="App">
        <Logo/>
        <Form/>
        <PackingList/>
        <Stats/>
     
    </div>
  );
}


function Logo(){
  return <h1>Far away</h1>
}

function Form(){
  return(
      <div className='add-form'>
        <h3>What do you need for your trip?</h3>
        <select>
            {
              Array.from({length:10},(_,i) => i + 1).map((num) => (<option value={num}>{num}</option>))

            }
        </select>
        <input type='text' placeholder='items...'></input>
        <button>Add</button>
      </div>
  )
}


function Item({item}){
  return<li>{item.descripttion}</li>
}


function PackingList(){
  return(
    <div className='list'>
      <ul>
        {
           items.map((item) => (<Item item={item} />))
        }
      </ul>
    </div>
  )
}


function Stats(){
  return<footer className='stats'>
    <em>You have x items on your list and you already packed X %</em>
  </footer>
}

export default App;
