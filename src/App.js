import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button'
import Label from './components/label/Label';
function App() {
  const [DT, setDT] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <Label name="Time to do some tests!"/>
        <Button DT={DT} setDT={setDT} name="Hello"/>
        <h1>{DT}</h1>
      </header>
    </div>
  );
}

export default App;
