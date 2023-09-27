import { Component } from "react";

class Practice6 extends Component{
state={
    ename:"",
    eclass:"",
    ecity:""
};

render()
{
    return(
        <div>
            <div className="part1">
                <p>Enter the name of the student:</p>
                <input type="text" placeholder="Enter name" 
                value={this.state.ename}
                onChange={(e)=>{
                    console.log(e.target.value);
                    this.setState({ename:e.target.value});
                }}/>
            </div>
            <div className="part2">
                <p>Enter the class of the student:</p>
                <input type="text" placeholder="Enter class"
                value={this.state.eclass}
                onChange={(e)=>{
                    console.log(e.target.value);
                    this.setState({eclass:e.target.value});
                }} />
            </div>
            <div className="part3">
                <p>Enter the city of the student:</p>
                <input type="text" placeholder="Enter city"
                value={this.state.ecity}
                onChange={(e)=>{
                    console.log(e.target.value);
                    this.setState({ecity:e.target.value});
                }} />
            </div>
            <div>
                <p>
                    The details of the student is :
                    Name of the student: {this.state.ename}
                    Class of the student:{this.state.eclass}
                    City of the student:{this.state.ecity}
                </p>
            </div>
        </div>

    );

}
}
 export default Practice6;