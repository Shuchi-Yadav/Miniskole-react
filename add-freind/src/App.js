import { useState } from "react"

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


const ids = [1,2,3,4,5]
const listElements = ids.map((id) => {
    return (
        <li key = {id.toString()}>
          id
        </li>
    )
})


export default function App() {

  const [showAddFriend, setShowAddFriend] = useState(false)

  function handleShowFriend(){
    setShowAddFriend((show) => !show)
  }
  
  return (
    <div className="App">
        <div className="sidebar">
            <FriendList />
            {showAddFriend && <FormAddFriend />}
            <Button onClick={handleShowFriend}>{showAddFriend ? 'close' : 'Add Friend'}</Button>
            <FormBillSplit />
        </div>
    </div>
  );
}


function FriendList() {
    const friends = initialFriends

    return (
      <ul>
        {
          // friend - object
          friends.map((friend)=>(
            // freind prop hai usme friend object pass kiya hain
            <Friend friend={friend} key={friend.id}/>
          ))
        }
      </ul>
    )
}

function Button({children, onClick}) {
  return (
    <button  className="button" onClick={onClick}>{children}</button>
  )
}

function Friend({friend}) {
  return (
    <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (
          <p className="red"> 
               You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}

        {friend.balance > 0 && (
           <p className="green">
              {friend.name} owes you {Math.abs(friend.balance)}
           </p>
        )}

        {friend === 0 && (
          <p>
            You and {friend.name} are even
          </p>
        )}

        <Button className="button">Select</Button>
    </li>
  )
}

/// form to addfriend

function  FormAddFriend () {

  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')
  
  function handleSubmit(e){
    e.prevent.default();
    if(!name || !image) return
    let id = crypto.randomUUID()
    const newfriend = {
      id : id,
      name,
      image: `{image}?={id}`,
      balance: 0

    }
    console.log(newfriend)
  }

    return (

      <form className="form-add-friend" onSubmit = {handleSubmit}>
          <label>Friends</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.event)}/>
          <label>Image</label>
          <input type="text" value={image} onChange={(e)=>setImage(e.target.event)} />
          <Button>Add</Button>
      </form>
    )
}


function FormBillSplit() {
  return(
    <form className="form-split-bill">
        <h2>Split  bill with x</h2>
        <label>Bill value</label>
        <input type="text" />

        <label>Your expense</label>
        <input type="text" />

        <label>X's  expenses</label>
        <input type="text" />

        <label>Who is paying the bill ??</label>
        <select>
          <option value="user">You</option>
          <option value="friend">Friend</option>
        </select>
        <Button>Split bill</Button>
    </form>
  )
}



