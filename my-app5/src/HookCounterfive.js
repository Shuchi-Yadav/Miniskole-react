import React , {useState} from 'react'
function HookCounterFive(){
    //[{id:1,value:125},{id:2,value:126},{id:3,value:127}]

    const [items , setItems] = useState([])

    const addItem = ()=>{
        setItems([
            ...items,
            {
                id:items.length,
                value:Math.floor(Math.random()*1000)+1
            }
        ])
    }
    return (
        <div>
            <button onClick={addItem}>Add element to list</button>
            <ul>
                {
                   items.map(item => (<li key = {item.id}>{item.value}</li>))
                }
            </ul>
        </div>
    )
}
export default HookCounterFive;