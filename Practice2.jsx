import { Component } from "react";

class Counting extends Component
{
    state = {
        counter:0
    };

increment=()=>
{
    if(this.state.counter<100)
// this.setState(this.state.counter+1);
this.setState({counter:this.state.counter+1});
};
decrement=()=>
{  if(this.state.counter>0)
    this.setState({counter:this.state.counter-1});

};
    render(){
        return(
            <div>
                <p>The count is here: {this.state.counter}</p>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>Decrease</button>
            </div>

        );
    }
}

export default Counting;