import { Component } from "react";

class Class1 extends Component{
    state={
counter:0
    };
    incremenent1=()=>
    {
this.setState({counter:this.state.counter + 1 });
    };
    incremenent2=()=>
    {
this.setState({counter:this.state.counter-1});
    };
    render()
    {
        return (
            <div>
                <p>The Counter is :{this.state.counter}</p>
                <button onClick={this.incremenent1}>Increment</button>
                <button onClick={this.incremenent2}>Decrement</button>
            </div>
        );
    }
}
export default Class1;

