import logo from './logo.svg';
import './App.css';
import { useCallback } from 'react';
import {Counter} from './common/Counter/counter';
import  {UserData}  from './common/UserData/UserData';

function App() {
  return (
    <div className="App">
      <h1>Redux Demo</h1>
      <Counter></Counter>
      <UserData></UserData>
    </div>
  );
}

export default App;
