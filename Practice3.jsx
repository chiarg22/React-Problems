import { Component } from "react";

class Practice3 extends Component
{
    state={
        name:"Ankit",
        email:"Ankit@google.com",
};

render(){
    return(
    <div>
        <div className="name">
            <p>Enter Name</p>
            <input type="text" placeholder="Enter your name here"
            value={this.state.name}
            onChange={(e)=>{
                console.log(e.target.value);
            this.setState({name:e.target.value});
            }}/>

        </div>
        <div className="email">
<p>Enter Email</p>
<input type="email" placeholder="Enter your email here" 
value={this.state.email}
onChange={(e)=>{
    console.log(e.target.value);
    this.setState({email:e.target.value});
}}/>
        </div>
        <div>
            <p>The entered name is : {this.state.name}</p>
            <p>The entered name is : {this.state.email}</p>
        </div>
    </div>
    );
}
}
export default Practice3;