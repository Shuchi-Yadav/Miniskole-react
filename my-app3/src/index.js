import React, {Component} from "react";
import ReactDOM from "react-dom/client";



function App() {
    return (
        <div>
            <h1>Hello</h1>
           <Counter></Counter>
           <MyClassComponents></MyClassComponents>
           <ButtonClick></ButtonClick>
        </div>
    )
}



// program 3



class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count : 0
        };
    }

    increment = () => {

        this.setState({
            count: this.state.count + 1
        })
    };

    decrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    };

    render() {
        return (
            <>
                <h1>Counter</h1>
                <p>Counter : {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }

}



class MyClassComponents extends Component {

    render() {
        return (
            <div>
                <h1>This is called class component</h1>
            </div>
        )
    }
}

// program 1  ------ example of event click
// apperance logic and data


function ButtonClick() {

    const handleClick = () => {
        alert("This is example of button is clicked")
    }

    return (
        <div>
            <h1>Click example</h1>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}


















const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);
