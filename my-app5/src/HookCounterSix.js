import React, {Component} from "react";

class HookCounterSix extends Component {
    constructor(props){
        super(props)

        this.state = {
            items : []
        }

    }

    handleId=(items) => {
        this.setState = ({
           items: {...this.state.items, id: this.state.items.length},
            value : Math.floor(Math.round() * 1000) + 1
        })

        
    }

    
    render() {
        return (
            <div>
                <h2>Bu using class component</h2>
                <button onClick={this.handleId}>Add item</button>
                <ul>
                    {
                       
                        this.state.items.map(item => (<li key = {item.id}>{item.value}</li>))
                    }
                </ul>
            </div>
        )
    }

}

export default HookCounterSix
