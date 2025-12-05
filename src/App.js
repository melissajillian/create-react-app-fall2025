// import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent";
import {useState} from 'react';

const Comp = () => {
  return <p>Let it snow! Let it snow! Let it snow!</p>
}

function App() {
  const [count, setCount] = useState(2);
  
  return (
    <div className="App" id='root'>
            <TestComponent />

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Melissa has lived in Michigan her whole life.</p>
        <p>
          The winters can get very cold, but the snow is beautiful. 
        </p>
        <Comp />
        <button
          onClick={() => setCount(count + 1)}
        >Click Me</button>
          <div>{'❄️'.repeat(count)}</div>
      </header>
    </div>
  );
}

export default App;
