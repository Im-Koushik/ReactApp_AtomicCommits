import React,{FC} from 'react';
import './App.css';

interface Props{
  name:string
}

const App:FC<Props>=({name})=> {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  )
}

export default App;
