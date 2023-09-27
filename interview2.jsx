import { Component } from "react";
// import { render } from "react-dom";

class Welcome extends Component{
    state=
    {
        firstname:"",
        lastname:"",
    };

render()
{
return(
    <div>
        <div className="form">
            <p>Enter the first name:</p>
        <input type="text"  
        placeholder="Enter the first name:"
        value={this.state.firstname}
        onChange={(e) => {//getter->helps in changing the value.
            console.log(e.target.value); 
            this.setState({ firstname: e.target.value });
          }}
         />
        </div>
            <div className="form">
                <p>Enter the last name:</p>
                <input type="text" placeholder="Enter the last name:" value={this.state.lastname}
                onChange={(e)=>{
                    console.log(e.target.value);
                this.setState({ lastname:e.target.value });
                 }}
                  />
            </div>

            <div>
          <p>Welcome {this.state.firstname} to the {this.state.lastname} family.</p>
        </div>

        </div>
        
);
}
}

export default Welcome;


