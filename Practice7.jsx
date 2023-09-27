import React, { useState } from 'react';

function LoginForm() {
  return <form> {/* Render your login form here */}</form>;
}

function Profile() {
  return <p>Welcome to your profile!</p>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <Profile /> : <LoginForm />}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

export default App;
