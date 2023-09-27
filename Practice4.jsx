import { Component } from "react";

class Welcomy extends Component
{
    state=
    {
        name1:"",
        name2:""
    };

    render()
    {
        return(
<div>
    <div className="input1">
        <p>Enter the name of the person:</p>
        <input type="text" 
        placeholder="Enter your name here" 
        value={this.state.name1}
        onChange={(e)=>{
            console.log(e.target.value);
            this.setState({name1:e.target.value});
        }}
        />

    </div>
    <div className="input2">
    <p>Enter the family of the person:</p>
        <input type="text" 
        placeholder="Enter your family here" 
        value={this.state.name2}
        onChange={(e)=>{
            console.log(e.target.value);
            this.setState({name2:e.target.value});
        }}
        />

    </div>

    <div>
        <p>Welcome {this.state.name1} to the {this.state.name2} family.</p>
    </div>
</div>
        );
    }
}
export default Welcomy;