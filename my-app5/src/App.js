import React, { useState } from 'react';
import './App.css';

function App() {

  let [items,setItems] = useState([]);
  let [newItemName,setNewItem] = useState('');
  let [newDescription, setNewDescription] = useState('');

  // logic

  const addItem = () => {
    if (newItemName.trim() === "" || newDescription.trim() === ""){
      alert('values cannot be empty')
      return
    }
    const newItem = {
      id : Math.floor(Math.random() * 1000 + 1),
      newItemName : newItemName,
      newDescription : newDescription
    }
    items = [...items, newItem]
    setItems(items)
    setNewItem('')
    setNewDescription('')
  }

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
  }
  
  return (
    <div className="App">
      <h1>Item list</h1>
      <div>
          <label>Name:</label>
          <input type="text" id="name" value={newItemName} onChange={(event) => {setNewItem(event.target.value)}} />
      </div>

      <div>
          <label>Description:</label>
          <input type="text" id="description" value={newDescription} onChange={(event) => {setNewDescription(event.target.value)}}></input>
      </div>
      <button onClick={addItem}>Add Item</button>
      <ul>
          {items.map(item => (
            <li key="item.id">
              <strong>{item.newItemName}</strong> - {item.newDescription}
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
