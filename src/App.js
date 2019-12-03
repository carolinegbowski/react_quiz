import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'
import NumberButton from './components/NumberButton'


function App() {
  const [showComp, setShowComp] = useState(true);
  // let toggleComponents = true;
  return (
    <div className="App">
      <button onClick={e => setShowComp(!showComp)}>Toggle</button>
      { showComp ? <HomePage/> : <NumberButton/> }
    </div>
  );
}

export default App;
