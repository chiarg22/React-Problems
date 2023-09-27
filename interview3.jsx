import { Component } from "react";

class Magicmessage extends Component{
state={
Red:"",
Green:"",
Purple:"",
Pink:"",
};

render()
{
return(
<div>
    <div className="checkbox1">
        <label htmlFor="">Red</label>
        <input type="checkbox" name="red" 
        // value="Red"
        // value={this.state.checked}
        checked={this.state.Red} 
        onChange={(e)=>{
            console.log(e.target.checked);
            const val= e.target.checked="Red";
            this.setState(
                {
                    Red:val,
                }
            )
            // console.log(e.target.value);
            // console.log("Red");
            // value = e.target.checked;
            // this.setState({checked:e.target.checked})
            // if(this.state.checked==true)
            // {
            // this.setState({Red:e.target.checked});
            // console.log(value);
            // <p>You have selected {this.state.Red} </p>
            // }
        }}
        />
        {/* <p>You have selected {this.state.Red} </p> */}
    </div>
    <div className="checkbox2">
        <label htmlFor="">Green</label>
        <input type="checkbox" name="Green" 
        // value="Red"
        // value={this.state.checked}
        checked={this.state.Green} 
        onChange={(e)=>{
            console.log(e.target.checked);
            const val= e.target.checked="Green";
            this.setState(
                {
                    Green:val,
                }
            )
        }}
        />
        {/* <p>You have selected {this.state.Green} </p> */}
    </div>
    <div className="checkbox3">
        <label htmlFor="">Purple</label>
        <input type="checkbox" name="Purple" 
        // value="Red"
        // value={this.state.checked}
        checked={this.state.Purple} 
        onChange={(e)=>{
            console.log(e.target.checked);
            const val= e.target.checked="Purple";
            this.setState(
                {
                    Purple:val,
                }
            )
        }}
        />
        {/* <p>You have selected {this.state.Purple} </p> */}
    </div>
    <div className="checkbox2">
        <label htmlFor="">Pink</label>
        <input type="checkbox" name="Pink" 
        // value="Red"
        // value={this.state.checked}
        checked={this.state.Pink} 
        onChange={(e)=>{
            console.log(e.target.checked);
            const val= e.target.checked="Pink";
            this.setState(
                {
                    Pink:val,
                }
            )
        }}
        />
        {/* <p>You have selected {this.state.Pink} </p> */}
    </div>
    <div>
        <p>You have clicked {this.state.Red} {this.state.Green} {this.state.Purple} {this.state.Pink} </p>
    </div>
</div>
);
}
}

export default Magicmessage;