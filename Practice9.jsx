//This is the react code to understand the Conditional Rendering.
//via functional component

// Loginy=()=><p></p>

import { useState } from "react"

const Login = ()=>{
const [isLoggedIn, setIsLoggedIn] = useState(false);

return(
    <div>
    <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Click here!!!</button>
    {isLoggedIn? "Welcome to your profile!":"Sorry, You cannot login!!!"}
    </div>
    );
};

export default Login;
