import React from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
// import Me from './components/Me';
import Nav from './components/Nav';

function App() {
  return (
   <div>
    <Nav></Nav>
    <main>
      <About />
    </main>
   </div>
  );
}

export default App;
