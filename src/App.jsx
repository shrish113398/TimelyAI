// App.js
import React from 'react';
import './App.css';
import Home from './components/Home'; 
import Main from './components/Main'; // Correct the import statement

function App() {
  return (
    <>
      <Home /> 
      <Main />{/* Use <Home /> instead of <home /> */}
    </>
  );
}

export default App;
