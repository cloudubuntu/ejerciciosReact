import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import Ej1 from './components/Ej1';
import Ej2 from './components/Ej2';
import Ej3 from './components/Ej3';

function App() {
  // const [msj, setMsj]=useState('from changed state');
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Ej1></Ej1>
      <hr />
      <Ej2 msj='my friend!'></Ej2>
      <hr />
      <Ej3 msj='my friend!'></Ej3>

    </div>
  );
}

export default App;
