import React, {Component} from "react";

class Conec extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    increaseCount = () => {
        //this.state.count = this.state.count +1  its increment but not resnder in UI so we usse setstate to render
        this.setState({
            count : this.state.count + 1
        })
    }

    decreaseCount = () => {
        this.setState ({
            count : this.state.count - 1
        })
    }

    render(){
        return(
            <div>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increaseCount}>+</button>
                <button onClick={this.decreaseCount}>-</button>
            </div>
        )
    }

}

export default Conec