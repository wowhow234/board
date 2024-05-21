import React from 'react';
import '../css/app.css';
import Board from './Board';
import { Link } from 'react-router-dom';

const Home = () => {
    const message: string = 'hello world';
    console.log(message);
    
    return (
    <div className="wrapper">
      <h1>안녕하세요~!</h1>
        <Link to="/userform">작성하기</Link>
      <Board />
    </div>
    );
};

export default Home;