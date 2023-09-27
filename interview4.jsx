import { Component } from "react";
// import { render } from "react-dom";

class Text extends Component {
    state =
        {
            initial: "",
        };


    change = () => {


        this.setState((gray) => ({

            initial: gray.initial === "" ? "grayscale(100%)" : "",

        }));


    }

    render() {
        return (
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqB0z2CLQTljHpJOT5ZmroSPQgrYi1uj-9tQ&usqp=CAU' alt="" style={{ filter: this.state.initial }} />
                <button onClick={this.change}>Click here</button>
            </div>
        );
    }
}

export default Text;

