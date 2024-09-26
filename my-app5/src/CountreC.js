import React, {Component} from "react";

class CounterC extends Component {
    constructor(){
        super();

        this.state = {
            count : 0
        }

    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    incrementFive = () => {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render(){
        return(
            <div>
                <div>Count:{this.state.count}</div>
                <button onClick={this.incrementFive}>increment </button>
            </div>
        )
    }
}

export default CounterC