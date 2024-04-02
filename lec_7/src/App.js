import React , {useEffect} from 'react'
import './App.css';
import { useState } from 'react';

const App = () => {

  const [value, setValue] = useState(100)
  const [Data, setData] = useState(0)

  useEffect(()=>{
    console.warn("useEffect Value")
  },[value])

  return (
    <div className="App">
      <h1>App Component</h1>
      <h2>Count : {value}</h2>
      <h2>Data : {Data}</h2>
      <button onClick={()=>setValue(value+1)}>Count</button>
      <button onClick={()=>setData(Data+1)}>Data</button>

    </div>
  );
}

export default App;
