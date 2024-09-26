import React, {useState} from "react";

function Counterf(){
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(   (preCount) => preCount + 1)
    }

    const incrementFive = () => {
        increment();
        increment();
        increment();
        increment();
        increment();
    }

    return(
        <div>
            <div>Count:{count}</div>
            <button onClick={incrementFive}>increment</button>
        </div>
    )
}

export default Counterf