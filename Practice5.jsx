import { Component } from "react";

class Magic extends Component{
    state={
        Red:"",
        Green:"",
        Purple:"",
        Pink:"" 
};
render()
{
    return(
        <div>
            <div className="checkbox1">
                <span>Red</span>
                <input type="checkbox" name="Red" 
                checked={this.state.Red}
                onChange={(e)=>{
                console.log(e.target.checked);
                // const k = e.target.checked="Red";
                const k = "Red";
                // console.log(e.target.checked);
                // console.log(k);
                this.setState(
                    {
                    Red:k
                }
                )
            }
                }/>
            </div>
            <div className="checkbox2">
                <span>Green</span>
                <input type="checkbox" name="Green" 
                checked={this.state.Green}
                onChange={(e)=>{
                console.log(e.target.checked);
                const k ="Green";
                this.setState(
                    {
                        Green:k
                }
                )
            }
                }/>
            </div>
            <div className="checkbox3">
                <span>Purple</span>
                <input type="checkbox" name="Purple" 
                checked={this.state.Purple}
                onChange={(e)=>{
                console.log(e.target.checked);
                const k="Purple";
                this.setState(
                    {
                        Purple:k
                }
                )
            }
                }/>
            </div>
            <div className="checkbox4">
                <span>Pink</span>
                <input type="checkbox" name="Pink" 
                checked={this.state.Pink}
                onChange={(e)=>{
                console.log(e.target.checked);
                const k ="Pink";
                this.setState(
                    {
                        Pink: k
                }
                )
            }
                }/>
            </div>
            <div>
                <p>You have clicked {this.state.Red},{this.state.Green},
                {this.state.Purple},{this.state.Pink}</p>
                {/* {{this.state.Red}==Red && {this.state.Green}==Green
                {this.state.Purple}==Purple
                {this.state.Pink}==Pink}?<p>Done</p>: <p>Not Done</p> */}
            </div>
        </div>

    );
}
}
export default Magic;