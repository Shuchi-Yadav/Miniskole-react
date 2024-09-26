import React, {useState} from "react";

function HookCounterThree(){
    const [name, setName] = useState({firstname:'',lastName:''})

    return(
        <form>
            <input type="text" value={name.firstname} onChange={e => setName({...name, firstname:e.target.value})}></input>
            <input type="text" value={name.lastName}  onChange={e => setName({...name,lastName:e.target.value})}></input>
            <h1>Your firstname : {name.firstname}</h1>
            <h2>your lastName : {name.lastName}</h2>
        </form>
    )
}

export default HookCounterThree