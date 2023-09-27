import { useState } from "react";

const Counting2=()=>{
const [counter,setcounter]=useState(0);

return(
    <div>
    <p>Counter Changing: {counter}</p>
    <button style= {{ backgroundColor:"red", zoom : "50px", color: "#e9e9e9"}} onClick={()=>setcounter(counter+1)}>
        Click here</button>
        <p>Counter Changing: {counter}</p>
        <p>Counter Changing: {counter}</p>
        <p>Counter Changing: {counter}</p>
        <p>Counter Changing: {counter}</p>
    </div>
);
};

export default Counting2;

// () => setCounter(counter + 1) is an arrow function that gets executed when the button is clicked. It's a callback function that performs an action when the button is clicked.

// setCounter(counter + 1) is the action performed when the button is clicked. It's using the setCounter function provided by React to update the counter state variable.

// counter represents the current value of the state.
// counter + 1 is the new value we want to set for the counter state. It increments the current value by 1.
// So, when you click the "Increment" button, the setCounter function is called with the new value of counter (which is the current value plus 1), and React takes care of updating the state. This leads to a re-render of the component, and the UI reflects the updated counter value.

// setCounter is a function that you can call like this: setCounter(newValue), where newValue is the new value you want to assign to the counter state. This function is used to update the state in a React functional component.

// State Updater Function: setCounter is a function that React provides for you. This function allows you to update the state value. When you call setCounter(newValue), React takes care of updating the counter state with newValue.

// Triggering Re-renders: When you call setCounter(newValue) to update the state, React will re-render the component with the new state value. This re-render ensures that the UI reflects the latest state.