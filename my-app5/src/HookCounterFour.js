import React, {Component} from "react" ;

class HookCounterFour extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : {
                firstName:'',
                lastName : ''

            }
        }
    }

    handleFirstName = (event) => {
        this.setState = ({
            name: {...this.state.name, firstName:event.target.value}
        });
    }

    handleLastName = (event) => {
        this.setState = ({
            name: {...this,lastName: event.target.value}
        })
    }

    render() {
        return(
            <form>
                <input type="text" value={this.state.name.firstName} onChange={this.handleFirstName}/>
                <input type="text" value={this.state.name.lastName} onChange={this.handleLastName}/>
                <h1>your firstName is - {this.state.name.firstName}</h1>
                <h1>your lastName is - {this.state.name.lastName}</h1>
            </form>
        )
    }
}


export default HookCounterFour;