import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import Ej1 from './components/Ej1';
import Ej2 from './components/Ej2';
import Ej3 from './components/Ej3';
import Ej4 from './components/Ej4';
import Ej6 from './components/Ej6';
import Ej7 from './components/Ej7';
import Ej8 from './components/Ej8';
import RegVet from './components/RegVet';
//import Tform from './components/Tform';

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
      <h2>Ej1</h2>
      <hr />
      {/* <Ej1></Ej1> */}
      <h2>Ej2</h2>
      <hr />
      {/* <Ej2 msj='my friend!'></Ej2> */}
      <h2>Ej3</h2>
      <hr />
      {/* <Ej3 msj='my friend!'></Ej3> */}
      <h2>Ej4y5</h2>
      <hr />
      {/* <Ej4></Ej4> */}
      <h2>Ej6</h2>
      {/* <Ej6></Ej6> */}
      <hr />
      <h2>Ej7</h2>
      {/* <Ej7></Ej7> */}
      <hr />
      <h2>Ej8</h2>
      <Ej8></Ej8>      
      <hr />
      <h2>Ej9</h2>
      <RegVet></RegVet>
      <hr />
    </div>
  );
}

export default App;
