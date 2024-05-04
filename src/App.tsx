import React from 'react';
import Board from './component/Board';
import Userform from './component/Userform';
import './css/app.css';

function App() {
  const message: string = 'hello world';
  console.log(message);

  return (
    <div className="wrapper">
      <h1>안녕하세요~!</h1>
      <Board />
      <Userform />
    </div>
  );
}

export default App;
